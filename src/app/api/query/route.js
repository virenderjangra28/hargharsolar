import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { QueryList } from "@/lib/model/queryList";

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const queryList = new QueryList({
      name: body.name,
      mobile: body.mobile,
      monthlyBill: body.monthlyBill,
      pinCode: String(body.pinCode || ""),
      propertyType: body.propertyType,
      address: body.address,
      landmark: body.landmark || "",
      selectedDate: body.selectedDate,
      selectedTime: body.selectedTime,
    });
    await queryList.save();
    return NextResponse.json({ success: true, message: "Query submitted successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const [queries, total, pending, accepted, rejected] = await Promise.all([
      QueryList.find().sort({ _id: -1 }).lean(),
      QueryList.countDocuments(),
      QueryList.countDocuments({ status: { $in: ["pending", null] } }),
      QueryList.countDocuments({ status: "accepted" }),
      QueryList.countDocuments({ status: "rejected" }),
    ]);

    return NextResponse.json({
      success: true,
      counts: {
        total,
        pending,
        accepted,
        rejected,
      },
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
