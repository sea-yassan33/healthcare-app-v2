import Link from "next/link";
import trainingMenuDetail from "@/components/exercise/menuId/TrainingMenuDetail";
import TrainingDetail from "@/components/exercise/menuId/TrainingDetail";
// propsの定義
type Props = { params: Promise<{ menu_id: string }> };
export default async function ExerciseDetailPage({ params }: Props) {
  const { menu_id } = await params;
  const id_str: string = menu_id.replace('menu_', '')
  const menu_detail = trainingMenuDetail.find((menu) => menu.id === Number(id_str))
  if (!menu_detail) {
    return (
      <section className="w-full bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              MENU
            </h2>
            <p className="text-lg text-gray-600">
              メニューが見つかりません。
            </p>
            <Link href="#" className="flex-1 items-center justify-center inline-block px-4 my-2 rounded-full border border-[#2176AE] text-[#2176AE] font-semibold py-3 text-base hover:bg-[#e6f1fa] transition">
              メニュー一覧
            </Link>
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className="w-full bg-white py-4">
      {/* Header */}
      <div className="p-6 md:p-8 border-b-4 border-[#4d4f52] relative">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-sky-600 tracking-tight">
              {menu_detail.menu_title}メニュー
            </h1>
            {/* menu description */}
            <h2 className="mt-4 inline-flex items-center bg-[#4d4f52] text-white px-4 py-2 rounded-md">
              <span className="text-sm">{menu_detail.menu_description}</span>
            </h2>
          </div>

        </div>
      </div>
      <TrainingDetail menu_detail={menu_detail} />
      <div className="p-6 md:p-8 border-t-4 border-[#4d4f52] relative">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <Link href="/exercise/" className="inline-block px-4 my-2 rounded-full border border-[#2176AE] text-[#2176AE] font-semibold py-3 text-base hover:bg-[#e6f1fa] transition">
            Menu一覧へ戻る
          </Link>
        </div>
      </div>
    </section>
  )
}