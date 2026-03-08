
import trainingMenus from "@/components/exercise/TrainingMenu";
import { TrainingCard } from "@/components/exercise/TrainingCard";
import { Flame } from "lucide-react";
export default function ExercisePage() {
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