import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Impact } from "@/components/site/Impact";
import { Breadth } from "@/components/site/Breadth";
import { Evolution } from "@/components/site/Evolution";
import { Capabilities } from "@/components/site/Capabilities";
import { FeaturedWork } from "@/components/site/FeaturedWork";
import { Experience } from "@/components/site/Experience";
import { Approach } from "@/components/site/Approach";
import { Thinking } from "@/components/site/Thinking";
import { AiSystems } from "@/components/site/AiSystems";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Anish Ranjan — Brand, Content & Marketing Leader";
const description =
  "Anish Ranjan is a senior Brand, Content & Creative Strategist building scalable marketing systems, content ecosystems and AI-driven marcom for ambitious organizations.";

const ldJson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anish Ranjan",
  jobTitle: "Brand, Content & Marketing Leader",
  description,
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
  knowsAbout: [
    "Brand Strategy",
    "Content Strategy",
    "Marketing Communication",
    "Creative Direction",
    "AI-Driven Marketing",
    "Thought Leadership",
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: "Anish Ranjan" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(ldJson) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Nav />
      <main>
        <Hero />
        <Impact />
        <Breadth />
        <Evolution />
        <Capabilities />
        <FeaturedWork />
        <Experience />
        <Approach />
        <Thinking />
        <AiSystems />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
