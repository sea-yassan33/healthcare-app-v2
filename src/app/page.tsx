import HomeAbout from "@/components/home/about";
import HomeHero from "@/components/home/hero";
import HomeNewsTopic from "@/components/home/newsTopic";

export default function Home() {
  return (
    <main>
      <HomeHero/>
      <HomeAbout/>
      <HomeNewsTopic/>
    </main>
  );
}
