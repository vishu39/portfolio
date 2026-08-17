import { useEffect, useRef, useState } from "react";
import { BgColorsOutlined, CheckOutlined } from "@ant-design/icons";
import "./themeSwitcher.scss";
import {
  THEMES,
  applyTheme,
  resolveInitialTheme,
  subscribeTheme,
  type ThemeMode,
  type ThemeOption,
} from "../../Helper/theme";

interface ThemeSwitcherProps {
  /** "popover" for the navbar, "inline" for the mobile drawer. */
  variant?: "popover" | "inline";
  onPick?: () => void;
}

const groups: { mode: ThemeMode; label: string }[] = [
  { mode: "dark", label: "Dark" },
  { mode: "light", label: "Light" },
];

const ThemeSwitcher = ({ variant = "popover", onPick }: ThemeSwitcherProps) => {
  const [theme, setTheme] = useState<string>(() => resolveInitialTheme());
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Keep the navbar and drawer copies of the switcher in sync
  useEffect(() => subscribeTheme(setTheme), []);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const choose = (id: string) => {
    setTheme(id);
    setOpen(false);
    onPick?.();
  };

  const renderOption = (t: ThemeOption) => (
    <button
      key={t.id}
      className={`theme-option ${theme === t.id ? "active" : ""}`}
      onClick={() => choose(t.id)}
      aria-pressed={theme === t.id}
    >
      <span className="theme-swatch" aria-hidden="true">
        {t.swatch.map((c) => (
          <i key={c} style={{ background: c }} />
        ))}
      </span>
      <span className="theme-meta">
        <span className="theme-name">{t.name}</span>
        <span className="theme-hint">{t.hint}</span>
      </span>
      {theme === t.id && <CheckOutlined className="theme-check" />}
    </button>
  );

  const list = (
    <div className="theme-list">
      {groups.map((g) => (
        <div key={g.mode} className="theme-group">
          <span className="theme-group-label">{g.label}</span>
          {THEMES.filter((t) => t.mode === g.mode).map(renderOption)}
        </div>
      ))}
    </div>
  );

  if (variant === "inline") {
    return (
      <div className="theme-switcher inline" ref={wrapRef}>
        {list}
      </div>
    );
  }

  return (
    <div className="theme-switcher" ref={wrapRef}>
      <button
        className={`theme-trigger ${open ? "open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Change colour theme"
        title="Change colour theme"
      >
        <BgColorsOutlined />
      </button>

      {open && <div className="theme-panel">{list}</div>}
    </div>
  );
};

export default ThemeSwitcher;
