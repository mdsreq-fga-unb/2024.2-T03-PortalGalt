"use client";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import SimuladoDropdown from "@/components/simuladosDD";
import { useCookies } from "react-cookie";
import SimuladoDropdownAdm from "@/components/simuladosDDadm";
import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Line } from "recharts";

const mockSimulados: Record<string, Record<string, Record<string, boolean>>> = {
    "Simulado 1": {
        "Lucas Oliveira": { "q1": false, "q2": true, "q3": false, "q4": true, "q5": false, "q6": true, "q7": false, "q8": true, "q9": false, "q10": true, "q11": false, "q12": true },
    },
    "Simulado 2": {
        "Lucas Oliveira": { "q1": true, "q2": true, "q3": true, "q4": false, "q5": true, "q6": true, "q7": true, "q8": false, "q9": true, "q10": false, "q11": true, "q12": false },
    },
    "Simulado 3": {
        "Lucas Oliveira": { "q1": false, "q2": false, "q3": false, "q4": false, "q5": false, "q6": false, "q7": false, "q8": false, "q9": true, "q10": false, "q11": true, "q12": false },
    },
    "Simulado 4": {
        "Lucas Oliveira": { "q1": true, "q2": true, "q3": true, "q4": true, "q5": true, "q6": true, "q7": true, "q8": true, "q9": true, "q10": true, "q11": true, "q12": true, "q13": true },
    }
};



export default function SimuladosAluno() {
    const [selectedSimulado, setSelectedSimulado] = useState<string | null>(null);
    const [simulados, setSimulados] = useState(mockSimulados);
    const [cookie, setCookie] = useCookies(["token_auth"]);
    const [selectedAluno, setSelectedAluno] = useState("Lucas Oliveira");

    useEffect(() => {
        if (!cookie.token_auth) return;

        const fetchSimulados = async () => {
            try {
                const response = await fetch(`http://localhost:8000/simulado/getListSimulados/${selectedAluno}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Token ${cookie.token_auth}`,
                    },
                });

                if (!response.ok) throw new Error("Erro na requisição");
                const data = await response.json();
                setSimulados(data.lista_simulados);
            } catch (error) {
                console.error("Erro ao buscar simulados:", error);
            }
        };

        fetchSimulados();
    }, [cookie.token_auth]);

    const processarDadosGrafico = (
        simulados: Record<string, Record<string, Record<string, boolean>>>,
        aluno: string
    ): { nome: string, nota: number }[] => {
        return Object.entries(simulados).map(([nomeSimulado, alunos]) => {
            const respostas = alunos[aluno] || {};
            const totalQuestoes = Object.keys(respostas).length;
            const notaTotal = Object.values(respostas).filter(acerto => acerto).length;
            const acertos = parseFloat(((notaTotal / totalQuestoes) * 100).toFixed(2));
            return { nome: nomeSimulado, nota: acertos };
        });
    };

    const dadosGrafico = processarDadosGrafico(simulados, selectedAluno);
    return (
        <main className="min-h-screen w-full bg-gray-100">
            <Header />
            <div className="w-[90%] mx-auto p-4">
                <div className="flex justify-center gap-4 mb-4">
                    <SimuladoDropdownAdm simulados={simulados} selectedSimulado={selectedSimulado} onSelect={setSelectedSimulado} />
                </div>
                <div className="flex gap-4 w-full justify-center">
                    <div className="space-y-6 w-full md:w-[75%]">
                        {(selectedSimulado ? [selectedSimulado] : Object.keys(simulados)).map((simulado, index) => {
                            const totalQuestoes = Object.keys(simulados[simulado][selectedAluno] || {}).length;
                            console.log(totalQuestoes)
                            const acertos = Object.values(simulados[simulado][selectedAluno] || {}).filter(Boolean).length;
                            return (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <h2 className="text-xl text-black font-semibold">{simulado}</h2>
                                    <p className="text-lg text-gray-700 font-bold mt-2">Acertos: {acertos}/{totalQuestoes}</p>
                                    <div className="grid grid-cols-4 gap-4 mt-4">
                                        {simulados[simulado] && Object.entries(simulados[simulado][selectedAluno] || {}).map(([questao, acerto], idx) => (
                                            <div key={idx} className={`text-center text-black font-medium p-3 rounded-lg ${acerto ? 'bg-green-200' : 'bg-red-200'}`}>
                                                <p className="font-semibold">{questao.toUpperCase()}</p>
                                                <p className="text-lg font-bold">{acerto ? '✔️' : '❌'}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md items-center justify-center text-center w-full md:w-[75%] h-full">
                        <h1 className="font-bold text-[2em] text-main_color text-black">Gráfico de Desempenho Total</h1>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={dadosGrafico}>
                                <XAxis dataKey="nome" stroke="black" />

                                {/* Personaliza o eixo Y para exibir "%" */}
                                <YAxis
                                    domain={[0, 100]}
                                    stroke="black"
                                    tickFormatter={(tick) => `${tick}%`}
                                    ticks={[0, 20, 40, 60, 80, 100]}
                                />

                                {/* Personaliza o tooltip para mostrar "%" */}
                                <Tooltip
                                    formatter={(value) => `${value}%`}
                                    contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc", color: "#2DC5B8" }}
                                />

                                <Line
                                    type="monotone"
                                    dataKey="nota"
                                    stroke="#2DC5B8"
                                    strokeWidth={3}
                                    dot={{ r: 5 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>

                    </div>
                </div>
            </div>
        </main>
    );
}