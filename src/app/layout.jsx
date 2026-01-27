import "../styles/global.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ToastProvider from "@/components/ToastProvider";
import site from "@/data/site.json";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
