import React from "react";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";

const NavigationSidebar = async () => {
  // const profile = await currentProfile();

  // if (!profile) return redirect("/");

  // const servers = await db.server.findMany({where: {
  //   members: {
  //     some: {
  //       profileId: profile.id
  //     }
  //   }
  // }})

  return <div>NAV</div>;
};

export default NavigationSidebar;
