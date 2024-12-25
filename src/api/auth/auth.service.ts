import EmailQueueService from "../email/email-queue.service";
import UserExistsException from "../user/exceptions/user-exists.exception";
import UserNotFoundException from "../user/exceptions/user-not-found.exception";
import UserRepository from "../user/user.repository";
import { AuthRequest, AuthResultQuery, AuthSignUpRequest } from "./auth.interface";
import passwordUtil from "./utils/password.util";
import tokenUtil from "./utils/token.util";


class AuthService {
    private userRepository: UserRepository;
    private emailQueueService: EmailQueueService;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
        this.emailQueueService = new EmailQueueService();
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

        // sending queue for send email
        this.emailQueueService.queueEmail(
            'welcome',
            authSignUp.email,
            'Welcome to Our platform',
            { firstName: authSignUp.first_name }
        )
        
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
