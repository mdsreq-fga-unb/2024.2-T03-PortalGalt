"use client";

import Header from "@/components/header";
import InputFile from "@/components/fileinput";
import DateInput from "@/components/dateinput";
import SimuladoInput from "@/components/simuladoinput";
import { useState, useEffect } from "react";
import InputFileRespostas from "@/components/fileinputrespostas";
import { useCookies } from "react-cookie";
import { Download } from "lucide-react";

export default function EnvioSimulado() {
  const [simuladoNome, setSimuladoNome] = useState("");
  const [dataSimulado, setDataSimulado] = useState("");
  const [gabarito, setGabarito] = useState({});
  const [respostas, setRespostas] = useState({});
  const [cookies] = useCookies(["token_auth"]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleDownload = (filename: string, content: string) => {
    const blob = new Blob([content], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSubmit = async () => {
    console.log("Simulado Nome:", simuladoNome);
    console.log("Data Simulado:", dataSimulado);
    console.log("Gabarito:", gabarito);
    console.log("Respostas:", respostas);

    if (
      !simuladoNome ||
      !dataSimulado ||
      Object.keys(gabarito).length === 0 ||
      Object.keys(respostas).length === 0
    ) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    const payload = {
      nome: simuladoNome,
      data: dataSimulado,
      gabarito,
      respostas,
    };

    console.log("📤 Enviando payload para o backend:", payload);

    try {
      const token = cookies.token_auth; 

      if (!token) {
        throw new Error("Token de autenticação não encontrado.");
      }

      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Token ${cookies.token_auth}`,
          // DO NOT manually set Content-Type for FormData
        },
        body: JSON.stringify(payload),
      };

      const response = await fetch(
        "http://localhost:8000/simuladosAPI/enviarSimulado/",
        requestOptions
      );

      if (!response.ok) {
        throw new Error(`Erro ao enviar: ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Simulado enviado com sucesso!", data);
      alert("Simulado enviado com sucesso!");

      setSimuladoNome("");
      setDataSimulado("");
      setGabarito({});
      setRespostas({});
    } catch (error) {
      console.error("❌ Erro ao enviar simulado:", error);
      alert("Erro ao enviar simulado. Tente novamente.");
    }
  };

  return (
    <div className="flex flex-col items-center w-full bg-gray-100 min-h-screen">
      <Header isadmin />
      <div className="flex flex-col items-center gap-4 mx-auto w-full p-8">
        <SimuladoInput value={simuladoNome} onChange={setSimuladoNome} />
        <DateInput value={dataSimulado} onChange={setDataSimulado} />
      </div>

      <div className="grid grid-cols-2 gap-4 w-3/4 max-w-xl mt-6">
        <div className="flex flex-col items-center">
          <InputFile id="gabarito_input" label="Faça o upload do gabarito" setGabarito={setGabarito} />
          <button className="flex items-center gap-2 mt-2 text-gray-500 hover:underline" onClick={() => handleDownload("gabarito_exemplo.csv", "questao,resposta\n1,A\n2,B\n3,C")}>
            <Download size={18} /> Baixar exemplo de arquivo
          </button>
        </div>
        <div className="flex flex-col items-center">
          <InputFileRespostas id="respostas_input" label="Faça o upload das respostas dos alunos" setGabarito={setRespostas} />
          <button className="flex items-center gap-2 mt-2 text-gray-500 hover:underline" onClick={() => handleDownload("respostas_exemplo.csv", "aluno,questao1,questao2\nJoao,C,E\nMaria,C,C\nPedro,E,C")}>
            <Download size={18} /> Baixar exemplo de arquivo
          </button>
        </div>
      </div>

      {errorMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold text-red-600">{errorMessage}</h2>
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 mt-4"
              onClick={() => setErrorMessage("")}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <button onClick={handleSubmit} className="mt-10 bg-teal-600 text-white font-bold py-2 px-4 rounded">
        Enviar notas do simulado
      </button>
    </div>
  );
}
//   return (
//     <div className="flex flex-col items-center w-full bg-gray-100 min-h-screen">
//       <Header isadmin />

//       <div className="flex flex-col items-center gap-4 mx-auto w-full p-8">
//         <SimuladoInput
//           value={simuladoNome}
//           onChange={(value) => setSimuladoNome(value)}
//         />
//         <DateInput
//           value={dataSimulado}
//           onChange={(value) => setDataSimulado(value)}
//         />
//       </div>

//       <div className="grid grid-cols-2 gap-4 w-3/4 max-w-xl mt-6">
//         <InputFile
//           id="gabarito_input"
//           label="Faça o upload do gabarito"
//           setGabarito={setGabarito}
//         />
//         <InputFileRespostas
//           id="respostas_input"
//           label="Faça o upload das respostas dos alunos"
//           setGabarito={setRespostas}
//         />
//       </div>

//       <button
//         onClick={handleSubmit}
//         className="mt-10 bg-teal-600 text-white font-bold py-2 px-4 rounded"
//       >
//         Enviar notas do simulado
//       </button>
//     </div>
//   );
// }
