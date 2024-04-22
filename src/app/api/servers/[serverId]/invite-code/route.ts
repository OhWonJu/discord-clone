import { NextResponse } from "next/server";
import { v4 as uudiv4 } from "uuid";

import { currentProfile } from "@/lib/currentProfile";
import { db } from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { serverId: string } }
) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 400 });
    }

    if (!params.serverId) {
      return new NextResponse("Server ID Missing", { status: 400 });
    }

    const server = await db.server.update({
      where: {
        id: params.serverId,
        profileId: profile.id,
      },
      data: {
        inviteCode: uudiv4(),
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.error("SERVER_ID ->", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
