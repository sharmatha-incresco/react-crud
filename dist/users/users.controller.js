"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = exports.UpdateUserDto = exports.CreateUserDto = exports.User = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
class User {
}
exports.User = User;
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
class UpdateUserDto {
}
exports.UpdateUserDto = UpdateUserDto;
let UsersController = exports.UsersController = class UsersController {
    constructor() {
        this.users = [
            { id: 1, name: 'sharmatha' },
            { id: 2, name: 'sindhu' },
            { id: 3, name: 'kaviya' },
            { id: 4, name: 'divya' }
        ];
    }
    findAll() {
        return this.users;
    }
    findOne(id) {
        const user = this.users.find((u) => u.id === Number(id));
        if (!user) {
            return null;
        }
        return user;
    }
    create(createUserDto) {
        const newUser = {
            id: this.users.length + 1,
            name: createUserDto.name,
        };
        this.users.push(newUser);
        return newUser;
    }
    update(id, updateUserDto) {
        const user = this.users.find((u) => u.id === Number(id));
        if (!user) {
            return null;
        }
        user.name = updateUserDto.name;
        return user;
    }
    remove(id) {
        const index = this.users.findIndex((u) => u.id === Number(id));
        if (index === -1) {
            return null;
        }
        const deletedUser = this.users[index];
        this.users.splice(index, 1);
        return deletedUser;
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of users', type: User, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The user', type: User }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The created user', type: User }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The updated user', type: User }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The deleted user', type: User }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users')
], UsersController);
//# sourceMappingURL=users.controller.js.map