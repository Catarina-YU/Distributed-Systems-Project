import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gerenciador de Tarefas",
  description: "Sistema distribuído",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className="
          antialiased
          min-h-screen
          bg-gradient-to-br from-purple-700 to-purple-900
          flex
          justify-center
        "
      >
        {children}
      </body>
    </html>
  );
}
