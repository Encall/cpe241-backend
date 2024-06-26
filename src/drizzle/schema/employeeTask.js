const {
    int,
    datetime,
    mysqlTable,
    primaryKey,
    varchar,
} = require('drizzle-orm/mysql-core');
const employee = require('./employee');
const flight = require('./flight');

const employeeTask = mysqlTable(
    'employeeTask',
    {
        employeeID: int('employeeID').references(() => employee.employeeID),
        assignDateTime: datetime('assignDateTime', {
            mode: 'date',
            fsp: 6,
        }).notNull(),
        taskType: varchar('taskType', { length: 255 }).notNull(),
        taskDescription: varchar('taskDescription', { length: 255 }).notNull(),
        status: varchar('status', { length: 255 }).notNull(),
        flightID: int('flightID').references(() => flight.flightID),
    },
    (table) => {
        return {
            pk: primaryKey({
                columns: [table.employeeID, table.assignDateTime],
            }),
            pkWithCustomName: primaryKey({
                columns: [table.employeeID, table.assignDateTime],
                name: 'pk_employeeTask',
            }),
        };
    }
);

module.exports = employeeTask;
