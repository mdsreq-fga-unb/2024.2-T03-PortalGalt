'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface isadmin {
  isadmin?: boolean;
}

export default function Header({ isadmin }: isadmin) {
  const [navBar, setNavBar] = useState(false);
  const [activePath, setActivePath] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleNavLinkClick = () => {
    setNavBar(false);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActivePath(window.location.pathname);
    }
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout); // Cancela o fechamento se o mouse voltar
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowDropdown(false);
    }, 300); // Tempo mínimo antes de fechar (300ms)
    setCloseTimeout(timeout);
  };

  return (
    <header className="w-full h-[100px] bg-teal-600 z-50 relative">
      <div className="w-full h-full px-[35px] mx-auto flex justify-between items-center">
        <div className="flex items-center w-[30%]">
          <div className="mx-2">
            <Link href={isadmin ? '/homeadmin' : '/home'}>
              <Image src="/assets/Galt.png" alt="logo" width={200} height={200} />
            </Link>
          </div>
        </div>
        <div
          className={`fixed top-0 right-0 h-full w-1/3 transition-transform transform duration-300
            ${navBar ? 'translate-x-0' : 'translate-x-full'} md:static md:translate-x-0 md:w-[50%] md:flex md:justify-between md:items-center z-50`}
        >
          <div className={`flex flex-col w-full h-full md:h-auto ${navBar && 'mt-10'}`}>
            <ul className="w-full flex flex-col md:flex-row justify-center md:justify-between text-white font-extrabold mt-16 md:mt-0">
              <li className="w-full md:w-[30%] flex justify-left ml-2 text-lg">
                <Link href={isadmin ? '/homeadmin' : '/home'}>
                  <button
                    className={`flex justify-center border-b-2 border-transparent transition duration-500 hover:border-b-white py-2 md:py-0 ${
                      window.location.pathname === '/homeadmin' ? 'font-bold border-b-white' : 'font-normal'
                    }`}
                    onClick={handleNavLinkClick}
                  >
                    HOME
                  </button>
                </Link>
              </li>
             <li className="w-full md:w-[30%] flex justify-left ml-2 text-lg">
                <Link href="/enviosimulado">
                  <button
                    className={`flex justify-center border-b-2 border-transparent transition duration-500 hover:border-white py-2 md:py-0 ${
                      window.location.pathname === '/enviosimulado' ? 'font-bold border-b-white' : 'font-normal'
                    }`}
                    onClick={handleNavLinkClick}
                  >
                    ADICIONAR<br/>SIMULADO
                  </button>
                </Link>
                </li>
              <li className="w-full md:w-[30%] flex justify-left ml-2 text-lg">
                <Link href="/simuladoadmin">
                  <button
                    className={`flex justify-center border-b-2 border-transparent transition duration-500 hover:border-b-white py-2 md:py-0 ${
                      window.location.pathname === '/simuladoadmin' ? 'font-bold border-b-white' : 'font-normal'
                    }`}
                    onClick={handleNavLinkClick}
                  >
                    SIMULADOS
                  </button>
                </Link>
              </li>
              <li className="w-full md:w-[30%] flex justify-left ml-2 text-lg">
                <Link href={isadmin ? '/frequenciaadmin' : '/frequenciaaluno'}>
                  <button
                    className={`flex justify-center border-b-2 border-transparent transition duration-500 hover:border-b-white py-2 md:py-0 ${
                      window.location.pathname === '/frequenciaadmin' ? 'font-bold border-b-white' : 'font-normal'
                    }`}
                    onClick={handleNavLinkClick}
                  >
                    FREQUÊNCIA
                  </button>
                </Link>
              </li>
            </ul>
            :
            <ul className="w-full flex flex-col md:flex-row justify-center md:justify-between text-white font-extrabold mt-16 md:mt-0">
              <li className="w-full md:w-[30%] flex justify-left ml-2 text-lg ">
               <Link href="/home">
                 <button
                   className={`flex justify-center border-b-2 border-transparent transition duration-500 hover:border-b-white py-2 md:py-0 ${
                     window.location.pathname === '/home' ? 'font-bold border-b-white' : 'font-normal'
                   }`}
                   onClick={handleNavLinkClick}
                 >
                   HOME
                 </button>
               </Link>
             </li>
             <li className="w-full md:w-[30%] flex justify-left ml-2 text-lg">
               <Link href="/simuladoaluno">
                 <button
                   className={`flex justify-center border-b-2 border-transparent transition duration-500 hover:border-b-white py-2 md:py-0 ${
                     window.location.pathname === '/simuladoaluno' ? 'font-bold border-b-white' : 'font-normal'
                   }`}
                   onClick={handleNavLinkClick}
                 >
                   SIMULADOS
                 </button>
               </Link>
             </li>
             <li className="w-full md:w-[30%] flex justify-left ml-2 text-lg">
               <Link href="/frequenciaaluno">
                 <button
                   className={`flex justify-center border-b-2 border-transparent transition duration-500 hover:border-b-white py-2 md:py-0 ${
                     window.location.pathname === '/frequenciaaluno' ? 'font-bold border-b-white' : 'font-normal'
                   }`}
                   onClick={handleNavLinkClick}
                 >
                   FREQUÊNCIA
                 </button>
               </Link>
             </li>
           </ul>
           }
          </div>
        </div>
      </div>
      {navBar && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40" onClick={() => setNavBar(false)} />
      )}
    </header>
  );
}
