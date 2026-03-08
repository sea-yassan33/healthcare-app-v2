import { Calendar } from "lucide-react";
export default function FrequencyBadge({
  frequency,
  colorClass,
}: {
  frequency: string;
  colorClass: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold tracking-wide ${colorClass}`}
    >
      <Calendar className="w-3 h-3" />
      {frequency}
    </div>
  );
}