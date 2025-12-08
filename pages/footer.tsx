import { FaYoutube, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";

export default function Footer() {
    return (
      <footer id="socials" className="p-10 border-t border-gray-200 dark:border-gray-800">
        <div className="flex justify-center gap-8">
            <a href="https://www.youtube.com/@rwrightDev" className="text-blue-500 hover:text-blue-700" aria-label="YouTube">
                <FaYoutube size={30} />
            </a>
            <a href="https://x.com/rwrightDev" className="text-blue-500 hover:text-blue-700" aria-label="X">
                <FaXTwitter size={30} />
            </a>
            <a href="https://www.instagram.com/rwrightdev/" className="text-blue-500 hover:text-blue-700" aria-label="Instagram">
                <FaInstagram size={30} />
            </a>
            <a href="https://bsky.app/profile/rwrightdev.bsky.social" className="text-blue-500 hover:text-blue-700" aria-label="Bluesky">
                <SiBluesky size={30} />
            </a>
            <a href="https://www.tiktok.com/@rwrightdev" className="text-blue-500 hover:text-blue-700" aria-label="TikTok">
                <FaTiktok size={30} />
            </a>
        </div>
      </footer>
    );
}