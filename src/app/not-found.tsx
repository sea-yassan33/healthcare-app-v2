import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <body>
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-white rounded-2xl shadow-lg border border-[#E8E2D9] p-8 md:p-12">
            <h1 className="text-6xl md:text-8xl font-bold text-[#415C52] mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#415C52] mb-4">
              ページが見つかりません
            </h2>
            <p className="text-gray-600 mb-8 leading-7">
              お探しのページは存在しないか、移動または削除された可能性があります。
              <br />
              もう一度URLをご確認ください。
            </p>
            <Link href="/">
              <Button
                variant="default"
                size="lg"
                className="bg-[#415C52] hover:bg-[#415C52]/90 text-white"
              >
                ホームに戻る
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </body>
  );
}

