import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    role : {
      type: String,
      required: true,
    }
  },
  { collection: "users" },
);

function isBcryptHash(value) {
  return typeof value === "string" && /^\$2[aby]\$/.test(value);
}

export async function comparePassword(plain, stored) {
  if (!plain || !stored) return false;
  if (isBcryptHash(stored)) {
    return bcrypt.compare(plain, stored);
  }
  return plain === stored;
}

UserSchema.statics.comparePassword = comparePassword;
UserSchema.methods.comparePassword = function comparePasswordMethod(plain) {
  return comparePassword(plain, this.password);
};

if (mongoose.models.User && typeof mongoose.models.User.comparePassword !== "function") {
  delete mongoose.models.User;
}

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
