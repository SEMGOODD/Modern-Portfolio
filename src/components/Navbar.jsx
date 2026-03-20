import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-300 focus:outline-none hover:bg-secondary/50"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 md:h-6 md:w-6 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 md:h-6 md:w-6 text-blue-900" />
      )}
    </button>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full z-[100] transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* LOGO */}
        <a
          className="text-2xl font-black flex items-center tracking-tighter z-[110]"
          href="#"
        >
          <span className="relative">
            <span className="relative text-glow">
              <span className="text-primary">S</span>
              <span className="text">e</span>
              <span className="text-primary">MG</span>
              <span className="text">oo</span>
              <span className="text-primary">DD</span>
            </span>{" "}
            Portfolio
          </span>
        </a>

        {/* DESKTOP NAV (Liens + Theme Toggle) */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
          <div className="pl-4 border-l border-border/50">
            <ThemeToggle />
          </div>
        </div>

        {/* MOBILE NAV (Theme Toggle + Burger Menu) */}
        <div className="flex md:hidden items-center gap-2 z-[110]">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground focus:outline-none"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* OVERLAY MENU MOBILE (SORTI DU CONTAINER) */}
      <div
        className={cn(
          "fixed inset-0 w-screen h-screen bg-background/98 backdrop-blur-xl z-[105] flex flex-col items-center justify-center",
          "transition-all duration-300 ease-in-out md:hidden",
          isMenuOpen
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-2xl text-center font-semibold w-full px-6">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary hover:scale-110 transition-all duration-300 py-4 border-b border-border/20 last:border-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};