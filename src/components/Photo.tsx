import clsx from "clsx";
import { motion, useAnimation, useInView, Variants } from "motion/react";
import { useEffect, useRef } from "react";
import Image from "next/image";

const photoVars: Variants = {
  initial: {
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.6,
    },
  },
  animate: (i: number) => ({
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay: Math.floor(i / 4) * 0.2,
    },
  }),
};

export const Photo: React.FC<{ src: string; idx: number }> = ({ src, idx }) => {
  const ref = useRef(null);
  const photoiInView = useInView(ref, {
    margin: "0px 0px -300px 0px",
    once: true,
  });

  const animations = useAnimation();

  useEffect(() => {
    if (photoiInView) {
      animations.start("animate");
    }
  }, [photoiInView, animations]);

  return (
    <motion.div
      ref={ref}
      variants={photoVars}
      initial="initial"
      animate={animations}
      custom={idx}
      className={clsx(
        "gallery-image-wrapper",
        idx <= 5 && "gallery-image-wrapper--first",
        5 < idx && idx <= 11 && "gallery-image-wrapper--second",
        idx > 11 && "gallery-image-wrapper--third"
      )}
    >
      <Image
        className="gallery-image"
        src={src}
        alt="Love u"
        fill
      />
    </motion.div>
  );
};
