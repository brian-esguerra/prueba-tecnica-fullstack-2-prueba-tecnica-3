import type { ReactNode } from 'react';
import './layout.css';

interface LayoutProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function LayoutColumn({ id, title, subtitle, children }: LayoutProps) {
  return (
    <>
      <div id={id} className="layout">
        <div className="layout__horizontal h-screen mx-auto">
          <div className="flex justify-center flex-1">
            <div className="w-10/12 md:w-6/12 xl:w-6/12 p-4 sm:p-8 mt-22 backdrop-blur-sm rounded-lg bg-white/80 ">
              <div className="mt-2 flex flex-col items-center">
                <h2 className="text-2xl xl:text-3xl font-semibold">
                    {title}
                </h2>
                <hr className="mt-4 border border-gray-400 w-full" />
              </div>
              <div className="mx-auto max-w-sm mt-10">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}