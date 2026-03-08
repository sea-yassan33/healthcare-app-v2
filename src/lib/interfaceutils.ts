export interface HealthcareInfoRow {
  id: number;
  title: string;
  media: string;
  url: string;
  date: string;
  created_at: string;
  updated_at: string;
};

// 汎用的なDocumentインターフェース
export interface HCIDocument {
  id: number;
  category: string;
  title: string;
  description: string;
  content: string;
  updatedAt: string;
}
// ドキュメントリスト用のPropsインターフェース
export interface HCIDocumentListProps {
  documents: Document[]; // ドキュメントの配列
  num: number;           // 表示する数などの指定
  id_flag?: boolean;     // 任意のIDフラグ
}

// マシントレーニングの型定義
export interface MachineTraining {
  exercise: string;
  target: string;
  reps: string;
  sets: string;
  youtubeID: string;
}

// 有酸素運動の型定義
export interface AerobicExercise {
  exercise: string;
  time: string;
  pace: string;
  sets: string;
  youtubeID: string;
}

// トレーニングメニュー詳細の型定義
export interface TrainingMenuDetail {
  id: number;
  menu_title: string;
  menu_description: string;
  warming_up: string[];
  machine_training: MachineTraining[];
  aerobic_exercise: AerobicExercise[];
  cool_down: string[];
}

// 配列全体の型定義
export type TrainingMenuDetailArray = TrainingMenuDetail[];

// モーダル用
export interface ExerciseModal{
  exercise: string;
  youtubeID: string;
}