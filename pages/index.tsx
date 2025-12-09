import Footer from "./footer";
import Header from "./header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col items-center p-10">
        
        {/* Now Playing */}
        <section id="games" className="w-full max-w-4xl mb-16">
          <div className="mb-8 flex justify-center">
            <Image src="/now_playing.png" alt="Now Playing" width={300} height={80} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow cursor-pointer" 
                onClick={() => window.open("https://www.youtube.com/playlist?list=PL3qnmlzwF1YoBZWD1AD2ydwPh7WgfOrId", "_blank")}>
               <div className="w-full h-96 bg-gray-200 dark:bg-gray-800 mb-4 rounded flex items-center justify-center marquee-border">
                  <Image src="/rdr2.png" alt="Red Dead Redemption 2" width={450} height={350} />
               </div>
               <h2 className="text-xl font-semibold">
                Red Dead Redemption 2
              </h2>
            </div>

            {/* Game 2 */}
            <div className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => window.open("https://www.youtube.com/playlist?list=PL3qnmlzwF1YqyTZgwejgLGo6lgBmuymMF", "_blank")}>
               <div className="w-full h-96 bg-gray-200 dark:bg-gray-800 mb-4 rounded flex items-center justify-center marquee-border">
                  <Image src="/powerwash2.png" alt="Powerwash Simulator 2" width={250} height={350} />
               </div>
              <h2 className="text-xl font-semibold">
                Powerwash Simulator 2
              </h2>
            </div>
          </div>
        </section>

        {/* Previously */}
        <section className="w-full max-w-4xl mb-16">
          <div className="mb-8 flex justify-center">
            <Image src="/on_demand.png" alt="On Demand" width={300} height={80} />
          </div>
          <ul className="flex flex-col items-center gap-4">
            <li>
              <div className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.open("https://www.youtube.com/playlist?list=PL3qnmlzwF1YrAiocfLosqNgWiA8zu7ABQ", "_blank")}>
                <Image src="/mario.jpg" alt="Beating Mario Bros" width={300} height={200} className="mb-2 rounded" />
                <h2 className="text-lg font-semibold">
                  Beating Mario Bros
                </h2>
              </div>
            </li>
          </ul>
        </section>

      </main>

      <Footer />
    </div>
  );
}
  