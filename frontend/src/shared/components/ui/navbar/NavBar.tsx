"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between h-16">
          
          {/* LOGO */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-10 w-auto"
                src="/icon-96.png"
                alt="Logo"
              />
              <span className="ml-2 text-xl font-bold text-gray-800">
                Nexus
              </span>
            </Link>
            </div>

            {/* NAV LINKS (Desktop) */}
            <div className="hidden lg:px-auto md:flex md:space-x-8">
              <Link
                href="/"
                className="border-[#0099aa] text-[#0099aa] inline-flex items-center px-1 pt-1 border-b-3 text-md font-medium"
              >
                Home
              </Link>

              <Link
                href="/courses"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-3 text-md font-regular"
              >
                Cursos
              </Link>

              <Link
                href="/services"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-3 text-md font-regular"
              >
                Servicios
              </Link>

              <Link
                href="/contact"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-3 text-md font-regular"
              >
                Contacto
              </Link>
            </div>
          

          {/* RIGHT SIDE (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link
              href="/login"
              className="bg-[#0099aa] px-4 py-2 rounded-md text-white text-sm font-medium hover:bg-[#00b7cb]"
            >
              Sign In
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/home" className="block pl-3 pr-4 py-2 text-base font-medium hover:bg-gray-50">
              Home
            </Link>
            <Link href="/courses" className="block pl-3 pr-4 py-2 text-base font-medium hover:bg-gray-50">
              Cursos
            </Link>
            <Link href="/services" className="block pl-3 pr-4 py-2 text-base font-medium hover:bg-gray-50">
              Servicios
            </Link>
            <Link href="/contact" className="block pl-3 pr-4 py-2 text-base font-medium hover:bg-gray-50">
              Contacto
            </Link>
          </div>

          <div className="pt-4 pb-3 border-t border-gray-200 px-4">
            <Link
              href="/register"
              className="block w-full bg-indigo-600 px-4 py-2 rounded-md text-white text-center text-sm font-medium hover:bg-indigo-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
