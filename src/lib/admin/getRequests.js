import { connectDB } from "@/lib/db";
import { QueryList } from "@/lib/model/queryList";
import { CommercialList } from "@/lib/model/commercial";
import { HousingSocietyList } from "@/lib/model/housing-society";

function modelForSource(source) {
  if (source === "commercial") return CommercialList;
  if (source === "housing-society") return HousingSocietyList;
  return QueryList;
}

function statusFilter(status) {
  if (status === "total" || status === "") return {};
  if (status === "pending") return { status: { $in: ["pending", null] } };
  if (status === "accepted") return { status: "accepted" };
  if (status === "rejected") return { status: "rejected" };
  return { status };
}

export async function getRequests(status, source) {
  await connectDB();
  const data = await modelForSource(source)
    .find(statusFilter(status))
    .sort({ _id: -1 })
    .lean();
  return JSON.parse(JSON.stringify(data));
}
