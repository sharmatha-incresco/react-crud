import { User } from './user.dto';
export declare class AppService {
    getUser(): Promise<any>;
    createUser(user: User): Promise<boolean>;
    updateUser(id: string, name: User): Promise<boolean>;
    deleteUser(id: String): Promise<any>;
    getSpecficUser(userid: String): Promise<any>;
}
