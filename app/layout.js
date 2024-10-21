import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

import "@/styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <main>
          <Header />
          <section>{children}</section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
