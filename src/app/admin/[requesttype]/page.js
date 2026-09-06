"use client";

import { useParams } from "next/navigation";
import QueryTable from "@/components/admin/QueryTable";
import { requestTypeTitle } from "@/components/admin/queryFields";

export default function RequestTypePage() {
  const { requesttype } = useParams();
  const type = Array.isArray(requesttype) ? requesttype[0] : requesttype;

  return (
    <>
      <h1 className="mb-6 text-2xl font-extrabold text-navy sm:text-3xl">
        {requestTypeTitle(type)}
      </h1>
      <QueryTable filterStatus={type} editable={false} />
    </>
  );
}
