import Link from "next/link";
import { HealthcareInfoRow } from "@/lib/interfaceutils";
import healthinfo from "@/public/data/healthinfo.json";
// トピックデータ
const NEWS_TOPICS: HealthcareInfoRow[] = healthinfo.slice(0, 5);
// 下部ボタン
const under_button = [
  {
    name: "トピック/データ一覧",
    href: "/health_hub/health_info",
  },
  {
    name: "AIに健康に関する情報を聞く",
    href: "/health_hub/#",
  },
]
export default function HomeNewsTopic() {
  return (
    <section className="relative py-6 px-4 bg-gradient-to-b to-white from-blue-50" id="news_topic">
      <div className="relative max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-lg px-8 py-10">
        {/* タイトル行 */}
        <div className="flex flex-col md:flex-row md:items-end gap-3 mb-8">
          <h2 className="text-4xl font-bold text-[#2176AE] leading-snug mr-4">
            NEWS
            <span className="text-black text-2xl align-middle ml-3 font-medium">Topics</span>
            <span className="text-black text-sm align-middle ml-3 font-medium"> ※外部サイトへ遷移※</span>
          </h2>
        </div>
        {/* ニュースリスト */}
        <ul>
          {NEWS_TOPICS.map((item, i) => (
            <li key={item.title + i} className="flex flex-col md:flex-row md:items-center border-b border-[#E5E5E5] py-5 gap-2 md:gap-0">
              {/* 日付 */}
              <div className="flex flex-row md:flex-col items-start md:items-start w-32 shrink-0 md:text-right mb-1">
                <span className="block text-[#2176AE] font-semibold md:text-base text-sm">
                  {item.date.slice(0, 4)}
                </span>
                <span className="block text-black font-bold md:text-lg text-base ml-2 md:ml-0">
                  {item.date.slice(5, 10).replace("-", "／")}
                </span>
              </div>
              {/* タイトル */}
              <Link
                href={item.url} target="_blank" rel="noopener noreferrer" className="flex-1 text-base md:text-lg text-black font-medium hover:underline">
                {item.title}
              </Link>
              {/* アイコン（→） */}
              <Link href={item.url} target="_blank" rel="noopener noreferrer" className="ml-3 text-[#2176AE] font-bold text-2xl hover:text-red-300">
                &rarr;
              </Link>
            </li>
          ))}
        </ul>
        {/* 下部ボタン */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          {under_button.map((item, i) => (
            <Link key={item.name + i} href={item.href} className="flex-1 flex items-center justify-center rounded-full border border-[#2176AE] text-[#2176AE] font-semibold py-3 text-base hover:bg-[#e6f1fa] transition">
              {item.name}&nbsp;<span className="ml-1 text-lg">&rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}