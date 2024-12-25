import UserRepository from "./user.repository";

class UserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async getProfile(id: string) {
        return await this.userRepository.findById(id);
    }
}

export default UserService;