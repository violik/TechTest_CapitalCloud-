import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { MainMenu } from '@/components/ux/mainMenu';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Tech test',
  description: 'Investhub poc',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='m-auto'>
          {/*           <MainMenu />
           */}{' '}
        </div>
        <main className='pt-6'>{children}</main>
      </body>
    </html>
  );
}
