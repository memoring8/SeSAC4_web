const Sequelize = require("sequelize");

const config = require('../config/config.json')["development"];
// const a = require("../confing/config.json");
// const a = {
    // "development": {"host: localhost~~~"},
    // "production": 
// }
// const config + a["development"];

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.sequelize = Sequelize;
// 위는 결국 db = {"sequelize": sequelize, "Sequelize": Sequelize}; 이 된다.

db.Visitor = require("./Visitor")(sequelize, Sequelize);
// model/Visitor.js 에서 함수가 실행되고 return된 model

// const a = require("./Visitor");
// const b = a(sequelize, Sequelize);

// 
module.exports = db;