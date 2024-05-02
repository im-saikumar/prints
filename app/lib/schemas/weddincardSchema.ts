import mongoose, { Schema, model, Document } from "mongoose";

// Define the WeddingCard schema
type User = string;
const weddingCardSchema = new Schema<WeddingCardType>({
  title: { type: String, required: true }, // Title of the wedding card
  description: { type: String, required: true }, // Description of the card
  imageUrl: { type: [String], required: true }, // URL of the card image
  thumbnailUrl: { type: String, required: false }, // Optional URL of a thumbnail image
  category: { type: String, required: true }, // Category of the card (e.g., Hindu, Muslim, Christian)
  subCategory: { type: String, required: false }, // Optional sub-category (e.g., Traditional, Modern)
  content: { type: String, required: false }, // Optional additional content (e.g., wedding details)
  createdBy: { type: Schema.Types.ObjectId, ref: "User" }, // Reference to the user who created the card (optional)
  createdAt: { type: Date, required: true, default: Date.now }, // Timestamp of card creation
  updatedAt: { type: Date, required: false, default: Date.now }, // Timestamp of card update
  price: { type: Number, required: true }, // Price of the card
  isPublished: { type: Boolean, required: true, default: true }, // Flag indicating if the card is published
});

// Define the WeddingCard interface (optional)
export interface WeddingCardType extends Document {
  _id?: string; // Optional to avoid conflicts with generated _id
  title: string;
  description: string;
  imageUrl: string[];
  thumbnailUrl?: string;
  category: string;
  subCategory?: string;
  content?: string;
  createdBy?: User; // Use User interface if defined
  createdAt: Date;
  updatedAt?: Date;
  price: number;
  isPublished: boolean;
}

// Export the WeddingCard model
export default mongoose.models.WeddingCard ||
  model<WeddingCardType>("WeddingCard", weddingCardSchema);
