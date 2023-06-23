"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = exports.db = void 0;
const aws_sdk_1 = require("aws-sdk");
require('dotenv').config();
aws_sdk_1.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
console.log(process.env.AWS_REGION);
const db = new aws_sdk_1.DynamoDB.DocumentClient();
exports.db = db;
const Table = 'hari-user';
exports.Table = Table;
//# sourceMappingURL=db.config.js.map