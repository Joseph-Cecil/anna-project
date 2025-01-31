import InteractiveBentoGallery from "@/components/interactive-bento-gallery"

const mediaItems = [
  {
    id: 1,
    type: "video",
    title: "Mindful Meditation",
    desc: "Relax your mind and embrace the present moment.",
    url: "https://media.istockphoto.com/id/1899120923/video/close-up-of-asian-girl-feeling-relaxed-and-refreshed-standing-and-closing-her-eyes-in-the.mp4?s=mp4-640x640-is&k=20&c=EZuy8aF7BNVNtokYnIv7h-fp1IV8gGDMWx6dMkVk7CI=",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "video",
    title: "Mental Health Talk",
    desc: "Experts discuss ways to manage stress and anxiety.",
    url: "https://media.istockphoto.com/id/2066622500/video/mental-health-counseling-and-woman-on-couch-with-therapist-for-advice-psychology-and-listen.mp4?s=mp4-640x640-is&k=20&c=4h8Df_MloS5NO73Rhrq37UQxR9EmKbs4xKq1bElFksw=", // Replace with a real mental health video
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "video",
    title: "Support Group",
    desc: "A group of people sharing experiences and uplifting each other.",
    url: "https://media.istockphoto.com/id/1137357484/video/female-counselor-has-serious-conversation-with-teenage-boy.mp4?s=mp4-640x640-is&k=20&c=ZsuvFn06XOdq8W6MxGGxMxm1Wqasetm5hxdexowjVVY=",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
  },
  {
    id: 4,
    type: "image",
    title: "Nature Therapy",
    desc: "Spending time in nature to heal the mind.",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 5,
    type: "image",
    title: "Yoga for Stress Relief",
    desc: "Simple yoga techniques to calm the mind.",
    url: "https://media.istockphoto.com/id/1898253793/photo/group-of-multicultural-yoga-participants-seated-meditating.webp?a=1&b=1&s=612x612&w=0&k=20&c=esVePT7HacegrAP9KBHGVJPEc6hDeSMxh15-CrTNC_Y=", // Replace with a real yoga/mental health video
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 6,
    type: "image",
    title: "Student Wellness",
    desc: "Encouraging students to prioritize their mental well-being.",
    url: "https://images.unsplash.com/photo-1579600161224-cac5a2971069?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 7,
    type: "video",
    title: "Guided Breathing Exercise",
    desc: "Follow along with this guided deep breathing session.",
    url: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4", // Replace with an actual mindfulness video
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
];
  

export function BentoGridGalleryDemo() {
  return (
    <div className="min-h-screen overflow-y-auto">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title="Gallery Shots Collection"
        description="Drag and explore our curated collection of shots"
      />
    </div>
  )
}
