const Sequelize = require("sequelize");
const sequelize = new Sequelize("storybook", "root", "1234", {
    host: "localhost",
    dialect: "mysql",
});

const User = require('../models/user')(sequelize);
const Book = require('../models/book')(sequelize);

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
};
exports.addBook = async (req, res) => {
    const { title, author, genre, ratings, content} = req.body;
  
    try {
      const newBook = await Book.create({
        title,
        author,
        genre,
        ratings,
        content,
      });
  
      // If needed, you can return the newly created book or its ID
      return res.status(201).json(newBook); // Sending a JSON response with the newly created book
    } catch (error) {
      // Handle errors, e.g., log them or send an error response
      console.error('Error adding book:', error.message);
      return res.status(500).json({ error: 'Unable to add book' }); // Adjust the status code and message as needed
    }
  };

  exports.getAllBooks = async (req, res) => {
    try {
      // Fetch all books from the database
      const allBooks = await Book.findAll();
  
      // Send the list of books as a JSON response
      return res.status(200).json(allBooks);
    } catch (error) {
      // Handle errors, e.g., log them or send an error response
      console.error('Error getting all books:', error.message);
      return res.status(500).json({ error: 'Unable to get books' }); // Adjust the status code and message as needed
    }
  };

  exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        res.status(200).json({
            users,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getTotalCounts = async (req, res) => {
    try {
        const totalUsers = await User.count();
        const totalBooks = await Book.count();

        res.status(200).json({
            totalUsers,
            totalBooks,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.removeUser = async (req, res) => {
    const userId = req.params.id; 

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        await user.destroy();

        res.status(200).json({
            message: 'User removed successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.removeBook = async (req, res) => {
    const bookId = req.params.id;

    try {
        // Find the book by ID and remove it
        const removedBook = await Book.findByPk(bookId);

        if (!removedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }

        // Remove the book
        await removedBook.destroy();

        // If needed, you can return the removed book or a success message
        return res.status(200).json({ message: 'Book successfully removed' });
    } catch (error) {
        // Handle errors, e.g., log them or send an error response
        console.error('Error removing book:', error.message);
        return res.status(500).json({ error: 'Unable to remove book' });
    }
};