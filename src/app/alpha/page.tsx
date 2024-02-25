import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-12 gap-4">
      <div className="relative flex flex-col gap-6 w-full">
        <article className="scale-100 hover:scale-105 transition-all">
          <Link href="/">
            <h2>Some Article</h2>
            <p className="text-[13px]">January, 10th, 2024</p>
            <p className="mt-2">Test description</p>
          </Link>

        </article>
        <article className="scale-100 hover:scale-105 transition-all">
          <Link href="/">
            <h2>Some Article</h2>
            <p className="text-[13px]">January, 10th, 2024</p>
            <p className="mt-2">Test description</p>
          </Link>

        </article>
      </div>
    </main>
  );
}
