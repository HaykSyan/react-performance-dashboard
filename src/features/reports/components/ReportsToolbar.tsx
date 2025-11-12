import { memo, type ChangeEvent } from "react";
import { Button } from "@/shared/components/ui/Button";
import { Input } from "@/shared/components/ui/Input";

type Props = {
  search: string;
  onSearchChange(value: ChangeEvent<HTMLInputElement>): void;
  sortAsc: boolean;
  onToggleSort(): void;
};

export const ReportsToolbar = memo(function ReportsToolbar({
  search,
  onSearchChange,
  sortAsc,
  onToggleSort,
}: Props) {
  return (
    <div className="flex items-center justify-between">
      <Input
        type="text"
        value={search}
        onChange={onSearchChange}
        placeholder="Search reports..."
        className="px-3 py-2 border rounded w-64"
      />

      <Button
        onClick={onToggleSort}
        className="px-3 py-2 rounded border bg-gray-200 hover:bg-gray-300"
      >
        Sort: {sortAsc ? "A → Z" : "Z → A"}
      </Button>
    </div>
  );
});
