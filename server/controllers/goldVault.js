import GoldVault from "../model/GoldVault.js";

export const createProduct = async (req, res) => {
  const newProduct = new GoldVault(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const products = await GoldVault.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};
