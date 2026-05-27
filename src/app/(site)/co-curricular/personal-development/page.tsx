import CCAPageLayout from "@/components/layout/CCAPageLayout";
import { personalDevelopmentTimeline } from "@/data/co-curricular/personalDevelopment";

export default function Page() {
  return (
    <CCAPageLayout
      title="Personal Development"
      subtitle="CCAs"
      description="Explore the various experiences that shaped my personal growth and learning journey. Each opportunity has helped me develop into who I am today, and I continue striving towards excellence through continuous learning."
      image="/images/cca/gifs/development.gif"
      timeline={personalDevelopmentTimeline}
    />
  );
}