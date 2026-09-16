import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { QueryList } from "@/lib/model/queryList";



export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { mobile } = body;
    const data = await QueryList.findOne({mobile: mobile});
    if(data){
        return NextResponse.json({message: "Mobile number already exists", success: false}, { status: 400 });
    }
    return NextResponse.json({message: "Mobile number not found", success: true}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
    
    
}
