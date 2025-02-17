import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  [x: string]: string | undefined;
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
  tabs = [],
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
                    <a
                      href={tab.content.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="mt-2.5 w-fit gap-2" size="lg">
                        {tab.content.buttonText}
                      </Button>
                    </a>
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