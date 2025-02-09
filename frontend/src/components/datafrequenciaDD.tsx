"use client";

import { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import cookie, { useCookies } from "react-cookie";

interface DataFrequenciaDropdownProps {
  selectedData: string | null;
  onSelect: (value: string | null) => void;
}

export default function DataFrequenciaDropdown({ selectedData, onSelect }: DataFrequenciaDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cookie, setCookie] = useCookies(["token_auth"]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [datas, setDatas] = useState<string[]>([])

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${cookie.token_auth}`
            }
        };
      fetch("http://localhost:8000/frequenciaAPI/getAlldates/", requestOptions).then(
        response => {
          if (!response.ok) {
            throw new Error('Network not ok')
          }
          return response.json()
        }
      ).then(data => {
            setDatas(data["lista_datas"])
            console.log(data["lista_datas"])
      })    
    }, [cookie.token_auth]);

  // Atualiza o campo de busca quando selectedData muda
  useEffect(() => {
    setSearchTerm(selectedData ?? "");
  }, [selectedData]);

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

  // Filtra as datas com base no termo de pesquisa
  const filteredDatas = datas.filter((data) =>
    data.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative inline-flex items-center" ref={dropdownRef}>
      <span className="bg-teal-600 text-white  font-medium px-4 py-2 rounded-l-lg">
        Selecione uma data:
      </span>
      {/* Campo de busca */}
      <div className="relative">
        <div
          className="flex items-center bg-teal-600 text-white p-2 rounded-r-lg cursor-pointer relative w-40"
          style={{ backgroundColor: "#D9D9D9" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <input
            type="text"
            className="bg-transparent w-full text-black placeholder-grey focus:outline-none"
            placeholder="Digite uma data"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch className="w-5 h-5" />
        </div>

        {/* Lista de datas */}
        {isOpen && (
          <ul
            className="absolute w-full text-black bg-gray-300 rounded max-h-96 overflow-y-auto mt-1 shadow-lg"
            style={{ backgroundColor: "#D9D9D9" }}
          >
            {filteredDatas.length > 0 ? (
              filteredDatas.map((data, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-[#EFEFEF] cursor-pointer"
                  onClick={() => {
                    setSearchTerm(data);
                    setIsOpen(false);
                    onSelect(data); // Chama a função passada como prop
                  }}
                >
                  {data}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-600">Nenhuma data encontrada</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}