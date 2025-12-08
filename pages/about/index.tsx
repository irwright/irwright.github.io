import Footer from "../footer";
import Header from "../header";

export default function Home() {
    return (
      <>
        <Header />
        <main className="flex min-h-screen flex-col justify-items-start p-24">
          <h1 className="text-3xl font-bold antialiased md:subpixel-antialiased">
            <img className="h-48 hidden dark:block" src="logo.png" />
            <img className="h-48 block dark:hidden" src="logo.png" />
          </h1>
          <p className="text-lg pt-10"> 
            About Me 
          </p>
          <p className="text-m pt-4"> 
              I am a software developer of 20 years. Now I am working on making fun videos, mostly gaming related. I post on YouTube long videos every Monday, Wednesday, and Friday, and short videos on TikTok, Instagram, and YouTube Shorts daily.
          </p>
        </main>
        <Footer />
      </>
    );
  }
  