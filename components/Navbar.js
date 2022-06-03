import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav>
        <menu>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </menu>
      </nav>
    </div>
  );
}
