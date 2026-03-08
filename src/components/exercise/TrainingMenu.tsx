import {Activity,Dumbbell,Heart,PersonStanding,Zap,} from "lucide-react";

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

const trainingMenus: TrainingItem[] = [
  {
    id: 1,
    frequency: "3日/週",
    icon: <Activity className="w-5 h-5" />,
    title: "全身ex",
    description: "全体的な筋力と持久力を高めます。",
    accentColor: "from-sky-400 to-cyan-300",
    badgeColor: "bg-sky-50 text-sky-600 border-sky-200",
    url: "/exercise/menu_1"
  },
  {
    id: 2,
    frequency: "2日/週",
    icon: <Dumbbell className="w-5 h-5" />,
    title: "上半身ex",
    description: "腕、肩、背中をターゲットにしたメニューです。",
    accentColor: "from-cyan-400 to-teal-300",
    badgeColor: "bg-cyan-50 text-cyan-600 border-cyan-200",
    url: "#"
  },
  {
    id: 3,
    frequency: "2日/週",
    icon: <PersonStanding className="w-5 h-5" />,
    title: "下半身ex",
    description: "脚と臀部をターゲットにしたメニューです。",
    accentColor: "from-teal-400 to-emerald-300",
    badgeColor: "bg-teal-50 text-teal-600 border-teal-200",
    url: "#"
  },
  {
    id: 4,
    frequency: "2日/週",
    icon: <Zap className="w-5 h-5" />,
    title: "体幹ex",
    description: "体幹トレーニング中心のメニューです。",
    accentColor: "from-sky-500 to-blue-400",
    badgeColor: "bg-sky-50 text-sky-600 border-sky-200",
    url: "#"
  },
  {
    id: 5,
    frequency: "2日/週",
    icon: <Heart className="w-5 h-5" />,
    title: "体力向上ex",
    description: "インターバルトレーニング中心のメニューです。",
    accentColor: "from-blue-400 to-indigo-400",
    badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
    url: "#"
  },
];

export default trainingMenus