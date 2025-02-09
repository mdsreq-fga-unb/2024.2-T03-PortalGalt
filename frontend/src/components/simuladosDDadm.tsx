"use client";

import { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

interface SimuladoDropdownProps {
  simulados: Record<string, Record<string, Record<string, boolean>>>;
  selectedSimulado: string | null;
  onSelect: (value: string | null) => void;
}

export default function SimuladoDropdownAdm({
  simulados,
  selectedSimulado,
  onSelect,
}: SimuladoDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const simuladoKeys = Object.keys(simulados);
  const filteredSimulados = ["Todos", ...simuladoKeys].filter((simulado) =>
    simulado.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (simulado: string) => {
    setIsOpen(false);
    onSelect(simulado === "Todos" ? null : simulado);
    setSearchTerm(simulado);
  };

  return (
    <div className="relative inline-flex items-center" ref={dropdownRef}>
      <span className="bg-teal-600 text-white font-medium px-4 py-2 rounded-l-lg min-w-[200px] text-center">
        Selecione um simulado:
      </span>
      <div className="relative">
        <div
          className="flex items-center bg-teal-600 text-white p-2 rounded-r-lg cursor-pointer relative w-60"
          style={{ backgroundColor: '#D9D9D9' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <input
            type="text"
            className="bg-transparent w-full text-black placeholder-grey focus:outline-none"
            placeholder="Digite o nome do simulado"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch className="w-5 h-5" />
        </div>

        {isOpen && (
          <ul
            className="absolute w-full text-black bg-gray-300 rounded max-h-96 overflow-y-auto mt-1 shadow-lg"
            style={{ backgroundColor: '#D9D9D9' }}
          >
            {filteredSimulados.length > 0 ? (
              filteredSimulados.map((simulado, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-[#EFEFEF] cursor-pointer"
                  onClick={() => handleSelect(simulado)}
                >
                  {simulado}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">Nenhum simulado encontrado</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
