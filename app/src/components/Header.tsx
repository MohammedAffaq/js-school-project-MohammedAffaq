export default function Header({ onToggleTheme }: { onToggleTheme?: () => void }) {
  const handleClick = () => {
    onToggleTheme?.();
    const pressed = document.body.classList.contains("dark");
    // reflect pressed state for AT
    document.getElementById("theme-toggle")?.setAttribute("aria-pressed", String(pressed));
  };

  return (
    <header className="header">
      <img src="/assets/logo.png" alt="Timeline App logo" className="logo" />
      <h1 className="app-title">Timeline App</h1> {/* Added title */}
      <button id="theme-toggle" aria-pressed="false" onClick={handleClick}>
        Toggle theme
      </button>
    </header>
  );
}

