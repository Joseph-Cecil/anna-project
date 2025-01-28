"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Promoting Mental Health Awareness",
    description:
      "Our platform is dedicated to educating students about mental health. By fostering awareness, we empower young individuals to prioritize their well-being, understand mental health challenges, and support peers in a compassionate environment.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Mental Health Awareness
      </div>
    ),
  },
  {
    title: "Reducing Stigma in Schools",
    description:
      "We are breaking down the stigma surrounding mental health by creating a safe space for open discussions. Our resources and tools ensure students feel comfortable seeking help without fear of judgment.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="https://via.placeholder.com/300"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Stigma reduction illustration"
        />
      </div>
    ),
  },
  {
    title: "Access to Resources and Services",
    description:
      "Students have easy access to mental health services and resources, including professional counseling, self-help tools, and educational content. We are here to support every step of their journey.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Access to Resources
      </div>
    ),
  },
  {
    title: "Building Supportive Communities",
    description:
      "Our platform fosters a sense of community where students can connect with peers, share experiences, and find solidarity in a supportive network. Together, we create an environment of empathy and understanding.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Supportive Communities
      </div>
    ),
  },
];

export default function AboutUs() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
