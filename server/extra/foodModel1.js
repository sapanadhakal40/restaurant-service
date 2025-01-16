import pool from '../config/db.js';  // PostgreSQL pool

// Add a food item
export const addFoodItem = async (food) => {
  const { name, description, price, image, category } = food;

  const query = `
    INSERT INTO food_items (name, description, price, image, category)
    VALUES ($1, $2, $3, $4, $5) RETURNING *;
  `;
  const values = [name, description, price, image, category];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];  // Return the inserted food item
  } catch (error) {
    console.error('Error inserting food item:', error);
    throw error;
  }
};

// Get all food items
export const getAllFoodItems = async () => {
  const query = 'SELECT * FROM food_items';  // Query to fetch all food items

  try {
    const result = await pool.query(query);
    return result.rows;  // Return all food items
  } catch (error) {
    console.error('Error fetching food items:', error);
    throw error;
  }
};

// Remove a food item by ID
export const removeFoodItemById = async (id) => {
  const query = 'DELETE FROM food_items WHERE id = $1 RETURNING *';  // Query to delete food item by ID

  try {
    const result = await pool.query(query, [id]);
    return result.rows[0];  // Return the deleted food item
  } catch (error) {
    console.error('Error removing food item:', error);
    throw error;
  }
};
