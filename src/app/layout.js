import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto, Outfit } from "next/font/google";
import { InitColorSchemeScript } from "@mui/material";
import AppThemeProvider from "@/contexts/AppThemeContext";
import "./globals.css";
import { Footer, Header } from "@/components/common";

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
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider>
          <AppThemeProvider>
            <Header />
            {children}
            <Footer />
          </AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
