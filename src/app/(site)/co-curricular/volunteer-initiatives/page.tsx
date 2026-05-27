import CCAPageLayout from "@/components/layout/CCAPageLayout";
import { volunteerTimeline } from "@/data/co-curricular/volunteerInitiatives";

export default function Page() {
  return (
    <CCAPageLayout
      title="Volunteer Initiatives"
      subtitle="CCAs"
      description="Glimpse through the volunteer initiatives I have been part of, each reflecting my commitment to empathy, community engagement, and making a positive impact on different communities in Singapore."
      image="/images/cca/gifs/volunteer.gif"
      timeline={volunteerTimeline}
    />
  );
}