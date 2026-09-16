import mongoose from "mongoose";

const CommercialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    companyName: {
        type: String,
        required: true,
      },
      pinCode: {
        type: String,
        required: true,
      },
      city: {
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
    status : {
        type: String,
        default: "pending",
    },
  },
  { collection: "commercials" },
);

if (mongoose.models.CommercialList) {
  delete mongoose.models.CommercialList;
}

export const CommercialList = mongoose.model("CommercialList", CommercialSchema);
