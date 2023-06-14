import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-blue-600">
      <div className="mx-auto px-4 h-14 max-w-[1080px] text-white flex items-center justify-between">
        <Link href="/" className="text-lg">
          Blog Example
        </Link>
      </div>
    </div>
  );
}
