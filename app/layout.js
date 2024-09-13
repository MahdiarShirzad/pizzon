import { Footer } from "./_components/footer/page";
import { Header } from "./_components/header/page";

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
