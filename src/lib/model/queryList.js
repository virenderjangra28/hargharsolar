import mongoose from "mongoose";

const QueryListSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    monthlyBill: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
    propertyType: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    landmark: {
      type: String,
      default: "",
    },
    selectedDate: {
      type: String,
      required: true,
    },
    selectedTime: {
      type: String,
      required: true,
    },
    status : {
        type: String,
        default: "pending",
    },
  },
  { collection: "queryLists" },
);

if (mongoose.models.QueryList) {
  delete mongoose.models.QueryList;
}

export const QueryList = mongoose.model("QueryList", QueryListSchema);
