import mongoose from "mongoose";

const GoldVaultSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    likes: {
      type: Array,
      default: [],
    },
    visit: {
      type: Number,
    },
  },
  { timestamps: true }
);

const GoldVault = mongoose.model("GoldVault", GoldVaultSchema);

export default GoldVault;