"use client";

import { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import cookie, { useCookies } from "react-cookie";

interface AlunoDropdownProps {
  selectedAluno: string | null;
  onSelect: (value: string | null) => void;
  label?: string;
}

const mockAlunos = ["Joana", "Pedro", "Felipe", "Lucas Almeida"];
export default function AlunoDropdown({ selectedAluno, onSelect, label = "Selecione um aluno:" }: AlunoDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [cookie, setCookie] = useCookies(["token_auth"]);
    const [alunos, setAlunos] = useState<string[]>([])

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${cookie.token_auth}`
            }
        };
      fetch("http://localhost:8000/frequenciaAPI/getAllstudents/", requestOptions).then(
        response => {
          if (!response.ok) {
            throw new Error('Network not ok')
          }
          return response.json()
        }
      ).then(data => {
            setAlunos(data["lista_usuario"])
            console.log(data["lista_usuario"])
      })
    }, [cookie.token_auth]);
    
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Atualiza o campo de busca quando selectedAluno muda
  useEffect(() => {
    setSearchTerm(selectedAluno ?? ""); 
  }, [selectedAluno]);

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

  // Filtra os alunos com base no termo de pesquisa
  const filteredAlunos = Array.isArray(alunos) ? alunos.filter((aluno) =>
    aluno.toLowerCase().includes(searchTerm.toLowerCase())
  ): []

  const handleSelect = (aluno: string) => {
    setSearchTerm(aluno);
    setIsOpen(false);
    onSelect(aluno);
  };

  return (
    <div className="relative inline-flex items-center" ref={dropdownRef}>
      <span className="bg-teal-600 text-white font-medium px-4 py-2 rounded-l-lg">
        {label}
      </span>
      {/* Campo de busca */}
      <div className="relative">
        <div
          className="flex items-center bg-teal-600 text-white p-2 rounded-r-lg cursor-pointer relative w-60"
          style={{ backgroundColor: '#D9D9D9' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <input
            type="text"
            className="bg-transparent w-full text-black placeholder-grey focus:outline-none"
            placeholder="Digite o nome de um aluno"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch className="w-5 h-5" />
        </div>

        {/* Lista de alunos */}
        {isOpen && (
          <ul
            className="absolute w-full text-black bg-gray-300 rounded max-h-96 overflow-y-auto mt-1 shadow-lg"
            style={{ backgroundColor: '#D9D9D9' }}
          >
            {alunos.length > 0 ? (
              alunos.map((aluno, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-[#EFEFEF] cursor-pointer"
                  onClick={() => handleSelect(aluno)}
                >
                  {aluno}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-600">Nenhum aluno encontrado</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
