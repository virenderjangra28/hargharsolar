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
    email: {
      type: String,
      default: "",
    },
    sanctionLoad: {
      type: String,
      default: "",
    },
    nationalPortalNo: {
      type: String,
      default: "",
    },
    geoTaggingPhoto: {
      type: String,
      default: "",
    },
    electricityBill: {
      type: String,
      default: "",
    },
    bankDocument: {
      type: String,
      default: "",
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
    employeeCode: {
        type: String,
        default: "",
    },
    referBy: {
        type: String,
        default: "",
    },
    status : {
        type: String,
        default: "",
    },
  },
  { collection: "queryLists" },
);

if (mongoose.models.QueryList) {
  delete mongoose.models.QueryList;
}

export const QueryList = mongoose.model("QueryList", QueryListSchema);
