export type ThemeMode = "dark" | "light";

export interface ThemeOption {
  id: string;
  name: string;
  hint: string;
  mode: ThemeMode;
  /** Three representative colours shown as swatch dots in the picker. */
  swatch: [string, string, string];
}

export const THEME_STORAGE_KEY = "vs-portfolio-theme";
export const DEFAULT_DARK = "midnight";
export const DEFAULT_LIGHT = "daylight";

export const THEMES: ThemeOption[] = [
  {
    id: "midnight",
    name: "Aurora Midnight",
    hint: "Neon violet on deep space",
    mode: "dark",
    swatch: ["#05060f", "#a259ff", "#00e5ff"],
  },
  {
    id: "emerald",
    name: "Neon Emerald",
    hint: "Mint glow on dark teal",
    mode: "dark",
    swatch: ["#04100e", "#00ffa3", "#22e0ff"],
  },
  {
    id: "nebula",
    name: "Nebula Sunset",
    hint: "Magenta & amber on plum",
    mode: "dark",
    swatch: ["#0b0410", "#ff4ecd", "#ffa14a"],
  },
  {
    id: "daylight",
    name: "Daylight",
    hint: "Clean white with violet",
    mode: "light",
    swatch: ["#f7f8fc", "#7c3aed", "#0e7490"],
  },
  {
    id: "sand",
    name: "Warm Sand",
    hint: "Ivory with terracotta",
    mode: "light",
    swatch: ["#fdf8f1", "#c2410c", "#0f766e"],
  },
  {
    id: "mist",
    name: "Cool Mist",
    hint: "Soft blue with deep cyan",
    mode: "light",
    swatch: ["#f1f6f9", "#0e7490", "#4338ca"],
  },
];

const isValid = (id: string | null): id is string =>
  !!id && THEMES.some((t) => t.id === id);

/** Stored choice first, then the OS preference, then dark. */
export const resolveInitialTheme = (): string => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (isValid(stored)) return stored;
  } catch {
    /* private mode / storage disabled — fall through */
  }

  const prefersLight =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-color-scheme: light)").matches;

  return prefersLight ? DEFAULT_LIGHT : DEFAULT_DARK;
};

/* The switcher is rendered twice (navbar + drawer), so both instances
   subscribe here to stay in sync with whichever one was used. */
const listeners = new Set<(id: string) => void>();

export const subscribeTheme = (fn: (id: string) => void) => {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
};

export const applyTheme = (id: string) => {
  const root = document.documentElement;
  root.setAttribute("data-theme", id);

  try {
    localStorage.setItem(THEME_STORAGE_KEY, id);
  } catch {
    /* nothing we can do — the theme still applies for this session */
  }

  // Keep the mobile browser chrome in sync with the canvas
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    const bg = getComputedStyle(root).getPropertyValue("--bg-primary").trim();
    if (bg) meta.setAttribute("content", bg);
  }

  listeners.forEach((fn) => fn(id));
};
