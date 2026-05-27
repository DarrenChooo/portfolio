import CCAPageLayout from "@/components/layout/CCAPageLayout";
import { clubsSocietiesTimeline } from "@/data/co-curricular/clubsSocieties";

export default function Page() {
  return (
    <CCAPageLayout
      title="Clubs & Societies"
      subtitle="CCAs"
      description="Discover the vibrant array of club activities I've passionately engaged in. Each club showcasing a unique journey of collaboration, leadership, and community impact, reflecting my commitment to making a difference and fostering connections."
      image="/images/cca/gifs/club.gif"
      timeline={clubsSocietiesTimeline}
    />
  );
}
