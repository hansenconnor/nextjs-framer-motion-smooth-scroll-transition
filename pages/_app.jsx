import "../styles/globals.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import SmoothScroll from "./SmoothScroll";

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter(); // With next/router

  return (
    <div className="app">
      <div className="h-12 p-4 flex items-center justify-center gap-5 fixed top-0 z-10 bg-white w-full">
        <Link href="/" scroll={false}>
          Home
        </Link>
        <Link href="/about" scroll={false}>
          About
        </Link>
      </div>
      <AnimatePresence
        mode="wait"
        initial={true}
        onExitComplete={() => {
          console.log("exited");
          window.scrollTo(0, 0);
        }}
      >
        <Component {...pageProps} key={asPath} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
