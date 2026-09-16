import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/sharedComponent/Header";
import Footer from "@/sharedComponent/Footer";
import { ExpertModalProvider } from "@/components/ExpertModalContext";
import { ToastContainer } from "react-toastify";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "HarGharSolar | Go Solar At Zero Investment",
  description:
    "Save up to 90% on electricity bills with government subsidy and easy EMI. Book a free rooftop solar consultation with HarGharSolar.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-white font-sans text-ink">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover className="mt-16" />
          <ExpertModalProvider>
            <Header />
            {children}
            <Footer />
          </ExpertModalProvider>
      </body>
    </html>
  );
}
