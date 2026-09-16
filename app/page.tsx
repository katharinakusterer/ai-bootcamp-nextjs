"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString("de-DE"));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Meine erste Next.js App</h1>
      <p className="mt-6 text-xl">Aktuelle Uhrzeit:</p>
      <p className="mt-2 text-5xl font-bold">{time}</p>
    </main>
  );
}