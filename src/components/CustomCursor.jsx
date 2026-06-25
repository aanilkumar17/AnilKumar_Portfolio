import { useEffect, useRef } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const handleHover = () => ringRef.current?.classList.add("expand");
    const handleLeave = () => ringRef.current?.classList.remove("expand");
    const handleClick = () => {
      dotRef.current?.classList.add("click");
      setTimeout(() => dotRef.current?.classList.remove("click"), 300);
    };

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, .btn, .card").forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });
    window.addEventListener("click", handleClick);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
