"use client";

import React, { useEffect, useState } from "react";

type Light = "red" | "yellow" | "green";

export default function TrafficLight() {
  const [light, setLight] = useState<Light>("red");

  useEffect(() => {
    // Hooks runs after every render, when dependencies changes in case of light
    const timer = setTimeout(() => {
        if (light === 'red') {
            setLight("green");
        }
        if (light === 'green') {
            setLight("yellow");
        }
        if (light === 'yellow') {
            setLight("red");
        }
  }, getLightDuration(light) * 1000);

  return () => clearInterval(timer);

  }, [light]);

  const getLightDuration = (currentLight : Light) => {
    if(currentLight === "red") {
        return 7; // 7 seconds
    }
    if(currentLight === "green" || currentLight === "yellow") {
        return 5; // 5 seconds
    }
    return 0;
  }

  return (
    <div className="flex flex-col gap-5 border p-10">
      <div className={`w-40 h-40 ${light === "red" && "bg-red-500"} rounded-full`}></div>
      <div className={`w-40 h-40 ${light === "yellow" && "bg-yellow-500"} rounded-full`}></div>
      <div className={`w-40 h-40 ${light === "green" && "bg-green-500"} rounded-full`}></div>
    </div>
  );
}
