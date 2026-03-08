import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from '@/components/ui/table';
import { TrainingMenuDetail } from '@/lib/interfaceutils';

export default function TrainingDetail({ menu_detail }: { menu_detail: TrainingMenuDetail }) {
  return (
    <div className="p-6 md:p-8 space-y-10">
      {/* Section 1: Warming Up */}
      <section data-purpose="warming-up">
        <div className="flex items-center mb-4">
          <div className="bg-[#4d4f52] text-white font-bold px-4 py-2 section-header-arrow min-w-[180px]">
            1. ウォーミングアップ
          </div>
        </div>
        <div className="pl-4 border-l-4 border-[#4d4f52] py-2">
          {menu_detail.warming_up.map((warming_up, index) => (
            <div key={index}>
              <p className="text-lg font-medium text-gray-700">
                <span className="text-gray-700 font-bold">{warming_up}</span>
              </p>
              {index !== menu_detail.warming_up.length - 1 && (
                <span className="mx-2 text-gray-400">▼</span>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Section 2: Machine Training */}
      <section data-purpose="machine-training">
        <div className="flex items-center mb-4">
          <div className="bg-[#4d4f52] text-white font-bold px-4 py-2 section-header-arrow min-w-[180px]">
            2. マシントレーニング
          </div>
        </div>
        {/* Training Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-300">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100 text-gray-700 hover:bg-gray-100">
                <TableHead className="p-3 border-b border-gray-300 font-bold text-center">
                  種目名 (Exercise)
                </TableHead>
                <TableHead className="p-3 border-b border-gray-300 font-bold text-center">
                  使用部位 (Target Area)
                </TableHead>
                <TableHead className="p-3 border-b border-gray-300 font-bold text-center">
                  回数 (Reps)
                </TableHead>
                <TableHead className="p-3 border-b border-gray-300 font-bold text-center">
                  セット数 (Sets)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {menu_detail.machine_training.map((machine_training, index) => (
                <TableRow key={index} className="hover:bg-[#F9FAF5] transition-colors">
                  <TableCell className="p-4 border-b border-gray-200 font-bold">{machine_training.exercise}</TableCell>
                  <TableCell className="p-4 border-b border-gray-200 text-center">{machine_training.target}</TableCell>
                  <TableCell className="p-4 border-b border-gray-200 text-center text-sky-600 font-bold text-xl">{machine_training.reps} <span className="text-sm font-normal text-gray-600">回</span></TableCell>
                  <TableCell className="p-4 border-b border-gray-200 text-center text-sky-600 font-bold">{machine_training.sets} <span className="text-sm font-normal text-gray-600">セット</span></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
      {/* Section 3: Cardio*/}
      <section data-purpose="machine-training">
        <div className="flex items-center mb-4">
          <div className="bg-[#4d4f52] text-white font-bold px-4 py-2 section-header-arrow min-w-[180px]">
            3. 有酸素運動
          </div>
        </div>
        {/* Training Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-300">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100 text-gray-700 hover:bg-gray-100">
                <TableHead className="p-3 border-b border-gray-300 font-bold text-center">
                  種目名 (Exercise)
                </TableHead>
                <TableHead className="p-3 border-b border-gray-300 font-bold text-center">
                  時間 (Time)
                </TableHead>
                <TableHead className="p-3 border-b border-gray-300 font-bold text-center">
                  ペース (Pace)
                </TableHead>
                <TableHead className="p-3 border-b border-gray-300 font-bold text-center">
                  セット数 (Sets)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {menu_detail.aerobic_exercise.map((aerobic_exercise, index) => (
                <TableRow key={index} className="hover:bg-[#F9FAF5] transition-colors">
                  <TableCell className="p-4 border-b border-gray-200 font-bold">{aerobic_exercise.exercise}</TableCell>
                  <TableCell className="p-4 border-b border-gray-200 text-center">{aerobic_exercise.time}</TableCell>
                  <TableCell className="p-4 border-b border-gray-200 text-center text-sky-600 font-bold text-xl">{aerobic_exercise.pace}</TableCell>
                  <TableCell className="p-4 border-b border-gray-200 text-center text-sky-600 font-bold">{aerobic_exercise.sets}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
      {/* Section 4: Cool Down */}
      <section data-purpose="cool-down">
        <div className="flex items-center mb-4">
          <div className="bg-[#4d4f52] text-white font-bold px-4 py-2 section-header-arrow min-w-[180px]">
            4. クールダウン
          </div>
        </div>
        <div className="pl-4 border-l-4 border-[#4d4f52] py-2">
          {menu_detail.cool_down.map((cool_down, index) => (
            <div key={index}>
              <p className="text-lg font-medium text-gray-700">
                <span className="text-gray-700 font-bold">{cool_down}</span>
              </p>
              {index !== menu_detail.cool_down.length - 1 && (
                <span className="mx-2 text-gray-400">▼</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}