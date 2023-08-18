const Category = require("../model/category.model");

const categoriesHandle = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (err) {
    res.status(404).json({ message: "Cant Find Category" });
  }
};

module.exports = categoriesHandle;
