import GoldVault from "../model/GoldVault";

export const createProduct = async (req, res) => {
  try {
    const { title, description, tags, link } = req.body;
    const savedProduct = await GoldVault.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
