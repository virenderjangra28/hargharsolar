import mongoose from "mongoose";

const HousingSocietySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    societyName: {
        type: String,
        required: true,
      },
    mobile: {
        type: String,
        required: true,
      },
    pinCode: {
        type: String,
        required: true,
      },
    monthlyBill: {
      type: String,
      required: true,
    },
    approvalBy: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    status : {
        type: String,
        default: "pending",
    },
  },
  { collection: "housing-societies" },
);

if (mongoose.models.HousingSocietyList) {
  delete mongoose.models.HousingSocietyList;
}

export const HousingSocietyList = mongoose.model("HousingSocietyList", HousingSocietySchema);
