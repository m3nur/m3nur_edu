import mongoose from "mongoose";

const GoldVaultSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
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
      default: 1,
    },
    recommended: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const GoldVault = mongoose.model("GoldVault", GoldVaultSchema);

export default GoldVault;
