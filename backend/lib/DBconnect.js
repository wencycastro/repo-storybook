const Sequelize = require('sequelize');
const { getParams } = require('./DBparams');
const userModel = require('../models/user');
const storyModel = require('../models/book');


async function connectToDB() {

    const params = await getParams();

    const sequelize = new Sequelize(
        params.database,
        params.user,
        params.password, {
            host: params.host,
            dialect: params.dialect,
        }
    );


    const User = userModel(sequelize);
    const Story = storyModel(sequelize);
    await sequelize
        .authenticate()
        .then(() => {
            console.log("Connection has been established successfully.");

        })
        .catch((error) => {
            console.error("Unable to connect to the database: ", error);
        });

    await sequelize
        .sync({ force: false })
        .then(async() => {

            console.log("Database synchronized");
        })
        .catch((error) => {
            console.error("Error synchronizing database:", error);
        });
}


exports.connectToDB = connectToDB;