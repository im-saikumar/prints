// post.schema.ts

import mongoose, { Schema, model } from "mongoose";

// Define the Post schema
const heroSchema = new Schema<HeroImage>({
  title: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now }, // Timestamp of card creation
  updatedAt: { type: Date, required: false, default: Date.now },
});

// Define the Post interface (optional)
export interface HeroImage {
  _id?: string; // Optional to avoid conflicts with generated _id
  title: string;
  image: string;
  createdAt: Date;
  updatedAt?: Date;
}

// Export the Post model
export default mongoose.models.hero_image ||
  model<HeroImage>("hero_image", heroSchema);
