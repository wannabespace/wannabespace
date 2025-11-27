import Image from "next/image";
import Link from "next/link";
import { RiGithubFill } from "@remixicon/react"

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={32}
              height={32}
              className="size-8 rounded-lg"
            />
            <span className="text-xl font-bold text-slate-800 dark:text-slate-200">wannabespace</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://github.com/wannabespace/conar"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            <RiGithubFill className="size-6" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
