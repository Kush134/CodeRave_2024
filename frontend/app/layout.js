import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"), {
    ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), {
    ssr: false,
});

const Blurs = dynamic(() => import("@/components/Blurs"), {
    ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "StudyShore",
    description: "AI Study Tool",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <Blurs />
                <div>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
