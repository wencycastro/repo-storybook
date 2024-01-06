const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Book = sequelize.define('Book', {
        title: { type: DataTypes.STRING, allowNull: true },
        author: { type: DataTypes.STRING, allowNull: true },
        genre: { type: DataTypes.STRING, allowNull: true },
        ratings: { type: DataTypes.INTEGER, allowNull: true },
        content: { type: DataTypes.TEXT, allowNull: true },
    });

    return Book;
};