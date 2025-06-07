import { PauseIcon, PlayIcon } from "@/icons";
import clsx from "clsx";
import { motion } from "motion/react";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

export const Player: React.FC<{
  isClicked: boolean;
  setIsClicked: (value: boolean) => void;
}> = ({ isClicked, setIsClicked }) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollYProgress, setScrollYProgress] = useState(0);

  const togglePlayer = useCallback(() => setIsPlaying(!isPlaying), [isPlaying]);

  useLayoutEffect(() => {
    setAudio(new Audio("song.mp3"));
  }, []);

  useEffect(() => {
    if (!audio) return;

    const audioController = new AbortController();
    audio.addEventListener(
      "ended",
      () => {
        setIsPlaying(false);
      },
      { signal: audioController.signal }
    );

    return () => audioController.abort();
  }, [audio]);

  useEffect(() => {
    const scrollController = new AbortController();

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const total = docHeight - winHeight;
      const progress = total > 0 ? scrollTop / total : 0;

      setScrollYProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress, {
      signal: scrollController.signal,
    });
    window.addEventListener("resize", updateScrollProgress, {
      signal: scrollController.signal,
    });

    return () => scrollController.abort();
  }, []);

  const handleClick = useCallback(() => {
    if (!audio) return;

    if (!isClicked) {
      setIsClicked(true);
    }
    if (!isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    togglePlayer();
  }, [isPlaying, audio, togglePlayer, isClicked, setIsClicked]);

  return (
    <motion.button
      initial={{ borderWidth: 0 }}
      animate={{ borderWidth: 1 }}
      transition={{ type: "spring", duration: 1.2 }}
      className={clsx(
        "player-button",
        scrollYProgress < 0.1 ? "player-button--light" : "player-button--dark",
        isClicked && "no-hint"
      )}
      onClick={handleClick}
    >
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </motion.button>
  );
};
