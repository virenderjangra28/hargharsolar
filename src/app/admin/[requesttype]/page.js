import QueryTable from "@/components/admin/QueryTable";
import { requestTypeTitle, sourceLabel, normalizeSource } from "@/components/admin/queryFields";
import { getRequests } from "@/lib/admin/getRequests";

export const dynamic = "force-dynamic";

export default async function RequestTypePage({ params, searchParams }) {
  const { requesttype } = await params;
  const query = await searchParams;
  const source = normalizeSource(query.source);
  const type = Array.isArray(requesttype) ? requesttype[0] : requesttype;
  const requests = await getRequests(type, source);

  return (
    <>
      <h1 className="mb-6 text-2xl font-extrabold text-navy sm:text-3xl">
        {requestTypeTitle(type)} · {sourceLabel(source)}
      </h1>
      <QueryTable
        filterStatus={type}
        source={source}
        editable={false}
        initialRequests={requests}
      />
    </>
  );
}
