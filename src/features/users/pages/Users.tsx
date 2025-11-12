import { PageHeader } from "@/shared/components/ui/PageHeader";

import { UsersTable } from "../components/UsersTable";

export default function Users() {
  return (
    <div className="space-y-6">
      <PageHeader title="Users" />

      <UsersTable />
    </div>
  );
}
