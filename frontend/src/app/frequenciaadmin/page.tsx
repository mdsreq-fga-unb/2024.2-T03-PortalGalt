'use client';
import { useState, useEffect } from "react";
import AlunoDropdown from "@/components/alunoDD";
import Header from "@/components/header";
import PeriodoDropdown from "@/components/periodoDD";
import DataFrequenciaDropdown from "@/components/datafrequenciaDD";
import cookie, { useCookies } from "react-cookie";


export default function FrequenciaAdmin() {
  const [selectedAluno, setSelectedAluno] = useState<string | null>(null);
  const [frequencia, setFrequencia] = useState<
  Record<string, { nome: string; presenca: number }[]>>({});
  const [selectedData, setSelectedData] = useState<string | null>(null);
  const [periodoSelecionado, setPeriodoSelecionado] = useState<string>("Diurno");
  const [cookie, setCookie] = useCookies(["token_auth"]);

  

  // Se um novo período for selecionado, limpar aluno e data
  useEffect(() => {
    setSelectedAluno(null);
    setSelectedData(null);
  }, [periodoSelecionado]);

  // Se uma data for selecionada, desmarca o aluno
  useEffect(() => {
    if (selectedData) setSelectedAluno(null);
  }, [selectedData]);

  // Se um aluno for selecionado, desmarca a data
  useEffect(() => {
    if (selectedAluno) setSelectedData(null);
  }, [selectedAluno]);


  useEffect(() => {
    const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${cookie.token_auth}`, // Corrigido para acessar o valor correto do cookie
        },
      };
    if (selectedData) {
      fetch(`http://localhost:8000/frequenciaAPI/getFrequenciaTurma/${periodoSelecionado}/${selectedData.replaceAll("/", '-')}/`, requestOptions)
    .then(response => {
          if (!response.ok) {
            throw new Error("Erro na requisição");
          }
          return response.json();
        })
        .then(data => {
          console.log("Dados recebidos:", data["presenca"]);
          setFrequencia(data["presenca"])
        })
        .catch(error => {
          console.error("Erro ao buscar frequência:", error);
        });
    } if (selectedAluno){
        fetch(`http://localhost:8000/frequenciaAPI/getFrequencia/${selectedAluno}`, requestOptions)    
    .then(response => {
          if (!response.ok) {
            throw new Error("Erro na requisição");
          }
          return response.json();
        })
        .then(data => {
          console.log(data["presenca"])
          setFrequencia(data["presenca"])
        })
        .catch(error => {
          console.error("Erro ao buscar frequência:", error);
        });
    }
  }, [selectedAluno, selectedData, periodoSelecionado]); // Atualiza sempre que um desses valores mudar


function calculaPresenca(selectedAluno: string): number{
  let presencas = 0
  let dias = 0;

  {Object.entries(frequencia).map(([data, alunos]) =>{
      const aluno = alunos.find((a) => a.nome === selectedAluno);

      if(aluno){
        presencas += aluno.presenca;
        dias += 5
      }
  })
  return ((presencas*100)/dias);
}}

  return (
    <div className="min-h-screen bg-gray-100">
      <Header isadmin/>
      <div className="max-w-6xl mx-auto p-4 w-400">
        <div className="flex justify-evenly items-center gap-4 mb-4 mx-auto w-full">
          <PeriodoDropdown onSelect={setPeriodoSelecionado} />
          <AlunoDropdown selectedAluno={selectedAluno} onSelect={setSelectedAluno} />
          <DataFrequenciaDropdown selectedData={selectedData} onSelect={setSelectedData} />
        </div>

        {selectedAluno && frequencia && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl text-black font-semibold">Aluno: {selectedAluno}</h2>
            <p className="font-bold text-black">
            Total de Presenca : {calculaPresenca(selectedAluno).toFixed(0)}%
            </p>
            <div className="grid grid-cols-5 gap-2 mt-4">
            {Object.entries(frequencia).map(([data, alunos]) =>
  alunos.map((aluno, index) => (
                <div key={index} className="text-center text-black font-medium bg-gray-200 p-2 rounded-lg">
                <p className="font-semibold">{data}</p>
                <p className="text-lg font-bold">{aluno.presenca}</p>
                </div>
            ))
        )}
            </div>
          </div>
        )}

        {periodoSelecionado && selectedData && frequencia[selectedData] && (
          <div className="bg-white p-4 rounded-lg shadow-md max-w-2xl mx-auto">
            <h2 className="text-xl text-black font-semibold">Data: {selectedData}</h2>
            <div className="mt-4">
              <p className="font-bold text-black">
                  Alunos Presentes: {frequencia[selectedData]?.filter((a) => a.presenca > 0).length ?? 0}
              </p>
              <p className="font-bold text-black">
                  Total de Faltas: {frequencia[selectedData]?.filter((a) => a.presenca === 0).length ?? 0}
              </p>
              <div className="grid text-black grid-cols-1 pt-4 gap-4">
                {frequencia[selectedData].map((aluno, index) => (
                  <div key={index} className="flex text-black justify-between p-2 bg-gray-200 rounded-lg">
                    <span>{aluno.nome}</span>
                    <span className="font-bold">{aluno.presenca}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

