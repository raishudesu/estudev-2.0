import Community from "@/components/landing-page/community";
import Features from "@/components/landing-page/features";
import Hero from "@/components/landing-page/hero";

export default function Home() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 mt-6">
      <Hero />
      <Features />
      <Community />
    </section>
  );
}
