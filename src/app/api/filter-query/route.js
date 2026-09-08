import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { QueryList } from "@/lib/model/queryList";



export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { status } = body;
    const filter =
      status === "total" || status === ""
        ? {}
        : {
            status:
              status === "pending"
                ? { $in: ["pending", null] }
                : status === "accepted"
                  ? "accepted"
                  : "rejected",
          };
    const data = await QueryList.find(filter).sort({ _id: -1 }).lean();
    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
