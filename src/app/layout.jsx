import "../styles/global.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ToastProvider from "@/components/ToastProvider";
import site from "@/data/site.json";
import ScrollToTop from "@/components/layout/ScrollToTop";
import PopupModal from "@/components/PopupModal";

export const metadata = {
  title: site.name,
  description: site.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider />

        {/* Popup */}
        <PopupModal />

        <Header />

        <ScrollToTop />

        {children}

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+916300296581"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-[9999] rounded-full bg-green-500 p-4 text-white shadow-lg transition duration-300 hover:bg-green-600"
        >
          WhatsApp
        </a>

        <Footer />
      </body>
    </html>
  );
}