import { PageHeader } from "@/shared/components/ui/PageHeader";

export default function Analyzer() {
  return (
    <div className="space-y-6">
      <PageHeader title="Bundle Analyzer" />
      <iframe
        src="/analyse.html"
        className="w-full h-[78vh] border rounded"
      ></iframe>
    </div>
  );
}
