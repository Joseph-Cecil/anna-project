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
          link: "https://www.nea.org/nea-today/all-news-articles/mental-health-crisis-college-campuses",
          imageSrc: "https://plus.unsplash.com/premium_photo-1663054954443-b0d64eb36d29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVtcG93ZXJpbmclMjBjb21tdW5pdGllc3xlbnwwfHwwfHx8MA%3D%3D",
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
        link: "https://blog.opencounseling.com/location_search/",
        imageSrc: "https://media.istockphoto.com/id/1463773444/photo/excited-boy-talking-to-psychologist.webp?a=1&b=1&s=612x612&w=0&k=20&c=bf1-sD9VYUm8ThueCANAA6U0NWlC4PjDduVuqfkgm_0=",
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
        link: "https://shop.mindful.org/collections/online-courses?_gl=1*1qkr7fm*_gcl_au*MTAwNDY2MjQzNi4xNzM4MzIzMjg0*_ga*MTUyNTM3NTUyNi4xNzM4MzIzMjg1*_ga_N1S9QNN258*MTczODMyMzI4NS4xLjAuMTczODMyMzI4OS41Ni4wLjA.",
        imageSrc: "https://media.istockphoto.com/id/2148737980/photo/hand-presentation-and-workshop-or-conference-for-company-team-building-and-discussion-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=YWnZLXbqEe6e_v7CzyEgh2ZuBv-k8gSQcgaiYSu3DL0=",
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
