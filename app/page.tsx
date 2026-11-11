import {
  ArrowUpRight01Icon,
  GithubIcon,
  Idea01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import type { ReactNode } from "react";

import { Mesh } from "./mesh";

const EMAIL = "hello@wannabespace.com";
const GITHUB_URL = "https://github.com/wannabespace";

const products = [
  {
    description:
      "The AI database client for Postgres, MySQL, SQL Server, ClickHouse, MongoDB and more. AI writes the SQL, your agents query through MCP.",
    domain: "tamery.app",
    href: "https://tamery.app",
    icon: "/tamery.png",
    name: "Tamery",
  },
  {
    description:
      "An email agent that reads your Gmail, drafts replies in your voice and only shows you what needs you.",
    domain: "fewmail.app",
    href: "https://fewmail.app",
    icon: "/fewmail.svg",
    name: "Fewmail",
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

const facts: { description: string; icon: IconSvgElement; title: string }[] = [
  {
    description:
      "Every product started as a tool we wanted and could not find.",
    icon: Idea01Icon,
    title: "Built for ourselves",
  },
  {
    description: "A few people, and a short path from an idea to a release.",
    icon: UserGroupIcon,
    title: "Small team",
  },
  {
    description: "Tamery's code is public on GitHub.",
    icon: GithubIcon,
    title: "Open source",
  },
];

const HEADLINE_WORDS = "We like making cool products.".split(" ");

const WORD_STAGGER = [
  "stagger-0",
  "stagger-1",
  "stagger-2",
  "stagger-3",
  "stagger-4",
];

const linkClassName =
  "text-muted-foreground hover:text-foreground transition-colors duration-150";

const primaryButtonClassName =
  "bg-foreground text-body hover:bg-foreground/85 inline-flex h-10 items-center rounded-xl px-4 text-sm font-medium transition duration-150 active:translate-y-px";

const outlineButtonClassName =
  "bg-card ring-foreground/6 hover:ring-foreground/14 inline-flex h-10 items-center rounded-xl px-4 text-sm font-medium shadow-xs ring transition duration-150 active:translate-y-px";

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

const Brand = () => (
  <a
    href="#top"
    className="flex items-center gap-2 text-base font-semibold tracking-tight"
  >
    <Logo className="h-3.5 w-auto" />
    Wannabe Space
  </a>
);

const Navbar = () => (
  <header className="bg-body/85 nav-border sticky top-0 z-40 h-16 border-b border-transparent backdrop-blur-md">
    <nav
      aria-label="Main"
      className="mx-auto flex h-full max-w-6xl items-center gap-8 px-4 sm:px-6"
    >
      <Brand />
      <div className="hidden items-center gap-6 text-sm sm:flex">
        <a href="#products" className={linkClassName}>
          Products
        </a>
        <a href="#company" className={linkClassName}>
          Company
        </a>
      </div>
      <a
        href={`mailto:${EMAIL}`}
        className={`${primaryButtonClassName} ml-auto h-8 rounded-lg px-3`}
      >
        Contact
      </a>
    </nav>
  </header>
);

const Hero = () => (
  <section className="pt-16 sm:pt-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <h1 className="text-display max-w-4xl text-balance">
        {HEADLINE_WORDS.map((word, index) => (
          <span key={word}>
            {index > 0 && " "}
            <span
              className={`motion-safe:animate-enter inline-block ${WORD_STAGGER[index]}`}
            >
              {word}
            </span>
          </span>
        ))}
      </h1>
      <p className="motion-safe:animate-enter stagger-5 text-muted-foreground mt-6 max-w-xl text-lg text-pretty">
        Wannabe Space is a small software studio building the products we want
        to use ourselves.
      </p>
      <div className="motion-safe:animate-enter stagger-6 mt-8 flex flex-wrap gap-2">
        <a href="#products" className={primaryButtonClassName}>
          See products
        </a>
        <a href={`mailto:${EMAIL}`} className={outlineButtonClassName}>
          Contact
        </a>
      </div>
    </div>
    <div className="motion-safe:animate-rise stagger-8 mx-auto mt-16 max-w-7xl px-4 sm:mt-20 sm:px-6">
      <div className="relative isolate flex h-72 items-center justify-center overflow-hidden rounded-3xl text-white sm:h-112">
        <Mesh />
        <Logo className="relative h-16 w-auto drop-shadow-lg sm:h-28" />
      </div>
    </div>
  </section>
);

const Chapter = ({
  children,
  description,
  id,
  label,
  subtitle,
  title,
}: {
  children: ReactNode;
  description?: string;
  id: string;
  label: string;
  subtitle?: string;
  title: string;
}) => (
  <section
    id={id}
    aria-labelledby={`${id}-heading`}
    className="mx-auto max-w-6xl scroll-mt-16 px-4 py-16 sm:px-6 sm:py-24"
  >
    <div className="reveal border-foreground/8 grid gap-x-6 gap-y-8 border-t pt-8 sm:pt-10 md:grid-cols-12">
      <div className="flex flex-col gap-8 md:col-span-8">
        <p>{label}</p>
        <h2
          id={`${id}-heading`}
          className="text-3xl tracking-tight text-balance sm:text-4xl lg:text-5xl"
        >
          {title}
          {subtitle && (
            <span className="text-muted-foreground block">{subtitle}</span>
          )}
        </h2>
      </div>
      {description && (
        <p className="text-muted-foreground text-pretty md:col-span-4 md:self-end">
          {description}
        </p>
      )}
    </div>
    {children}
  </section>
);

const stageClassName =
  "bg-muted ring-foreground/4 dot-grid relative isolate aspect-4/3 overflow-hidden in-[li:first-child]:md:aspect-2/1 rounded-3xl ring";

const Products = () => (
  <Chapter
    id="products"
    label="Products"
    title="Software we build and use every day."
    subtitle="Each one solves a problem we had."
  >
    <ul className="mt-12 grid gap-6 md:grid-cols-2">
      {products.map((product, index) => (
        <li key={product.href} className="reveal first:md:col-span-2">
          <a
            href={product.href}
            target="_blank"
            rel="noreferrer"
            className="group focus-visible:outline-foreground flex flex-col gap-5 rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <div className={stageClassName}>
              {index === 0 ? (
                <Image
                  src="/tamery-screenshot.png"
                  alt="Tamery showing a products table with a query logger"
                  width={2514}
                  height={1696}
                  sizes="(min-width: 768px) 840px, 100vw"
                  className="ease-house absolute top-[14%] left-[10%] w-[115%] max-w-none rounded-xl shadow-xl transition-transform duration-500 group-hover:-translate-y-1.5 md:left-1/8 md:w-3/4"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={product.icon}
                    alt=""
                    width={128}
                    height={128}
                    className="ease-house size-24 rounded-3xl shadow-xl transition-transform duration-500 group-hover:-translate-y-1.5 sm:size-32"
                  />
                </div>
              )}
            </div>
            <div className="flex items-start gap-4 px-1">
              <Image
                src={product.icon}
                alt=""
                width={40}
                height={40}
                className="mt-0.5 size-9 shrink-0 rounded-lg shadow-sm"
              />
              <div className="flex min-w-0 flex-col gap-1.5">
                <h3 className="text-2xl font-medium tracking-tight">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-pretty">
                  {product.description}
                </p>
                <span className="text-muted-foreground group-hover:text-foreground flex items-center gap-1 text-sm transition-colors duration-150">
                  {product.domain}
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    strokeWidth={2}
                    className="ease-house size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </Chapter>
);

const Company = () => (
  <Chapter
    id="company"
    label="Company"
    title="A small team."
    subtitle="Few products, made with care."
    description="We started Wannabe Space to build the tools missing from our own work. We keep the team small and ship only what we use ourselves."
  >
    <div className="reveal mt-12 grid gap-8 sm:grid-cols-3 sm:gap-0">
      {facts.map((fact) => (
        <div
          key={fact.title}
          className="border-foreground/8 flex flex-col gap-2 sm:border-l sm:px-6 sm:first:border-l-0 sm:first:pl-0"
        >
          <span className="flex items-center gap-2 text-sm font-medium">
            <HugeiconsIcon
              icon={fact.icon}
              strokeWidth={2}
              className="text-muted-foreground size-4"
            />
            {fact.title}
          </span>
          <p className="text-muted-foreground text-sm text-pretty">
            {fact.description}
          </p>
        </div>
      ))}
    </div>
  </Chapter>
);

const Contact = () => (
  <section
    aria-labelledby="contact-heading"
    className="mx-auto max-w-6xl px-4 py-32 sm:px-6 sm:py-40"
  >
    <div className="reveal flex flex-col items-center gap-10 text-center">
      <h2
        id="contact-heading"
        className="text-3xl tracking-tight text-balance wrap-break-word sm:text-5xl lg:text-6xl"
      >
        Have an idea or a question?
        <span className="text-muted-foreground block">
          Write to us at {EMAIL}.
        </span>
      </h2>
      <a href={`mailto:${EMAIL}`} className={primaryButtonClassName}>
        Contact
      </a>
    </div>
  </section>
);

const FooterColumn = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => (
  <div className="flex flex-col gap-3 text-sm">
    <h2 className="font-medium">{title}</h2>
    {children}
  </div>
);

const Footer = () => (
  <footer className="mx-auto w-full max-w-6xl px-4 sm:px-6">
    <div className="border-foreground/8 grid gap-x-6 gap-y-12 border-t pt-12 pb-16 md:grid-cols-12">
      <div className="flex flex-col gap-4 md:col-span-6">
        <Brand />
        <p className="text-muted-foreground max-w-xs text-sm text-pretty">
          A small software studio building the products we want to use
          ourselves.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 md:col-span-6 md:grid-cols-3">
        <FooterColumn title="Products">
          {products.map((product) => (
            <a
              key={product.href}
              href={product.href}
              target="_blank"
              rel="noreferrer"
              className={linkClassName}
            >
              {product.name}
            </a>
          ))}
        </FooterColumn>
        <FooterColumn title="Company">
          <a href="#company" className={linkClassName}>
            About
          </a>
          <a href={`mailto:${EMAIL}`} className={linkClassName}>
            Contact
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className={linkClassName}
          >
            GitHub
          </a>
        </FooterColumn>
      </div>
    </div>
    <div className="border-foreground/8 border-t py-6">
      <p className="text-muted-foreground text-xs">
        © {new Date().getFullYear()} Wannabe Space, LLC
      </p>
    </div>
  </footer>
);

const Home = () => (
  <div id="top" className="flex min-h-dvh flex-col overflow-x-clip">
    <Navbar />
    <main className="flex-1">
      <Hero />
      <Products />
      <Company />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Home;
