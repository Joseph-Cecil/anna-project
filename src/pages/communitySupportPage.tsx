import { Testimonials } from "@/components/ui/testimonials";

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=1780&auto=format&fit=crop",
    text: "Sharing my story in a safe space allowed me to feel heard and understood for the first time. This platform is truly a lifesaver.",
    name: "Alice Johnson",
    username: "@alicejohnson",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1780&auto=format&fit=crop",
    text: "Through this community, I learned that I’m not alone in my struggles. The resources and support helped me regain confidence in myself.",
    name: "David Smith",
    username: "@davidsmith",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1780&auto=format&fit=crop",
    text: "The stigma around mental health made me hesitant to seek help. This initiative made me feel seen, and the counseling resources were incredible.",
    name: "Emma Brown",
    username: "@emmabrown",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1780&auto=format&fit=crop",
    text: "This platform created a space for open conversations about mental health in my school. It's made a big difference in how we support each other.",
    name: "James Wilson",
    username: "@jameswilson",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1780&auto=format&fit=crop",
    text: "The stories shared here are so powerful. It reminded me that healing is a journey, and it's okay to ask for help.",
    name: "Sophia Lee",
    username: "@sophialee",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1780&auto=format&fit=crop",
    text: "I now understand the importance of mental health thanks to this community. It’s inspired me to advocate for my friends and peers.",
    name: "Michael Davis",
    username: "@michaeldavis",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://images.unsplash.com/photo-1518234786683-8aaa3d5a388e?q=80&w=1780&auto=format&fit=crop",
    text: "I struggled with anxiety and felt isolated. This platform gave me tools to cope and connected me to a counselor who changed my life.",
    name: "Emily Chen",
    username: "@emilychen",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?q=80&w=1780&auto=format&fit=crop",
    text: "The community here is so welcoming. I’ve made friends who understand my challenges and offer support when I need it most.",
    name: "Robert Lee",
    username: "@robertlee",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
];

export default function CommunitySupport() {
  return (
    <div className="container py-10 mt-5">
      <Testimonials testimonials={testimonials} />
    </div>
  );
}
