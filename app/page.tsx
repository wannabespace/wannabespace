import { Header } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero-section";
import { EmailSignup } from "@/components/home/email-signup";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      <Header />
      <main className="grow flex items-center">
        <div className="container mx-auto px-6 py-24 sm:py-32 lg:py-40">
          <HeroSection />
          <EmailSignup />
        </div>
      </main>
    </div>
  );
}
