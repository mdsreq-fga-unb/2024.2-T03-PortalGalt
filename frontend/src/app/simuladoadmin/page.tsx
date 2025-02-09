"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import { useCookies } from "react-cookie";
import SimuladoDropdownAdm from "@/components/simuladosDDadm";
import AlunoSimuladoDD from "@/components/alunosSimuladoDD";

const mockSimulados: Record<string, Record<string, Record<string, boolean>>> = {
    "Simulado 1": {
        "joana": { "q1": true, "q2": false, "q3": true, "q4": false, "q5": true, "q6": false, "q7": true, "q8": false, "q9": true, "q10": false, "q11": true, "q12": false },
        "pedro": { "q1": false, "q2": true, "q3": false, "q4": true, "q5": false, "q6": true, "q7": false, "q8": true, "q9": false, "q10": true, "q11": false, "q12": true },
        "felipe": { "q1": true, "q2": true, "q3": false, "q4": true, "q5": true, "q6": true, "q7": true, "q8": false, "q9": false, "q10": false, "q11": true, "q12": true }
    },
    "Simulado 2": {
        "joana": { "q1": false, "q2": true, "q3": false, "q4": true, "q5": false, "q6": true, "q7": false, "q8": true, "q9": false, "q10": true, "q11": false, "q12": true },
        "pedro": { "q1": true, "q2": false, "q3": true, "q4": false, "q5": true, "q6": false, "q7": true, "q8": false, "q9": true, "q10": false, "q11": true, "q12": false },
        "felipe": { "q1": true, "q2": true, "q3": true, "q4": true, "q5": true, "q6": true, "q7": true, "q8": true, "q9": true, "q10": true, "q11": true, "q12": true }
    }
};

export default function SimuladosAdmin() {
    const [selectedAluno, setSelectedAluno] = useState<string | null>(null);
    const [selectedSimulado, setSelectedSimulado] = useState<string | null>(null);
    const [cookie] = useCookies(["token_auth"]);
    const [simulados, setSimulados] = useState<Record<string, Record<string, Record<string, boolean>>>> ({})

    // useEffect(() => {
    //     if (selectedAluno || selectedSimulado) {
    //         const requestOptions = {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Token ${cookie.token_auth}`,
    //             },
    //         };
    //         fetch(`http://localhost:8000/simulado/getNota/${selectedAluno}/${selectedSimulado}`, requestOptions)
    //             .then(response => {
    //                 if (!response.ok) {
    //                     throw new Error("Erro na requisição");
    //                 }
    //                 return response.json();
    //             })
    //             .then(data => {
    //                 console.log("aeee Dados recebidos:", data);
    //             })
    //             .catch(error => {
    //                 console.error("Erro ao buscar simulados:", error);
    //             });
    //     }
    // }, [selectedAluno, selectedSimulado]);

    useEffect(() =>{
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${cookie.token_auth}`,
                },
            };
            fetch(`http://localhost:8000/simulado/getListSimulados/`, requestOptions)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("Erro na requisição");
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log("Dados recebidos:", data);
                        setSimulados(data["lista_simulados"])
                    })
                    .catch(error => {
                        console.error("Erro ao buscar simulados:", error);
                    });
        
    }, [])

    // Filtro para mostrar apenas os dados certos conforme a seleção
    const getFilteredResults = () => {
        if (selectedSimulado && selectedAluno) {
            return simulados[selectedSimulado]?.[selectedAluno] || null;
        }
        if (selectedSimulado) {
            return simulados[selectedSimulado];
        }
        if (selectedAluno) {
            const alunoData: Record<string, Record<string, boolean>> = {};
            for (const simulado in simulados) {
                if (simulados[simulado][selectedAluno]) {
                    alunoData[simulado] = simulados[simulado][selectedAluno];
                }
            }
            return alunoData;
        }
        return null;
    };

    const filteredResults = getFilteredResults();

    const calculaNota = (resultados: Record<string, boolean>) => Object.values(resultados).filter(Boolean).length;
    const totalQuestoes = (resultados: Record<string, boolean>) => Object.keys(resultados).length;

    return (
        <div className="min-h-screen bg-gray-100">
            <Header isadmin />
            <div className="max-w-6xl mx-auto p-4">
                <div className="flex justify-center gap-4 mb-4">
                    <AlunoSimuladoDD selectedAluno={selectedAluno} onSelect={setSelectedAluno} />
                    <SimuladoDropdownAdm simulados={mockSimulados} selectedSimulado={selectedSimulado} onSelect={setSelectedSimulado} />
                </div>

                {filteredResults && (
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        {selectedSimulado && selectedAluno ? (
                            <>
                                <h2 className="text-xl text-black font-semibold">
                                    Simulado: {selectedSimulado} - Aluno: {selectedAluno}
                                </h2>
                                <p className="font-bold text-black">Nota: {calculaNota(filteredResults)} / {totalQuestoes(filteredResults)}</p>
                                <p className="font-bold text-black">Porcentagem de Acerto: {((calculaNota(filteredResults) / totalQuestoes(filteredResults)) * 100).toFixed(2)}%</p>
                            </>
                        ) : selectedSimulado ? (
                            <>
                                <h2 className="text-xl text-black font-semibold">Simulado: {selectedSimulado}</h2>
                                {Object.entries(filteredResults).map(([aluno, respostas]) => (
                                    <div key={aluno} className="mt-4">
                                        <p className="font-bold text-black">{aluno}:</p>
                                        <p className="font-bold text-black">Nota: {calculaNota(respostas)} / {totalQuestoes(respostas)}</p>
                                        <p className="font-bold text-black">Porcentagem de Acerto: {((calculaNota(respostas) / totalQuestoes(respostas)) * 100).toFixed(2)}%</p>
                                    </div>
                                ))}
                            </>
                        ) : (
                            Object.entries(filteredResults).map(([simulado, respostas]) => (
                                <div key={simulado} className="mt-4">
                                    <h2 className="text-xl text-black font-semibold">Simulado: {simulado}</h2>
                                    <p className="font-bold text-black">Aluno :</p>
                                    <p className="font-bold text-black">Nota: </p>
                                    <p className="font-bold text-black">Porcentagem de Acerto:</p>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
