import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoreSeries from "@/components/CoreSeries";
import MaterialStory from "@/components/MaterialStory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full relative bg-brand-charcoal min-h-screen">
        <div className="relative z-10">
          <Hero />
        </div>
        <div className="relative z-20 bg-brand-offwhite">
          <CoreSeries />
        </div>
        <div className="relative z-30">
          <MaterialStory />
        </div>
      </main>
      <Footer />
    </>
  );
}
