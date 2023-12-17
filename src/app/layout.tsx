import type { Metadata } from 'next';
import '@/styles/globals.css';
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Providers } from '@/redux/providers';
import MuiTheme from '@/_lib/MuiTheme';

export const metadata: Metadata = {
  title: 'Next, MUI, Redux Toolkit, TailwindCss',
  description: 'Boilerplate for Nextjs with MUI and TailwindCss',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#004CCC" height={4} showSpinner={false} />
        <Providers>
          <MuiTheme>
            <ToastContainer />
            {children}
          </MuiTheme>
        </Providers>
      </body>
    </html>
  );
}
