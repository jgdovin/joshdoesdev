import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <Link href="/">To Home</Link>
      <div><Button variant="default">Test</Button></div>
    </main>
  );
}
