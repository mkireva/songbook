"use client";

import { PauseIcon, PlayIcon, StopCircle } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

let currentAudio: HTMLAudioElement | null = null;
let setCurrentAudioPlaying: ((isPlaying: boolean) => void) | null = null;

export default function AudioPlayer({ audio }: { audio: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Reset isPlaying state and stop current audio when the audio prop changes
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  }, [audio]);

  useEffect(() => {
    const handleEnded = () => {
      setIsPlaying(false);
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  const handlePlay = () => {
    if (audioRef.current) {
      if (currentAudio && currentAudio !== audioRef.current) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        if (setCurrentAudioPlaying) {
          setCurrentAudioPlaying(false); // Ensure the play icon is shown for the previous audio
        }
      }
      audioRef.current.play();
      setIsPlaying(true);
      currentAudio = audioRef.current;
      setCurrentAudioPlaying = setIsPlaying;
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div className="audio-player flex gap-1">
      <audio ref={audioRef} src={audio} />
      {isPlaying ? (
        <PauseIcon onClick={handlePause} />
      ) : (
        <PlayIcon onClick={handlePlay} />
      )}
      <StopCircle onClick={handleStop} />
    </div>
  );
}