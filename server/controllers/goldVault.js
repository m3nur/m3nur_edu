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
    res.status(500).json({ error: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await GoldVault.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted from GoldVault!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await GoldVault.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const visitProduct = async (req, res) => {
  try {
    const visitProduct = await GoldVault.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(visitProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const likeProduct = async (req, res) => {
  try {
    const likeProduct = await GoldVault.findByIdAndUpdate(
      req.body.productID,
      {
        $push: { likes: req.body.userID },
      },
      {
        new: true,
      }
    );
    res.status(200).json(likeProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const unLikeProduct = async (req, res) => {
  try {
    const likeProduct = await GoldVault.findByIdAndUpdate(
      req.body.productID,
      {
        $pull: { likes: req.body.userID },
      },
      {
        new: true,
      }
    );
    res.status(200).json(likeProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
