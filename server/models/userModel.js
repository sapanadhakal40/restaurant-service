// models/userModel.js
import pool from '../config/db.js';


// Add a new user
export const addUser = async (id,name, email, password) => {
   
  try {
    const result = await pool.query(
      `INSERT INTO users (id,name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email`,
      [name, email, password]
    );
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

// Find a user by email
export const findUserByEmail = async (email) => {
  try {
    const result = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

// Find a user by ID
export const findUserById = async (id) => {
  try {
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};
