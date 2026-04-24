import "../styles/global.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ToastProvider from "@/components/ToastProvider";
import site from "@/data/site.json";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const metadata = {
  title: site.name,
  description: site.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider />
        <Header />
        <ScrollToTop />
        {children}
        <a
  href="https://wa.me/+916300296581"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-[9999] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-6 h-6 fill-current"
  >
    <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.3 31.7l8-2.1c2.3 1.3 4.9 2 7.7 2h.1c8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.7c-2.4 0-4.7-.7-6.7-1.9l-.5-.3-4.7 1.2 1.3-4.6-.3-.5c-1.3-2-2-4.3-2-6.7C3.1 8.6 8.6 3.1 16 3.1s12.9 5.5 12.9 12.9S23.4 29.1 16 29.1zm7.1-9.7c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.9.2s-1 1.2-1.2 1.4c-.2.2-.4.3-.8.1s-1.6-.6-3-1.9c-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.2-.4.3-.6.1-.2 0-.5-.1-.7-.1-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .4-.3.3-1.3 1.3-1.3 3.2s1.3 3.7 1.5 4c.2.3 2.5 3.8 6.1 5.3.9.4 1.6.6 2.2.8.9.3 1.8.3 2.4.2.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5z" />
  </svg>
</a>
        <Footer />
      </body>
    </html>
  );
}
