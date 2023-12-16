const Sequelize = require("sequelize");
const sequelize = new Sequelize("storybook", "root", "1234", {
    host: "localhost",
    dialect: "mysql",
});

const User = require('../models/user')(sequelize);
const Book = require('../models/book')(sequelize);
const Admin = require('../models/admin')(sequelize);

exports.register = async(req, res) => {
    try {
        const registeredUser = await User.create({...req.body});
        const payload = {
            userId: registeredUser.id,
        };

        res.status(201).json({
            message: "User registered successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.login = async (req, res) => {
    try {
        const { userName, password } = req.body;

        // Find the user based on the userName
        const user = await User.findOne({ where: { userName } });

        // Check if the user exists
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        // Check if the provided password matches the stored password (not recommended in production)
        if (password === user.password) {
            const payload = {
                userId: user.id,
            };

            res.status(200).json({
                message: 'Login successful',
                userId: user.id,
            });
        } else {
            // Incorrect password
            res.status(401).json({ error: 'Invalid password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

    exports.createBook = async (req, res) => {
    try {
        const createdBook = await Book.create({ /* book data from req.body */ });

        res.status(201).json({
            message: 'Book created successfully',
            bookId: createdBook.id,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.addBook = async(req, res) => {
    try {

        const user = await User.findByPk( {
            attributes: ['firstName', 'lastName', 'image'],
        });

        const newJob = await Book.create({
            ...req.body,

            coverImage: book.image,
            title: book.title,
            authorName: user.authorName,
        });

        res.status(201).json({ book: newBook });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
};