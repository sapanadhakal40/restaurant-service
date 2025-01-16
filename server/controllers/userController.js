import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import { addUser, findUserByEmail } from '../models/userModel.js';
import { v4 as uuidv4 } from 'uuid';

// Create JWT token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' });
};

// Register a new user
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user exists
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email' });
    }

   
    if (password.length < 6) {
      return res.status(400).json({ success: false, message: 'Password must be at least 6 characters' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

     // Generate UUID for the new user
     const userId = uuidv4();
    
    const newUser = await addUser(userId, name, email, hashedPassword);

    // Generate token
    const token = createToken(newUser.id);

    res.status(201).json({ success: true, token, user: { id: newUser.id, name: newUser.name, email: newUser.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error registering user' });
  }
};

// Login a user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ success: false, message: 'Incorrect password' });
    }

    // Generate token
    const token = createToken(user.id);

    res.json({ success: true, token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error logging in' });
  }
};
