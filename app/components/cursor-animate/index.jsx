"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimateCursorWrapper() {
  const dotRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const follower = followerRef.current;

    if (!dot || !follower) return;

    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };

    const moveCursor = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      gsap.set(dot, { x: mouse.x, y: mouse.y });
    };

    const updateFollower = () => {
      pos.x += (mouse.x - pos.x) / 6;
      pos.y += (mouse.y - pos.y) / 6;
      gsap.set(follower, { x: pos.x, y: pos.y });
    };

    gsap.ticker.add(updateFollower);

    const onPress = () => {
      gsap.to(dot, { scale: 0, duration: 0.15 });

      gsap.to(follower, {
        scale: 2,
        borderColor: "#ec4899",
        backgroundColor: "rgba(236, 72, 153, 0.2)",
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const onRelease = () => {
      gsap.to(dot, { scale: 1, duration: 0.2 });

      gsap.to(follower, {
        scale: 1,
        borderColor: "#ff007f",
        backgroundColor: "transparent",
        duration: 0.4,
        ease: "back.out(1.5)",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", onPress);
    window.addEventListener("mouseup", onRelease);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", onPress);
      window.removeEventListener("mouseup", onRelease);
      gsap.ticker.remove(updateFollower);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#ff007f] rounded-full pointer-events-none z-9999 hidden md:block"
        style={{ transform: "translate(-100px, -100px)" }}
      />

      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-6 h-6 border-2 border-[#ff007f] rounded-full pointer-events-none z-9999 hidden md:block mix-blend-screen"
        style={{
          transform: "translate(-100px, -100px)",
          boxShadow: "0 0 10px rgba(255, 0, 127, 0.3)",
          transition:
            "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.2s, background-color 0.2s",
        }}
      />
    </>
  );
}
