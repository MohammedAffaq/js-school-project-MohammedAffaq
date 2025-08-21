type HeaderProps = {
  onToggleTheme?: () => void;
};

export default function Header({ onToggleTheme }: HeaderProps) {
  return (
    <header>
      <img src="/assets/logo.png" alt="App Logo" className="logo" />
      <button id="theme-toggle" onClick={onToggleTheme}>Theme toggle</button>
    </header>
  );
}
