
"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const currentYear = new Date().getFullYear();

    const updateYear = () => {
      setYear(currentYear);
    };

    updateYear();
  }, []);

  return (
    <footer className="bg-[#321827] px-6 py-6 text-center text-sm text-[#d8c8ce]">
      <p>
        &copy; {year ?? ""} Remain In My Love. All rights reserved.
      </p>
    </footer>
  );
}
