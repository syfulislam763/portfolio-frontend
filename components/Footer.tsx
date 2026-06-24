export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 px-6 py-8 sm:flex-row bg-[#ded7e9]">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Syful. 
        </p>
        <p className="font-mono text-xs text-muted">All rights reserved.</p>
      </div>
    </footer>
  );
}
