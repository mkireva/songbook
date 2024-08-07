"use client";
import { AudioPlayer } from "react-audio-play";
import data from "data/data.json";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Songs() {
  const handlePlay = () => {
    console.log("Audio started playing");
  };

  const handlePause = () => {
    console.log("Audio paused");
  };

  const t = useTranslations("Songs");

  return (
    <div>
      <h2 className="mb-6 text-center text-primary  dark:text-white text-3xl font-medium leading-tight tracking-tighter md:text-3xl lg:leading-[1.1] mt-6">
        {t("title")}
      </h2>
      <div className="w-full xl:flex items-center gap-x-4 justify-center ">
        {/* <div className="relative mt-6 mb-2 mr-2 ml-2 md:w-5/12 h-[300px] items-center justify-center">
          <Image
            src="/zigulka.jpg"
            fill
            priority
            alt=""
            className="rounded-lg border-none"
          />
        </div> */}
      </div>

      <div className="w-full flex flex-col xl-flex-row items-center p-8 xl:pl-20 xl:pr-20 gap-x-12 ">
        {/* track container */}
        <div className="flex flex-1 w-full">
          {/* tracks */}
          <div className="flex-1 flex flex-col xl:px-12 justify-center items-center">
            {data.map((song, index) => {
              return (
                <div className="flex flex-1 w-full md:w-5/12 " key={index}>
                  {/* track name */}
                  <div className="flex flex-1 items-center gap-x-2 font-semibold xl:font-extrabold pr-2">
                    {song.play ? (
                      <div className="text-sm xl:text-base">{song.title}</div>
                    ) : null}
                  </div>

                  {/* track player */}
                  <div className="">
                    {song.play ? (
                      <AudioPlayer
                        volume={40}
                        volumePlacement="bottom"
                        preload="none"
                        className="custom-style  album-player"
                        src={song.audio}
                        onPlay={handlePlay}
                        onPause={handlePause}
                        
                        style={{
                          backgroundColor: "transparent",
                          boxShadow: "none",
                          width: "100%",
                        }}
                      />
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="block text-muted-foreground mt-4 text-xs md:text-sm font-semibold antialiased leading-normal text-center">
          Музика от Учителя - Интеграл <br />
          Интерпрет: Петър Ганев
        </div>
      </div>
    </div>
  );
}
