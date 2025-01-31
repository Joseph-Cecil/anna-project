"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click.ts";

export default function EducationResource() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <div className="flex justify-between items-start p-4">
                  <motion.h3 layoutId={`title-${active.title}-${id}`} className="font-medium text-neutral-700 dark:text-neutral-200 text-base">
                    {active.title}
                  </motion.h3>
                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    Learn More
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400">
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-5xl mx-auto w-full grid grid-cols-2 md:grid-cols-3 items-start gap-4 mt-20">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <motion.div layoutId={`image-${card.title}-${id}`}>
              <img width={100} height={100} src={card.src} alt={card.title} className="h-60 w-full rounded-lg object-cover object-top" />
            </motion.div>
            <motion.h3 layoutId={`title-${card.title}-${id}`} className="font-medium text-neutral-800 dark:text-neutral-200 text-center text-base">
              {card.title}
            </motion.h3>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-black">
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);

const cards = [
  {
    title: "Understanding Anxiety",
    src: "https://images.unsplash.com/photo-1604208485423-f19bc2aaae2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW54aWV0eXxlbnwwfHwwfHx8MA%3D%3D",
    ctaLink: "https://mentalhealth.org/anxiety",
    content: () => <p>Learn about anxiety, its symptoms, causes, and effective coping strategies.</p>,
  },
  {
    title: "Managing Stress",
    src: "https://plus.unsplash.com/premium_photo-1670828053069-0f7341d47e2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0cmVzc3xlbnwwfHwwfHx8MA%3D%3D",
    ctaLink: "https://mentalhealth.org/stress",
    content: () => <p>Discover practical ways to manage and reduce stress in daily life.</p>,
  },
  {
    title: "Depression Awareness",
    src: "https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRlcHJlc3Npb258ZW58MHx8MHx8fDA%3D",
    ctaLink: "https://mentalhealth.org/depression",
    content: () => <p>Understand depression, its signs, and where to seek help.</p>,
  },
  {
    title: "Building Resilience",
    src: "https://images.unsplash.com/photo-1641706531193-03f3fa564779?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzaWxpZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    ctaLink: "https://mentalhealth.org/resilience",
    content: () => <p>Develop skills to enhance emotional strength and adaptability.</p>,
  },
  {
    title: "Mindfulness Practices",
    src: "https://images.unsplash.com/photo-1537202108838-e7072bad1927?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWluZGZ1bG5lc3N8ZW58MHx8MHx8fDA%3D",
    ctaLink: "https://mentalhealth.org/mindfulness",
    content: () => <p>Learn how mindfulness can improve mental well-being and focus.</p>,
  },
  {
    title: "Healthy Sleep Habits",
    src: "https://media.istockphoto.com/id/1332616480/photo/shot-of-a-young-man-reaching-for-his-alarm-clock-after-waking-up-in-bed-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=LZQy7UWtqEL8eeDTPHgmTXAEr0Zxij64IjNUbTxDsbw=",
    ctaLink: "https://mentalhealth.org/sleep",
    content: () => <p>Discover the impact of sleep on mental health and ways to improve it.</p>,
  },
  {
    title: "Overcoming Social Anxiety",
    src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3ZlciUyMGNvbWluZyUyMHNvY2lhbCUyMGFueGlldHl8ZW58MHx8MHx8fDA%3D",
    ctaLink: "https://mentalhealth.org/social-anxiety",
    content: () => <p>Understand social anxiety and how to build confidence in social situations.</p>,
  },
  {
    title: "Coping with Trauma",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhdW1hfGVufDB8fDB8fHww",
    ctaLink: "https://mentalhealth.org/trauma",
    content: () => <p>Learn about trauma recovery and how to seek professional support.</p>,
  },
  {
    title: "Self-Care Strategies",
    src: "https://images.unsplash.com/photo-1501959915551-4e8d30928317?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNlbGYlMjBjYXJlfGVufDB8fDB8fHww",
    ctaLink: "https://mentalhealth.org/self-care",
    content: () => <p>Explore daily self-care habits to boost mental and emotional well-being.</p>,
  },
];


