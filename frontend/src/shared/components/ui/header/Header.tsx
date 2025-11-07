"use client";
import { RiArrowRightLine } from 'react-icons/ri';
// import useDocumentTitle from '../../../hooks/Title';

interface HeaderProps {
  title: string;
  isInitial: boolean;
  current?: string;
}

export default function Header({title ,current}: HeaderProps) {
  let pageTitle = title  + ' - ' + current;  
  // useDocumentTitle(pageTitle);
  
  return (
    <section class="px-2 py-32 bg-white md:px-0">
    <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
      <div class="flex flex-wrap items-center sm:-mx-3">
        <div class="w-full md:w-1/2 md:px-3">
          <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
            <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
              <span class="block lg:inline">Aprende sin límites.</span>
              <br />
              <span class="block text-[#0099aa] lg:inline">Crece con nosotros.</span>
            </h1>
            <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Accede a cursos diseñados por profesionales y expertos en la industria. Mejora tus habilidades, avanza en tu carrera y alcanza tus metas con una experiencia de aprendizaje moderna y accesible.</p>
            <div class="relative flex flex-col sm:flex-row sm:space-x-4">
              <a href="/register" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-[#0099aa] rounded-md sm:mb-0 hover:bg-[#00b7cb] sm:w-auto">
                Registrate
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="#_" class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
              <img src="https://images.unsplash.com/photo-1714976326715-96d4a22f8da8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032" />
            </div>
        </div>
      </div>
    </div>
  </section>
  )
}