//===========
// Imports
//===========
import { model, Schema } from "mongoose";
import { toLocalDate, toUTCDate } from "#lib/validations";
import { DEFAULT_USER } from "#src/config";

//==========================
// Schema Role
//==========================
const userSchema = new Schema(
  {
    avatar: { type: String, default: DEFAULT_USER },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "The email format is not valid"],
    },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    createdAt: {
      type: Date,
      default: () => new Date(),
      set: toUTCDate,
      get: toLocalDate,
    },
    updatedAt: {
      type: Date,
      default: () => new Date(),
      set: toUTCDate,
      get: toLocalDate,
    },
  },
  { timestamps: true }
);

userSchema.set("toJSON", {
  getters: true,
});

userSchema.set("toObject", {
  getters: true,
});

export const UserModel = model("User", userSchema);
