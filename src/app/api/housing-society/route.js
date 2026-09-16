import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { HousingSocietyList } from "@/lib/model/housing-society";

export async function GET() {
  try {
    await connectDB();
    const [total, pending, accepted, rejected] = await Promise.all([
      HousingSocietyList.countDocuments(),
      HousingSocietyList.countDocuments({ status: { $in: ["pending", null] } }),
      HousingSocietyList.countDocuments({ status: "accepted" }),
      HousingSocietyList.countDocuments({ status: "rejected" }),
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
    const housingSocietyList = new HousingSocietyList({
      name: body.name,
      societyName: body.societyName,
      mobile: body.mobile,
      pinCode: String(body.pincode || ""),
      monthlyBill: body.bill,
      designation: body.designation,
      approvalBy: body.approvalBy,
      status : "pending",
    });
    await housingSocietyList.save();
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
    const updated = await HousingSocietyList.findByIdAndUpdate(id, { status }, { new: true });
    if (!updated) {
      return NextResponse.json({ success: false, error: "Query not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
