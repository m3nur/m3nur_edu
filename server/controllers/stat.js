import GoldVault from "../model/GoldVault.js";

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
