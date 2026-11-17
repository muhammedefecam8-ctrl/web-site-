import { createFileRoute } from "@tanstack/react-router";

import { Contact } from "@/components/landing/contact";
import { Features } from "@/components/landing/features";
import { Fleet } from "@/components/landing/fleet";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { LogoCloud } from "@/components/landing/logo-cloud";
import { Navbar } from "@/components/landing/navbar";
import { Pricing } from "@/components/landing/pricing";
import { RequestFormProvider } from "@/components/landing/request-form";

const title = "Üç Kardeşler Rent A Car | Bayraklı İzmir Araç Kiralama";
const description =
  "Bayraklı, İzmir'de 7/24 açık araç kiralama. Ekonomik ve Orta Sınıf bakımlı araçlar, şeffaf günlük fiyatlar. Aracınızı hemen seçin.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <RequestFormProvider>
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <HowItWorks />
        <Fleet />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </RequestFormProvider>
  );
}
