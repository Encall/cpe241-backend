const { float,int, mysqlTable,date,datetime, serial, varchar } = require('drizzle-orm/mysql-core');
const {passenger} = require('./passenger');
const {booking} = require('./booking');
const payment = mysqlTable( "payment",{
    paymentID: int('paymentID').primaryKey().autoincrement(),
    bookingID: int('bookingID').references(()=>booking.bookingID),
    userID: int('userID').references(()=>booking.userID),
    amount: float('amount').notNull(),
    paymentDateTime: datetime('paymentDateTime', { mode: 'date', fsp: 6 }),
    paymentMethod: varchar('paymentMethod', { length: 255 }).notNull(),
});

module.exports = payment;