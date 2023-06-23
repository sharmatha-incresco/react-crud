export declare class User {
    id: number;
    name: string;
}
export declare class CreateUserDto {
    name: string;
}
export declare class UpdateUserDto {
    name: string;
}
export declare class UsersController {
    private users;
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
    };
    create(createUserDto: CreateUserDto): {
        id: number;
        name: string;
    };
    update(id: number, updateUserDto: UpdateUserDto): {
        id: number;
        name: string;
    };
    remove(id: number): {
        id: number;
        name: string;
    };
}
