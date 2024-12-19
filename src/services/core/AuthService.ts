import { UserExistsException } from '@exceptions/UserExistsException';
import { UserNotFoundException } from '@exceptions/UserNotFoundException';
import { AuthRequest, AuthResultQuery, AuthSignUpRequest } from '@interfaces/AuthInterfaces';
import UserRepository from '@repositories/UserRepository';
import passwordUtil from '@utils/passwordUtil';
import tokenUtil from '@utils/tokenUtil';

class AuthService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async verifyAuth(authInput: AuthRequest) {
        const auth = await this.userRepository.findByEmail(authInput.email);

        if(!auth) {
            throw new UserNotFoundException();
        }

        return this.validateAuth(auth, authInput);
    }

    public async createAuth(authSignUp: AuthSignUpRequest) {
        const auth = await this.userRepository.findByEmail(authSignUp.email);

        if(auth) {
            throw new UserExistsException()
        }

        authSignUp.password = await passwordUtil.hashPassword(authSignUp.password);
        const register = await this.userRepository.createOne(authSignUp);
        
        return { register };
    }

    // Private methods
    private async validateAuth(auth: AuthResultQuery, authInput: AuthRequest) {
        const { password } = auth;

        const verifyPassword = await passwordUtil.verifyPassword(authInput.password, password);

        if(!verifyPassword) {
            throw new UserNotFoundException();
        }

        const token = tokenUtil.generateToken({ id: auth.id,  roles: auth.roles});
        return { token, expiresIn: 3600 };
    }
}

export default AuthService;
