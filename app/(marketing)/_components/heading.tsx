"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plane. Unified. Welcome to{" "}
        <span className="underline">Jotion</span>
      </h1>
      <h2 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is the connected workspace where <br />
        better, faster work happens.
      </h2>
      <Button>
        Enter Jotion
        <ArrowRight />
      </Button>
    </div>
  );
};

export default Heading;
