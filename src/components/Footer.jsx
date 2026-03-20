import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card relative border-t border-border mt-12 flex justify-center items-center text-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} SEMGOOD. All rights reserved.
      </p>
    </footer>
  );
};
