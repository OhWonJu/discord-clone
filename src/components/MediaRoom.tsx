"use client";

import React, { useEffect, useState } from "react";
import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import "@livekit/components-styles";
import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { env } from "@/lib/utils/env";

interface MediaRoomProps {
  chatId: string;
  video: boolean;
  audio: boolean;
}

const MediaRoom = ({ chatId, video, audio }: MediaRoomProps) => {
  const { user } = useUser();

  const [token, setToken] = useState("");

  console.log(user);

  useEffect(() => {
    console.log("ENTEr");
    if (!user?.firstName || !user?.fullName) return;

    console.log("RUN");

    (async () => {
      try {
        const response = await fetch(
          `/api/livekit?room=${chatId}&username=${user.fullName}`
        );
        const data = await response.json();
        setToken(data.token);
        console.log(data.token);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [user?.firstName, user?.fullName, chatId]);

  if (token === "") {
    return (
      <div className="flex flex-col flex-1 justify-center items-center">
        <Loader2 className="h-7 w-7 text-zinc-500 animate-spin my-4" />
        <p className="text-xs text-zinc-500 dark:text-zinc-400">Loading...</p>
      </div>
    );
  }

  return (
    <LiveKitRoom
      data-lk-theme="default"
      serverUrl={env.LIVEKET_WS_URL}
      token={token}
      connect={true}
      video={video}
      audio={audio}
    >
      <VideoConference />
    </LiveKitRoom>
  );
};

export default MediaRoom;
