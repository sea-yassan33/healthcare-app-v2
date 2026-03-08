// headerリンク
interface MenuItem {
  label: string;
  href?: string;
  submenu?: { label: string; href: string }[];
}
export const menuItems: MenuItem[] = [
  {
    label: "健康情報",
    href: "#"
  },
  {
    label: "トレーニング情報",
    href: "#"
  },
  {
    label: "AI支援ツール",
    href: "#"
  },
];

// footerリンク
export const footerLinks = {
  company: {
    title: "ミッション情報",
    links: [
      { label: "概要", href: "#" },
      { label: "ミッション", href: "#" },
      { label: "ニュースリリース", href: "#" },
      { label: "よくある質問", href: "#" },
      { label: "お問い合わせ", href: "#" },
    ]
  },
  service: {
    title: "サービス",
    links: [
      { label: "健康情報", href: "#" },
      { label: "トレーニング情報", href: "#" },
      { label: "AI支援ツール", href: "#" },
    ]
  },
  support: {
    title: "サポート",
    links: [
      { label: "サイトマップ", href: "#" },
      { label: "利用規約", href: "/terms" },
      { label: "プライバシーポリシー", href: "/privacy" }
    ]
  }
};