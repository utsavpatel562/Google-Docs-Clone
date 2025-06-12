interface DocumentLayoutProps {
  children: React.ReactNode;
}
const DocumentLayout = ({ children }: DocumentLayoutProps) => {
  return (
    <>
      <div className="flex flex-col gap-y-4">
        <nav className="w-full bg-slate-400">Document Navbar</nav>
        {children}
      </div>
    </>
  );
};
export default DocumentLayout;
