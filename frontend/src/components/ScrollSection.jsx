import { useEffect, useRef } from "react";

export default function ScrollSection({ title, text, onVisible }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && onVisible(),
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [onVisible]);

  return (
    <div ref={ref} className="min-h-[80vh]">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-4 text-gray-400 text-lg">{text}</p>
    </div>
  );
}
