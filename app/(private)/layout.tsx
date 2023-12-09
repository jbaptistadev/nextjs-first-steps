import { NavBar } from '@/components';

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex flex-col items-center text-5xl pt-24">
        {children}
      </main>
    </>
  );
}
