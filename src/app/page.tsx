"use client";

import { verticalImages, horizontalImages } from "@/images";
import { motion } from "motion/react";
import { ImageCard } from "@/components";

export default function Home() {
  const images = [
    horizontalImages[0],
    verticalImages[0],
    horizontalImages[1],
    verticalImages[1],
    horizontalImages[2],
    verticalImages[2],
  ];
  const order = [2, 4, 6, 3, 5, 1];

  return (
    <>
      <motion.div className="card-container">
        {images.map((image, idx) => (
          <ImageCard
            key={idx}
            idx={idx}
            image={image}
            order={order}
          />
        ))}
      </motion.div>
    </>
  );
}
