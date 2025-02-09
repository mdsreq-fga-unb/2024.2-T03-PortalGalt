"use client";

import { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useCookies } from "react-cookie";

interface AlunoDropdownProps {
  selectedAluno: string | null;
  onSelect: (value: string | null) => void;
}

const mockAlunos = ["Todos","joana", "pedro", "felipe"];
export default function AlunoSimuladoDD({ selectedAluno, onSelect }: AlunoDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [cookies] = useCookies(["token_auth"]);
    const [alunos, setAlunos] = useState<string[]>([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${cookies.token_auth}`
            }
        };
        fetch("http://localhost:8000/frequenciaAPI/getAllstudents/", requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network not ok');
                }
                return response.json();
            })
            .then(data => {
                setAlunos(["Todos", ...data["lista_usuario"]]);
                console.log(data["lista_usuario"]);
            });
    }, [cookies.token_auth]);
    
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setSearchTerm(selectedAluno ?? ""); 
    }, [selectedAluno]);

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

    const filteredAlunos = Array.isArray(alunos) ? alunos.filter((aluno) =>
        aluno.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    const handleSelect = (aluno: string) => {
        setSearchTerm(aluno);
        setIsOpen(false);
        onSelect(aluno === "Todos" ? null : aluno);
    };

    return (
        <div className="relative inline-flex items-center" ref={dropdownRef}>
            <span className="bg-teal-600 text-white font-medium px-4 py-2 rounded-l-lg">
                Selecione um aluno:
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
                        placeholder="Digite o nome de um aluno"
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
                        {mockAlunos.length > 0 ? (
                            mockAlunos.map((aluno, index) => (
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
