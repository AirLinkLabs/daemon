const Keyv = require('keyv');
const db = new Keyv('sqlite://AirDaemon.db');

module.exports = { db }