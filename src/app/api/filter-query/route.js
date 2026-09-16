import { NextResponse } from "next/server";
import { getRequests } from "@/lib/admin/getRequests";

export async function POST(request) {
  try {
    const body = await request.json();
    const data = await getRequests(body.status, body.source);
    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
