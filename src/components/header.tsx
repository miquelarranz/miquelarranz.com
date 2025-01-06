export const Header = () => {
  return (
    <div className="flex items-center justify-between shadow-sm p-6">
      <nav className="prose">
        <a href="/">Miquel Arranz</a>
      </nav>
      <nav className="prose prose-a:text-blue-400 prose-a:no-underline prose-a:hover:text-blue-600">
        <a href="/about/">About</a>
      </nav>
    </div>
  );
};
