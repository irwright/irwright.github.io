import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-items-start p-24">
      <h1 className="text-3xl font-bold antialiased md:subpixel-antialiased">
        irwright
      </h1>
      <p className="text-lg pt-10"> 
        About Me 
      </p>
      <p className="text-m pt-4"> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime enim illum tempore, animi itaque distinctio at nesciunt dolore voluptas cupiditate. Quaerat odit aliquid neque. Quis blanditiis excepturi vero quisquam quam?
      </p>
    </main>
  );
}
