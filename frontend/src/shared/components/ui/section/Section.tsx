import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  textButton?: string;
  linkButton?: string;
  children: ReactNode;
}

export default function Section({ id, title, subtitle, textButton, linkButton, children }: SectionProps) {
  let showTitle = title == null ? 'container__no_title' : 'container__full';
  return (
    <>
      <section id={id} className={`${showTitle}`}>
        <div className="max-w-6xl px-8 mx-auto xl:px-5 py-12">
          <div className="flex justify-between items-center">
            <div className="text-left">
              <h2 className="text-2xl text-gray-800 font-medium mb-2">
                {title}
              </h2>
            </div>
            {textButton && (
              <a href={linkButton} className="flex items-center w-full px-6 py-2 mb-3 text-md text-white bg-[#0099aa] rounded-md sm:mb-0 hover:bg-[#00b7cb] sm:w-auto">
                {textButton}
              </a>
            )}
          </div>

          <div>
            {subtitle && (
              <p className="text-lg w-[80%] text-gray-700 mb-8">{subtitle}</p>
            )}
          </div>
          
          <div className="">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}