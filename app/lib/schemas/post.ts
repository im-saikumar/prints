// post.schema.ts

import { Schema, model } from 'mongoose';

// Define the Post schema
const postSchema = new Schema<Post>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: false, default: null },
  tags: { type: [String], required: false },
  comments: { type: [{ type: Schema.Types.ObjectId, ref: 'Comment' }], required: false }, // Reference comment schema
  likes: { type: Number, required: false, default: 0 },
});

// Define the Post interface (optional)
export interface Post {
  _id?: string; // Optional to avoid conflicts with generated _id
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt?: Date;
  tags?: string[];
  comments?: Comment[]; // Use Comment interface if defined
  likes?: number;
}

// Export the Post model
export default model<Post>('Post', postSchema);
