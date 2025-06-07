import { RefObject, useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useTransform,
  Variants,
} from "motion/react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

interface ImageCardProps {
  idx: number;
  image: StaticImageData;
  order: number[];
  parentRef: RefObject<HTMLDivElement | null>;
  isPlayerClicked: boolean;
}

const MotionImage = motion.create(Image);
const gridAreas = ["a", "b", "c", "d", "e", "f"];

export const ImageCard: React.FC<ImageCardProps> = ({
  idx,
  image,
  order,
  parentRef,
  isPlayerClicked,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    container: parentRef,
  });
  const y = useMotionValue(scrollYProgress);
  const width = useMotionValue(scrollYProgress);
  const height = useMotionValue(scrollYProgress);
  const scale = useMotionValue(scrollYProgress);
  const opacity = useMotionValue(scrollYProgress);
  const range = [0, 0.1];

  const topVal = useTransform(y.get(), range, [0, 50]);
  const widthVal = useTransform(width.get(), range, [492, 1920]);
  const heightVal = useTransform(height.get(), range, [444, 1080]);
  const scaleVal = useTransform(scale.get(), [0, 0.08, 0.4], [1, 1, 20]);
  const opacityVal = useTransform(opacity.get(), [0.35, 0.4], [1, 0]);

  const variants = {
    initial: {
      width: idx !== 4 ? (idx % 2 === 0 ? 0 : "100%") : 0,
      height: idx !== 4 ? (idx % 2 === 0 ? "100%" : 0) : `${442 + 2}px`,
      borderWidth: 0,
      top: idx !== 4 ? "50%" : `${30 + 450 + 6}px`,
      left: "50%",
      translate: idx !== 4 ? "-50% -50%" : "-50% 0%",
    },
    animate: (idx: number) => ({
      width: idx !== 4 ? "100%" : `${498 - 4}px`,
      height: idx !== 4 ? "100%" : `${442 + 2}px`,
      borderWidth: 1,
      transition: {
        ease: [0.19, 1, 0.22, 1],
        duration: 1.2,
        delay: order.indexOf(idx + 1) * 0.2 + 0.5,
      },
    }),
    hover: {
      scale: 1.02,
      transition: { ease: [0.19, 1, 0.22, 1], duration: 0.8 },
    },
  } as Variants;

  useAnimationFrame(() => {
    if (!ref.current || (idx === 4 && !isPlayerClicked)) {
      ref.current!.style.display = "none";
      return;
    }

    if (!ref.current || idx !== 4 || scrollYProgress.get() > 0.45) {
      if (ref.current && idx === 4 && ref.current?.style.display !== "none") {
        ref.current.style.display = "none";
      }
      return;
    }

    if (scrollYProgress.get()! >= 0.4) {
      ref.current.style.display = "none";
    } else {
      ref.current.style.display = "block";
      ref.current.style.width = `${widthVal.get()}px`;
      ref.current.style.height = `${heightVal.get()}px`;
      ref.current.style.transform = `scale(${scaleVal
        .get()
        .toFixed(2)}) translate(0%, -${topVal.get().toFixed(3)}%)`;
      ref.current.style.opacity = `${opacityVal.get().toFixed(2)}`;
    }
  });

  return (
    <motion.div
      layout
      ref={ref}
      custom={idx}
      variants={variants}
      initial="initial"
      animate={isPlayerClicked ? "animate" : {}}
      className={clsx(
        "card-container__card",
        idx % 2 === 0
          ? idx !== 4
            ? "card-container__card_horizontal"
            : "card-container__card_low-horizontal"
          : "card-container__card_vertical"
      )}
      style={{
        gridArea: idx !== 4 ? gridAreas[idx] : undefined,
      }}
    >
      <MotionImage
        src={image}
        fill
        alt={`Image ${idx}`}
        className="card-container__card__image"
        draggable={false}
      />
    </motion.div>
  );
};
