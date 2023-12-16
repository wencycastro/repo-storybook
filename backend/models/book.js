const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Book = sequelize.define('Book', {
        title: { type: DataTypes.STRING, allowNull: false },
        author: { type: DataTypes.STRING, allowNull: false },
        genre: { type: DataTypes.STRING, allowNull: false },
        ratings: { type: DataTypes.INTEGER, allowNull: false },
        coverImage: { type: DataTypes.STRING, allowNull: true },
    });

    return Book;
};