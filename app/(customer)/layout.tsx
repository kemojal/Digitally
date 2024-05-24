export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex flex-row min-h-screen flex-col items-center justify-center   ">
        {children}
      </main>
    </>
  );
}
