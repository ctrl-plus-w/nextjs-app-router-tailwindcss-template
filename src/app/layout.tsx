import { ReactNode } from 'react';

import '@/style/globals.css';

interface IProps {
  children?: ReactNode;
}

const RootLayout = ({ children }: IProps) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
