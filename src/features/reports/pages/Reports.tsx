import {
  useCallback,
  useDeferredValue,
  useState,
  type ChangeEvent,
} from "react";
import { PageHeader } from "@/shared/components/ui/PageHeader";

import useDebounce from "@/shared/hooks/useDebounce";

import { ReportsToolbar } from "../components/ReportsToolbar";
import { ReportsTable } from "../components/ReportsTable";

export default function ReportsPage() {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const query = useDebounce(search, 300);
  const deferredSearch = useDeferredValue(query);

  const onToggle = useCallback(() => {
    setSortAsc((prev) => !prev);
  }, []);

  const onSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(() => e.target.value);
  }, []);

  return (
    <div className="space-y-6">
      <PageHeader title="Reports" />

      <ReportsToolbar
        search={search}
        onSearchChange={onSearch}
        sortAsc={sortAsc}
        onToggleSort={onToggle}
      />

      <ReportsTable search={deferredSearch} sortAsc={sortAsc} />
    </div>
  );
}
