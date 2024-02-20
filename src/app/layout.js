import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Benjamín - Portafolio Web Site",
  description: "Explora mi portafolio web para descubrir una amplia variedad de trabajos que abarcan desde diseño hasta desarrollo full-stack. Sumérgete en proyectos creativos y funcionales que destacan mi experiencia y habilidades en el mundo digital.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
