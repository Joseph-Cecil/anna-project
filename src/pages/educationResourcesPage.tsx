import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IconBook, IconVideo } from "@tabler/icons-react";
import { Header1 } from "@/components/ui/header";

export default function EducationResource() {
  const features = [
    {
      title: "Access a Wealth of Knowledge",
      description:
        "Explore a wide range of articles, eBooks, and research papers tailored for students and educators.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Interactive Learning Tools",
      description:
        "Enhance your learning with interactive quizzes, simulations, and AI-driven study guides.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Watch Educational Videos",
      description:
        "Dive into our library of educational videos and tutorials, available on YouTube and beyond.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Global Community of Learners",
      description:
        "Connect with a global network of students and educators to share insights and grow together.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (<>
  <Header1/>
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Empower Your Education with Advanced Tools
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From interactive resources to global networking, our platform equips
          you with everything you need to succeed in your educational journey.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

const SkeletonOne = () => (
  <div className="relative flex py-8 px-2 gap-10 h-full">
    <IconBook className="w-12 h-12 text-blue-500" />
    <p className="text-neutral-500 dark:text-neutral-300">
      Access rich educational content.
    </p>
  </div>
);

const SkeletonTwo = () => (
  <div className="relative flex flex-col items-center justify-center h-full">
    <motion.div
      className="rounded-lg p-4 bg-blue-100 dark:bg-neutral-900"
      whileHover={{ scale: 1.1 }}
    >
      <p className="text-center text-blue-700 dark:text-blue-400">
        Interactive tools in action!
      </p>
    </motion.div>
  </div>
);

const SkeletonThree = () => (
  <a
    href="https://www.youtube.com"
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex items-center justify-center h-full"
  >
    <IconVideo className="w-12 h-12 text-red-500" />
    <p className="ml-4 text-red-500">Explore our video resources.</p>
  </a>
);


const SkeletonFour = () => (
  <div className="flex items-center justify-center h-full">
    <p className="text-center text-neutral-500 dark:text-neutral-300">
      Join our global community today!
    </p>
  </div>
);


