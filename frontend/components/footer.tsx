import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 relative">
      <small className="mb-2 block text-xs">
        &copy; 2024 Janindu Chamod (Scorpio). All rights reserved.
      </small>
      <div className="text-xs">
        <p>
          <span className="font-semibold">
            <span className="text-yellow-700">
              SLIIT Software Engineering Undergraduate
            </span>
          </span>{" "}
          | Frontend Full-Stack Software Engineer @ ClouDev Technologies
        </p>
        <p className="mt-1">
          Passionate about UI/UX design & development | Built with React,
          Next.js, TypeScript, Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
