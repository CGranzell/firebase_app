import Nav from '@/components/Nav';
import './globals.css';
import { Montserrat } from '@next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
