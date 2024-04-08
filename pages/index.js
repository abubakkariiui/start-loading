"use client";

import { useEffect, useState } from "react";
import ThisCantBeReached from "./user";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      window.location.href = "https://abu-bakkar.netlify.app";
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ThisCantBeReached />;
  }

  return (
    <>
      <p className="text-center text-3xl font-bold mt-80 text-gray-200">Portfolio Loading...</p>
    </>
  );
}
