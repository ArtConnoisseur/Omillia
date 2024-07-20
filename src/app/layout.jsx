import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/Theme/theme-provider';
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const dm_sans = DM_Sans({
  variable: '--font-dmsans',
  subsets: ['latin']
});

export const metadata = {
  title: "Omillia",
  description: "Video calling app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dm_sans.className}>
      <ClerkProvider
        appearance={{
          variables: {
            colorPrimary: "#0062ff",
          }
        }}
      >
        <body className='bg-background text-foreground'>
          <ThemeProvider>
              {children}
          </ThemeProvider>
        </body>
    </ClerkProvider>
    <Script src="https://kit.fontawesome.com/b8d18904b7.js" crossorigin="anonymous"></Script>
  </html>
  );
}
