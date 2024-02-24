import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/alpha">To Alpha Page</Link>
      <Image src="/under_construction.webp" width={800} height={800} alt="Under Construction!" />
    </main>
  );
}
