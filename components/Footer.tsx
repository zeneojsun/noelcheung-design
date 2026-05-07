export default function Footer() {
  return (
    <footer className="max-w-site mx-auto px-5 sm:px-6 py-8 sm:py-16 border-t border-rule mt-2">
      <p className="text-[13px] text-muted-2">
        © {new Date().getFullYear()} Noel Cheung / Human For Human 合同会社 · Fukuoka, Japan
      </p>
    </footer>
  );
}
