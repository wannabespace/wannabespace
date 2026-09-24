import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";

import { Mesh } from "./mesh";

const products = [
  {
    description:
      "AI database client for Postgres, MySQL, MSSQL and ClickHouse.",
    domain: "tamery.app",
    href: "https://tamery.app",
    icon: "/tamery.png",
    name: "Tamery",
  },
  {
    description:
      "Translate between 70+ languages, with natural alternatives for every result.",
    domain: "lang.zone",
    href: "https://lang.zone",
    icon: "/lang-zone.svg",
    name: "Lang.zone",
  },
];

const Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 617 352" aria-hidden className={className}>
    <path
      fill="currentColor"
      d="M216.486 31.5012L263.952 0L287.874 42.0805L409.269 253.206L463.1 159.585H439.368C422.732 159.585 407.393 150.566 399.252 135.998L362.6 70.4154H617L472.711 321.221C461.752 340.267 441.509 352 419.602 352H363.535L288.096 220.91L236.843 131.705L236.855 131.684L208.134 81.7151C193.818 56.1755 207.815 37.5976 216.602 31.5012H216.486Z"
    />
    <path
      fill="currentColor"
      d="M288.096 220.91L230.421 321.209C219.465 340.263 199.217 352 177.306 352H121.248L6.60681 152.622L6.62629 152.618C-8.64337 126.152 6.01411 107.593 15.2522 101.621L61.8903 70.4351L166.982 253.207L219.435 161.981L288.096 220.91Z"
    />
  </svg>
);

const Home = () => (
  <div className="grid min-h-dvh gap-3 p-3 lg:h-dvh lg:grid-cols-2">
    <section className="motion-safe:animate-enter relative isolate flex aspect-4/5 flex-col justify-between overflow-hidden rounded-3xl p-8 text-white sm:aspect-video lg:aspect-auto lg:p-12">
      <Mesh />
      <div className="relative flex items-center gap-2.5 text-lg font-medium">
        <Logo className="h-4 w-auto" />
        Wannabe Space
      </div>
      <div className="relative flex flex-col gap-5">
        <h1 className="text-display motion-safe:animate-enter stagger-1 max-w-xl font-medium text-balance">
          We like making cool products.
        </h1>
        <p className="motion-safe:animate-enter stagger-2 max-w-md text-lg text-pretty text-white/75">
          Wannabe Space is a small team building the software we want to use
          ourselves. Here is what we are working on.
        </p>
      </div>
    </section>

    <section
      aria-labelledby="products"
      className="motion-safe:animate-enter stagger-2 flex flex-col justify-center gap-4 py-6 lg:px-9"
    >
      <h2 id="products" className="text-muted-foreground px-6 text-sm">
        Currently building
      </h2>
      <ul className="flex flex-col gap-1">
        {products.map((product) => (
          <li key={product.href}>
            <a
              href={product.href}
              target="_blank"
              rel="noreferrer"
              className="group hover:bg-foreground/4 focus-visible:outline-foreground flex items-start gap-4 rounded-3xl p-6 transition-colors duration-150 focus-visible:outline-2"
            >
              <Image
                src={product.icon}
                alt=""
                width={40}
                height={40}
                className="ease-house mt-0.5 size-9 shrink-0 rounded-lg shadow-sm transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md"
              />
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                  {product.name}
                </h3>
                <p className="text-muted-foreground max-w-md text-pretty">
                  {product.description}
                </p>
                <span className="text-muted-foreground group-hover:text-foreground flex items-center gap-1 text-sm transition-colors duration-150">
                  {product.domain}
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    className="ease-house size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default Home;
