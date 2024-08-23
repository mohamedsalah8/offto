import React from "react";

export default function ErrorProvider({
  errors,
  target,
}: {
  errors: any;
  target: string;
}) {
  return (
    <div>
      {errors[target] && (
        <span className="text-primaryColor-600">{errors[target].message}</span>
      )}
    </div>
  );
}
