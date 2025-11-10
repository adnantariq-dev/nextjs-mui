import { Outfit } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/common";
import RootProviders from "@/providers/RootProviders";

// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-roboto",
// });
const outfit = Outfit({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata = {
  title: "Learning Creed | GenAI Virtual Assistant for Small Business Support",
  description: "This is AI virtual Assitanct for small business support.",
};

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <RootProviders>
          <Header />
          {children}
          <Footer />
        </RootProviders>
      </body>
    </html>
  );
}
