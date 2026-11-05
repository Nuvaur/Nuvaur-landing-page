import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import "@/app/globals.css";
import Footer from "@/components/sections/footer/Footer";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "NUVAUR — A Simpler Way to Own and Build in Gold",
  description:
    "NUVAUR helps Nigerians buy, build, track and sell gold through a simple, transparent digital experience.",
  openGraph: {
    title: "NUVAUR — A Simpler Way to Own and Build in Gold",
    description: "Digital gold ownership and savings platform for Nigeria.",
    type: "website",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable}`}
    >
      <body className="bg-obsidian text-ivory font-sans antialiased selection:bg-gold selection:text-obsidian">
        {/* Render Header globally across pages */}
        <Header />

        {/* Main page content */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
