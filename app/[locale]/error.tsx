"use client";

import { useEffect } from "react";

import { Button } from "@nextui-org/react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex justify-center items-center h-[60vh] flex-col gap-5">
      <h2>Something went wrong!</h2>
      <Button
        className="bg-darkColor-800 text-lightColor-900"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
