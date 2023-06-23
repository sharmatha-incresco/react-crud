"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const db_config_js_1 = require("./db.config.js");
let AppService = exports.AppService = class AppService {
    async getUser() {
        const params = {
            TableName: db_config_js_1.Table,
        };
        try {
            const { Items = [] } = await db_config_js_1.db.scan(params).promise();
            return Items;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    async createUser(user) {
        const params = {
            TableName: db_config_js_1.Table,
            Item: user
        };
        try {
            await db_config_js_1.db.put(params).promise();
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    async updateUser(id, name) {
        const params = {
            TableName: db_config_js_1.Table,
            Key: {
                userId: id
            },
            UpdateExpression: 'set #ag = :age, #com = :company, #nam = :name,#sal=:salary',
            ExpressionAttributeValues: {
                ":age": name.age, ":company": name.company, ":name": name.name, ":salary": name.salary,
            },
            ExpressionAttributeNames: {
                "#ag": "age",
                "#com": "company",
                "#nam": "name",
                "#sal": "salary",
            }
        };
        try {
            console.log(name);
            await db_config_js_1.db.update(params).promise();
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    async deleteUser(id) {
        const params = {
            TableName: db_config_js_1.Table,
            Key: {
                userId: id
            }
        };
        try {
            await db_config_js_1.db.delete(params).promise();
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    async getSpecficUser(userid) {
        const params = {
            TableName: db_config_js_1.Table,
            Key: {
                userId: userid
            }
        };
        try {
            const Item = await db_config_js_1.db.get(params).promise();
            console.log(Item);
            return Item;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
};
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map