// // controllers/foodController.js
// import pool from '../config/db.js';

// const listFood = async (req, res) => {
//   try {
//     // Query to fetch all food items from the database
//     const result = await pool.query('SELECT * FROM food_items'); // Replace 'food_items' with your actual table name
    
//     // Return the list of food items
//     res.json({ success: true, data: result.rows });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Error retrieving food items' });
//   }
// };

// export { listFood };









import fs from 'fs';
import { addFoodItem, getAllFoodItems, removeFoodItemById } from '../models/foodModel.js';

// Add a food item
export const addFood = async (req, res) => {
  try {
    const food = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.file.filename,
      category: req.body.category,
    };

    const newFood = await addFoodItem(food);
    res.json({ success: true, message: 'Food item added successfully', data: newFood });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to add food item' });
  }
};

// List all food items
export const listFood = async (req, res) => {
  try {
    const foods = await getAllFoodItems();
    res.json({ success: true, data: foods });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching food items' });
  }
};

// Remove a food item
export const removeFood = async (req, res) => {
  try {
    const food = await removeFoodItemById(req.body.id);
    if (food) {
      // Remove the image file from the uploads folder
      fs.unlink(`uploads/${food.image}`, () => {});
      res.json({ success: true, message: 'Food item removed successfully' });
    } else {
      res.status(404).json({ success: false, message: 'Food item not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error removing food item' });
  }
};
