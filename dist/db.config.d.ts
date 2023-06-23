import { DynamoDB } from 'aws-sdk';
declare const db: DynamoDB.DocumentClient;
declare const Table = "hari-user";
export { db, Table };
