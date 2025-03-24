import React from "react";
import { motion, Variants } from "motion/react";
import Image, { StaticImageData } from "next/image";

interface ImageCardProps {
  idx: number;
  image: StaticImageData;
  order: number[];
}

export const ImageCard: React.FC<ImageCardProps> = ({ idx, image, order }) => {
  const gridAreas = ["first", "second", "third", "fourth", "fifth", "sixth"];

  const variants = {
    initial: {
      width: idx % 2 === 0 ? 0 : "100%",
      height: idx % 2 === 0 ? "100%" : 0,
      borderWidth: 0,
    },
    animate: (idx: number) => ({
      width: "100%",
      height: "100%",
      borderWidth: 1,
      transition: {
        ease: [0.19, 1, 0.22, 1],
        duration: 1.2,
        delay: order.indexOf(idx + 1) * 0.2 + 0.5,
      },
    }),
  } as Variants;

  return (
    <motion.div
      custom={idx}
      variants={variants}
      initial="initial"
      animate="animate"
      className={
        "card-container__card " +
        (idx % 2 === 0
          ? idx !== 4
            ? "card-container__card_horizontal"
            : "card-container__card_low-horizontal"
          : "card-container__card_vertical")
      }
      style={{ gridArea: gridAreas[idx] }}
    >
      <Image
        src={image}
        width={0}
        height={0}
        alt={`Image ${idx}`}
        className="card-container__card__image"
      />
    </motion.div>
  );
};
