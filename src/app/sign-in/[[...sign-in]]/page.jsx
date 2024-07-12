"use client";

import { SignIn, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();

  if (!user) {
    return (
        <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-gradient-to-b from-primary-500 from-60%  to-transparent">
            <SignIn appearance={{theme: 'Neobrutalism'}}/>
        </div>
    );
  }

  return <div>Welcome!</div>;
}