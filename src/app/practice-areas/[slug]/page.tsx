import { notFound } from "next/navigation";
import { practiceAreasData } from "@/data/practiceAreasData";
import { Metadata } from "next";
import PracticeAreaClient from "./PracticeAreaClient";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const practice = practiceAreasData.find((p) => p.slug === slug);
  
  if (!practice) return { title: "Practice Area Not Found" };

  return {
    title: `${practice.title.en} Consultancy in Nepal`,
    description: `${practice.description.en} Professional legal services by Austin Law Consult & Justice Point, Kathmandu.`,
    keywords: [practice.title.en, "Law firm Nepal", "Austin Law", "Legal Consultancy"],
    openGraph: {
      title: `${practice.title.en} - Austin Law Consult & Justice Point`,
      description: practice.description.en,
      type: "article",
    }
  };
}

export default async function PracticeAreaDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const practice = practiceAreasData.find((p) => p.slug === slug);

  if (!practice) {
    notFound();
  }

  return <PracticeAreaClient practice={practice} />;
}
