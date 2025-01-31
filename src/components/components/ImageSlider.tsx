"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "../ui/images-slider";

export function ImagesSliderDemo() {

  const handleJoinNow = () => {
    window.open(
      "https://www.opencounseling.com/accra/counseling-agency/mental-health-society-ghana-mehsog", 
      "_blank"
    );
  };
  
  const images = [
    "https://images.unsplash.com/photo-1604480132736-44c188fe4d20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHww",
  ];

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-3xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Access Mental Health Resources Online <br />
          Find Support and Break the Stigma
        </motion.p>
        <motion.p className="text-sm md:text-lg text-center text-neutral-300 mb-6 px-4 max-w-3xl">
          Mental health is essential to overall well-being, yet stigma and limited access to resources often prevent individuals from seeking help. 
          Through this platform, you can access trusted mental health programs that provide support, guidance, and education to those in need. 
          Take the first step towards prioritizing your mental health.
        </motion.p>
        <button onClick={handleJoinNow} className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Explore Mental Health Programs →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
