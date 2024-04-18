import { ModeToggle } from "@/components/ModeToggle";
import { UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";


export default function Home() {
  return (
    <div className="">
      <UserButton afterSignOutUrl="/sign-in" />
      <ModeToggle />
    </div>
  );
}
