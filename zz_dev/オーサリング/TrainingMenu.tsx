"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Activity,
  ArrowRight,
  Calendar,
  Dumbbell,
  Flame,
  Heart,
  PersonStanding,
  Zap,
} from "lucide-react";

type TrainingItem = {
  id: number;
  frequency: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
  badgeColor: string;
};

const trainingMenus: TrainingItem[] = [
  {
    id: 1,
    frequency: "3日/週",
    icon: <Activity className="w-5 h-5" />,
    title: "全身ex",
    description: "全体的な筋力と持久力を高めます。",
    accentColor: "from-sky-400 to-cyan-300",
    badgeColor: "bg-sky-50 text-sky-600 border-sky-200",
  },
  {
    id: 2,
    frequency: "2日/週",
    icon: <Dumbbell className="w-5 h-5" />,
    title: "上半身ex",
    description: "腕、肩、背中をターゲットにしたメニューです。",
    accentColor: "from-cyan-400 to-teal-300",
    badgeColor: "bg-cyan-50 text-cyan-600 border-cyan-200",
  },
  {
    id: 3,
    frequency: "2日/週",
    icon: <PersonStanding className="w-5 h-5" />,
    title: "下半身ex",
    description: "脚と臀部をターゲットにしたメニューです。",
    accentColor: "from-teal-400 to-emerald-300",
    badgeColor: "bg-teal-50 text-teal-600 border-teal-200",
  },
  {
    id: 4,
    frequency: "2日/週",
    icon: <Zap className="w-5 h-5" />,
    title: "体幹ex",
    description: "体幹トレーニング中心のメニューです。",
    accentColor: "from-sky-500 to-blue-400",
    badgeColor: "bg-sky-50 text-sky-600 border-sky-200",
  },
  {
    id: 5,
    frequency: "2日/週",
    icon: <Heart className="w-5 h-5" />,
    title: "体力向上ex",
    description: "インターバルトレーニング中心のメニューです。",
    accentColor: "from-blue-400 to-indigo-400",
    badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
  },
];

function FrequencyBadge({
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

function TrainingCard({ item }: { item: TrainingItem }) {
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
        <Button
          className={`w-full bg-gradient-to-r ${item.accentColor} hover:opacity-90 text-white font-semibold rounded-xl border-0 shadow-sm transition-all duration-300 group-hover:shadow-md`}
        >
          詳細を見る
          <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Button>
      </CardContent>
    </Card>
  );
}

export default function TrainingMenu() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50/30 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-sky-600 text-xs font-semibold tracking-widest uppercase mb-4 border border-sky-200">
            <Flame className="w-3.5 h-3.5" />
            Workout Programs
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3">
            トレーニング
            <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              メニュー
            </span>
          </h1>
          <p className="text-slate-500 text-base sm:text-lg font-light">
            様々なトレーニングメニューを提供しています。
          </p>
          {/* Decorative line */}
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-sky-400 to-cyan-300" />
            <div className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            <div className="h-px w-6 bg-sky-200" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trainingMenus.map((item) => (
            <TrainingCard key={item.id} item={item} />
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-xs text-slate-400 tracking-wide">
          各メニューの詳細はカードをクリックしてご確認ください
        </p>
      </div>
    </section>
  );
}
