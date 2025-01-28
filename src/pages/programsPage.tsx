import { BookOpen, Heart, Users } from "lucide-react";
import { Feature108 } from "../components/shadcnblocks-com-feature108";

const demoData = {
  badge: "Community Programs & Services",
  heading: "Empowering Communities Through Mental Health Awareness and Support",
  description:
    "Explore our initiatives and services designed to promote mental health education, reduce stigma, and provide easy access to resources.",
  tabs: [
    {
      value: "tab-1",
      icon: <Heart className="h-auto w-4 shrink-0" />,
      label: "Mental Health Programs",
      content: {
        badge: "Awareness & Education",
        title: "Educating Students on Mental Health",
        description:
          "Our programs focus on raising awareness about mental health, teaching students how to identify and manage stress, and creating an open dialogue to combat stigma.",
        buttonText: "Learn More",
        imageSrc: "/images/programs/mental-health-awareness.jpg",
        imageAlt: "Students in a mental health awareness session.",
      },
    },
    {
      value: "tab-2",
      icon: <Users className="h-auto w-4 shrink-0" />,
      label: "Counseling Services",
      content: {
        badge: "Support & Guidance",
        title: "Accessible Counseling for Students",
        description:
          "We provide confidential one-on-one and group counseling services to students, helping them navigate personal challenges and mental health struggles.",
        buttonText: "Get Support",
        imageSrc: "/images/services/counseling-services.jpg",
        imageAlt: "A counselor working with students in a supportive session.",
      },
    },
    {
      value: "tab-3",
      icon: <BookOpen className="h-auto w-4 shrink-0" />,
      label: "Workshops & Resources",
      content: {
        badge: "Skill Building",
        title: "Interactive Workshops and Educational Materials",
        description:
          "Our workshops cover topics like stress management, mindfulness, and emotional resilience. Students can also access a variety of educational resources.",
        buttonText: "Explore Workshops",
        imageSrc: "/images/programs/workshops.jpg",
        imageAlt: "An interactive workshop session with students.",
      },
    },
  ],
};

export default function ProgramsAndServicesPage() {
  return<>
   <Feature108 {...demoData} />;
   </>
}
