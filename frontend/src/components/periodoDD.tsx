'use client';

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import cookie, { useCookies } from "react-cookie";

interface PeriodoDropdownProps {
  onSelect: (value: string) => void;
}

const PeriodoDropdown = ({ onSelect }: PeriodoDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("select");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [turmas, setTurmas] = useState<string[]>([])
  const [cookie, setCookie] = useCookies(["token_auth"]);
  
  useEffect(() => {
    const requestOptions = {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${cookie.token_auth}`
        }
    };
  fetch("http://localhost:8000/frequenciaAPI/getAllturmas/", requestOptions).then(
    response => {
      if (!response.ok) {
        throw new Error('Network not ok')
      }
      return response.json()
    }
  ).then(data => {
        setTurmas(data["lista_turmas"])
        console.log(data["lista_turmas"])
  })    
}, [cookie.token_auth]);


  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
    setTimeout(() => onSelect(value), 0); // Chama a função passada pelo pai
  };

  return (
    <div className="relative inline-flex items-center" ref={dropdownRef}>
      <span className="bg-teal-600 text-white font-medium px-4 py-2 rounded-l-lg">
        Selecione o período:
      </span>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black px-4 py-2 rounded-r-lg flex items-center w-32 justify-between"
          style={{ backgroundColor: '#D9D9D9' }}
          type="button"
        >
          {selected}
          <ChevronDown className="w-4 h-4 ml-2 text-white"/>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-300 rounded-lg shadow-md mt-1">
            <ul key="lista" className="text-black" style={{ backgroundColor: '#D9D9D9' }}>
              {turmas.map(turma => (<li key={turma}>
                <button
                    key={turma}
                  onClick={() => handleSelect(turma)}
                  className="block w-full text-left px-4 py-2 hover:bg-[#EFEFEF]"
                >
                  {turma}
                </button>
              </li>))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PeriodoDropdown;