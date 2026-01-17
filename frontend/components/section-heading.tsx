import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-5xl font-medium capitalize mb-8 text-center sm:mt-8">
      {children}
    </h2>
  );
}
