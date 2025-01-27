import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { BookOpen, Heart, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "Community Programs & Services",
  heading = "Empowering Communities Through Mental Health Awareness and Support",
  description = "Explore our initiatives and services designed to promote mental health education, reduce stigma, and provide easy access to resources.",
  tabs = [
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
}: Feature108Props) => {
  return (
    <section className="py-16">
      <div>
        <div className="container flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            {heading}
          </h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div>
          <Tabs defaultValue={tabs[0].value} className="mt-8">
            <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
                >
                  {tab.icon} {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="container mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
              {tabs.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
                >
                  <div className="flex flex-col gap-5">
                    <Badge variant="outline" className="w-fit bg-background">
                      {tab.content.badge}
                    </Badge>
                    <h3 className="text-3xl font-semibold lg:text-5xl">
                      {tab.content.title}
                    </h3>
                    <p className="text-muted-foreground lg:text-lg">
                      {tab.content.description}
                    </p>
                    <Button className="mt-2.5 w-fit gap-2" size="lg">
                      {tab.content.buttonText}
                    </Button>
                  </div>
                  <img
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    className="rounded-xl"
                  />
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { Feature108 };