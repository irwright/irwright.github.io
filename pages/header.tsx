import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
      <header className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center">
           {/* Logo */}
           <div className="relative h-12 w-12 mr-4">
              <Image src="/logo.png" alt="Logo" fill className="object-contain dark:hidden" />
              <Image src="/logo.png" alt="Logo" fill className="object-contain hidden dark:block" />
           </div>
        </div>
        
        {/* Title */}
        <h1 className="text-3xl font-bold absolute left-1/2 transform -translate-x-1/2">Robby Wright</h1>

        {/* Navigation */}
        <nav className="flex gap-6">
          <Link href="/" className="hover:underline">Games</Link>
          <Link href="/about" className="hover:underline">About</Link>
        </nav>
      </header>
    );
} 