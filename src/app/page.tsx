"use client";

import { ImageCard } from "@/components";
import { useEffect, useRef } from "react";
import ReactLenis, { LenisRef } from "lenis/react";
import { cancelFrame, frame, motion } from "motion/react";
import { verticalImages, horizontalImages } from "@/images";

export default function Home() {
  const lenisRef = useRef<LenisRef>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const images = [
    horizontalImages[0],
    verticalImages[0],
    horizontalImages[1],
    verticalImages[1],
    horizontalImages[2],
    verticalImages[2],
  ];
  const order = [2, 4, 6, 3, 5, 1];

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{ autoRaf: false }}
    >
      <div
        className="section-cards"
        ref={gridRef}
      >
        <motion.div className="card-container">
          {images.map((image, idx) => (
            <ImageCard
              key={idx}
              idx={idx}
              image={image}
              order={order}
              parentRef={gridRef}
            />
          ))}
        </motion.div>
      </div>
      <div className="section-second">
        <h1 style={{}}>Nihao wo de xiao yangguang!</h1>
      </div>
    </ReactLenis>
  );
}
