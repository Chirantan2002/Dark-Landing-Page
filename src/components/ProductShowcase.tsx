"use client";
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  // Animate opacity and rotation based on scroll
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <motion.div
          style={{
            opacity,
            rotateX,
            transformPerspective: "800px",
          }}
        >
          <div ref={appImage}>
            <Image
              src={appScreen}
              alt="The product screenshot"
              className="mt-14"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
