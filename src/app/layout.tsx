import "./globals.css";

export const metadata = {
  title: "VyomGarud - Advanced UAV Systems",
  description: "Military-grade drone systems for defense and security applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
