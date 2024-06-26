const { mysqlTable, varchar } = require('drizzle-orm/mysql-core');

const userAccount = mysqlTable('userAccount', {
    userID: varchar('userID', { length: 36 }).primaryKey(),
    firstName: varchar('firstName', { length: 255 }).notNull(),
    lastName: varchar('lastName', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    password: varchar('password', { length: 255 }).notNull(),
    phoneNumber: varchar('phoneNumber', { length: 255 }).notNull(),
});

module.exports = userAccount;
