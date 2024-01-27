import "./globals.css";

export const metadata = {
  title: "Fruity",
  description:
    "Welcome to the Animated Cold Drinks Showcase, a visually captivating web experience that combines the power of Three.js, Next.js, and Framer Motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
