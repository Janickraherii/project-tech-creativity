// userController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Function to create a new user
const createUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    // Create a new user in the database
    const newUser = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password,
      },
    });

    res.json(newUser); // Send the details of the newly created user in the response
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
};

// Export the createUser function
module.exports = {
  createUser,
};
