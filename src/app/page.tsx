import type { ReactElement } from 'react';

import { Metadata } from 'next';
import Link from 'next/link';

import { cn } from '@/util/style.util';

export const metadata: Metadata = {
  title: 'Next.js App Router',
};

const HomePage = (): ReactElement => {
  return (
    <div className="grid h-screen w-screen place-items-center bg-gradient-to-br from-indigo-300 to-pink-200 font-mono">
      <div
        className={cn(
          'flex flex-col items-center gap-8 rounded p-32',
          'border-4 border-white bg-white/10 backdrop-blur-3xl',
          'hover:scale-110 hover:transform',
          'transition-all duration-300 ease-in-out',
        )}
      >
        <h1 className="text-9xl font-bold text-white">Hello world !</h1>

        <p className="text-4xl italic text-white">
          Template by{' '}
          <Link href="https://github.com/ctrl-plus-w" target="_blank">
            <span className="underline">Lukas Laudrain</span>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default HomePage;
