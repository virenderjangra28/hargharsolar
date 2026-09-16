import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { CommercialList } from "@/lib/model/commercial";

export async function GET() {
  try {
    await connectDB();
    const [total, pending, accepted, rejected] = await Promise.all([
      CommercialList.countDocuments(),
      CommercialList.countDocuments({ status: { $in: ["pending", null] } }),
      CommercialList.countDocuments({ status: "accepted" }),
      CommercialList.countDocuments({ status: "rejected" }),
    ]);

    return NextResponse.json({
      success: true,
      counts: { total, pending, accepted, rejected },
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const commercialList = new CommercialList({
      name: body.name,
      companyName: body.companyName,
      pinCode: String(body.pincode || ""),
      city: body.city,
      mobile: body.mobile,
      monthlyBill: body.monthlyBill,
      status : "pending",
    });
    await commercialList.save();
    return NextResponse.json({ success: true, message: "Query submitted successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PATCH(request) {
  try {
    await connectDB();
    const { id, status } = await request.json();
    if (!id || !["pending", "accepted", "rejected"].includes(status)) {
      return NextResponse.json({ success: false, error: "Invalid id or status" }, { status: 400 });
    }
    const updated = await CommercialList.findByIdAndUpdate(id, { status }, { new: true });
    if (!updated) {
      return NextResponse.json({ success: false, error: "Query not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
