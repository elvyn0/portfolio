import { ArrowUp } from "lucide-react";
import { useLenis } from "./SmoothScroll";

function Footer() {
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
      <div>
        <span>© 2026 ANOOP</span>
        <span className="mx-2 text-neutral-600">•</span>
        <span className="text-neutral-400">FULL STACK DEVELOPER</span>
      </div>

      <button
        onClick={scrollToTop}
        type="button"
        aria-label="Back to Top"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-red-600 hover:bg-neutral-800 transition-all cursor-pointer"
      >
        <span>BACK TO TOP</span>
        <ArrowUp className="w-3.5 h-3.5 text-red-500" />
      </button>
    </footer>
  );
}

export default Footer;
