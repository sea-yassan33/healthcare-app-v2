import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FrequencyBadge from "@/components/parts/FrequencyBadge";
import Link from "next/link";


type TrainingItem = {
  id: number;
  frequency: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
  badgeColor: string;
  url: string;
};

export function TrainingCard({ item }: { item: TrainingItem }) {
  return (
    <Card className="group relative overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 rounded-2xl">
      {/* Top accent bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accentColor} opacity-80`}
      />
      <CardContent className="p-6 pt-7 flex flex-col gap-4 h-full">
        {/* Badge */}
        <div>
          <FrequencyBadge
            frequency={item.frequency}
            colorClass={item.badgeColor}
          />
        </div>
        {/* Title row */}
        <div className="flex items-center gap-2.5">
          <div
            className={`flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br ${item.accentColor} text-white shadow-sm`}
          >
            {item.icon}
          </div>
          <h3 className="text-xl font-bold text-slate-800 tracking-tight">
            {item.title}
          </h3>
        </div>
        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed flex-1">
          {item.description}
        </p>
        {/* Button */}
        <Link href={item.url}>
          <Button
            className={`w-full bg-gradient-to-r ${item.accentColor} hover:opacity-90 text-white font-semibold rounded-xl border-0 shadow-sm transition-all duration-300 group-hover:shadow-md`}
          >
            詳細を見る
            <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}