"use client";

import { Greetings, ImageCard, Photos, Player } from "@/components";
import { useEffect, useRef, useState } from "react";
import ReactLenis, { LenisRef } from "lenis/react";
import { cancelFrame, frame, motion } from "motion/react";
import { verticalImages, horizontalImages } from "@/images";

export default function Home() {
  const lenisRef = useRef<LenisRef>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [isPlayerClicked, setIsPlayerClicked] = useState(false);

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
    const hintController = new AbortController();
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    const onVisible = () => {
      document.querySelector(".player-button")?.classList.add("show-hint");
    };

    if (document.visibilityState === "visible") {
      onVisible();
    } else {
      document.addEventListener(
        "visibilitychange",
        () => {
          if (document.visibilityState === "visible") {
            onVisible();
          }
        },
        { once: true, signal: hintController.signal }
      );
    }

    return () => {
      cancelFrame(update);
      hintController.abort();
    };
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
              isPlayerClicked={isPlayerClicked}
            />
          ))}
        </motion.div>
      </div>
      <div className="section-second">
        <Greetings />
        <Photos />
      </div>
      <Player
        isClicked={isPlayerClicked}
        setIsClicked={setIsPlayerClicked}
      />
    </ReactLenis>
  );
}
