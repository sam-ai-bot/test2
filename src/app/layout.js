import "@/styles/globals.css";

export const metadata = {
  title: "Chess Academy - Learn Chess from Masters | Chennai, India",
  description: "Chess Academy in Chennai, Tamil Nadu offers expert chess coaching through group classes and one-to-one sessions. Master the art of chess with our experienced instructors.",
  keywords: "chess academy, chess classes, chess coaching, learn chess, Chennai, Tamil Nadu, India, group classes, one-to-one classes, chess training",
  authors: [{ name: "Chess Academy" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Chess Academy - Learn Chess from Masters",
    description: "Master the art of chess with expert guidance. Group classes and personalized one-to-one coaching available in Chennai, India.",
    siteName: "Chess Academy",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chess Academy - Learn Chess from Masters",
    description: "Master the art of chess with expert guidance. Group classes and personalized one-to-one coaching available in Chennai, India.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
