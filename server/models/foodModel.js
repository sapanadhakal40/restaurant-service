import pool from '../config/db.js';

// Add a new food item
export const addFoodItem = async (food) => {
    const { name, description, price, image, category } = food;
  
    try {
      const result = await pool.query(
        `INSERT INTO food_items (name, description, price, image, category) 
         VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [name, description, price, image, category]
      );
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  };
  
  // Get all food items
  export const getAllFoodItems = async () => {
    try {
      const result = await pool.query(`SELECT * FROM food_items ORDER BY created_at DESC`);
      return result.rows;
    } catch (error) {
      throw error;
    }
  };
  
  // Remove a food item by ID
  export const removeFoodItemById = async (id) => {
    try {
      const result = await pool.query(
        `DELETE FROM food_items WHERE id = $1 RETURNING image`,
        [id]
      );
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  };