import SmoothScroll from "./SmoothScroll";
import { motion } from "framer-motion";

export default function About() {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 64 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 64 },
  };
  return (
    <SmoothScroll>
      <section className="h-screen p-2">
        <div className="h-full w-full bg-slate-300"></div>
      </section>
      <section className="h-screen p-2">
        <div className="h-full w-full bg-slate-300"></div>
      </section>
      <section className="h-screen p-2">
        <div className="h-full w-full bg-slate-300"></div>
      </section>
      <section className="h-screen p-2">
        <div className="h-full w-full bg-slate-300"></div>
      </section>
      <section className="h-screen p-2">
        <div className="h-full w-full bg-slate-300"></div>
      </section>
      <section className="h-screen p-2">
        <div className="h-full w-full bg-slate-300"></div>
      </section>
      <section className="h-screen p-2">
        <div className="h-full w-full bg-slate-300"></div>
      </section>
    </SmoothScroll>
  );
}
