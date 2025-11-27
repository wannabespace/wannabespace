export function HeroSection() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200">
          Conar
        </h2>
        <span className="bg-amber-400/20 text-amber-600 dark:text-amber-400 text-sm font-medium px-2.5 py-0.5 rounded-full">
          Coming Soon
        </span>
      </div>
      <h1 className="text-4xl font-extrabold text-balance tracking-tighter text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
        A new way to manage your data is being built.
      </h1>
      <p className="mt-6 text-lg text-balance leading-8 text-slate-600 dark:text-slate-400">
        Conar is an AI-powered data management tool that lets you focus on working with your data while it handles the complexity.
      </p>
    </div>
  );
}
