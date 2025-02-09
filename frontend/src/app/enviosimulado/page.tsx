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
  const [simuladoNome, setSimuladoNome] = useState<string>("");
  const [dataSimulado, setDataSimulado] = useState<string>("");
<<<<<<< HEAD
  const [gabarito, setGabarito] = useState<Record<string, string>>({});
  const [respostas, setRespostas] = useState<Record<string, Record<string, string>>>({});
  const [cookies] = useCookies(["token_auth"]);
=======
//   const [gabarito, setGabarito] = useState<Record<string, string>>({});
//   const [respostas, setRespostas] = useState<Record<string, Record<string, string>>>({});
  const [cookies] = useCookies(["token_auth"]); 
  
  const [gabarito, setGabarito] = useState(null);
  const [respostas, setRespostas] = useState(null);
>>>>>>> 12f09a52ab34f7a1d3bf6ce093e10bcfd38724f4

  useEffect(() => {
    console.log("📌 Estado atualizado - Gabarito:", gabarito);
  }, [gabarito]);

  useEffect(() => {
    console.log("📌 Estado atualizado - Respostas:", respostas);
  }, [respostas]);

<<<<<<< HEAD
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

    if (!simuladoNome || !dataSimulado || Object.keys(gabarito).length === 0 || Object.keys(respostas).length === 0) {
      alert("Por favor, preencha todos os campos antes de enviar.");
=======
//   const handleSubmit = async () => {
//     console.log("Simulado Nome:", simuladoNome);
//     console.log("Data Simulado:", dataSimulado);
//     console.log("Gabarito:", gabarito);
//     console.log("Respostas:", respostas);

//     if (
//       !simuladoNome ||
//       !dataSimulado ||
//       Object.keys(gabarito).length === 0 ||
//       Object.keys(respostas).length === 0
//     ) {
//       alert("Por favor, preencha todos os campos antes de enviar.");
//       return;
//     }

//     const payload = {
//       nome: simuladoNome,
//       data: dataSimulado,
//       gabarito,
//       respostas,
//     };

//     console.log("📤 Enviando payload para o backend:", payload);

//     try {
//       const token = cookies.token_auth; 

//       if (!token) {
//         throw new Error("Token de autenticação não encontrado.");
//       }

    //   const requestOptions = {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Token ${token}`,
    //     },
    //     body: JSON.stringify(payload),
    //   };

//       const response = await fetch(
//         "http://localhost:8000/simulado/upload/",
//         requestOptions
//       );

//       if (!response.ok) {
//         throw new Error(`Erro ao enviar simulado: ${response.statusText}`);
//       }

//       const data = await response.json();
//       console.log("✅ Simulado enviado com sucesso!", data);
//       alert("Simulado enviado com sucesso!");

//       setSimuladoNome("");
//       setDataSimulado("");
//       setGabarito({});
//       setRespostas({});
//     } catch (error) {
//       console.error("❌ Erro ao enviar simulado:", error);
//       alert("Erro ao enviar simulado. Tente novamente.");
//     }
//   };

const handleSubmit = async () => {
    if (!simuladoNome || !dataSimulado || !gabarito || !respostas) {
      alert("Por favor, preencha todos os campos e selecione os arquivos.");
>>>>>>> 12f09a52ab34f7a1d3bf6ce093e10bcfd38724f4
      return;
    }

    const formData = new FormData();
    formData.append("nome", simuladoNome);
    formData.append("data", dataSimulado);
    formData.append("gabarito", gabarito);
    formData.append("respostas", respostas);

    try {
<<<<<<< HEAD
      const token = cookies.token_auth;
      if (!token) {
        throw new Error("Token de autenticação não encontrado.");
      }

      const requestOptions = {
=======
      const response = await fetch("http://localhost:8000/simulado/upload/", {
>>>>>>> 12f09a52ab34f7a1d3bf6ce093e10bcfd38724f4
        method: "POST",
        headers: {
          Authorization: `Token ${cookies.token_auth}`,
          // DO NOT manually set Content-Type for FormData
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Erro ao enviar: ${response.status}`);
      }

      const result = await response.json();
      console.log("Sucesso:", result);
      alert("Upload realizado com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar os arquivos. Verifique e tente novamente.");
    }
  };

  return (
    <div className="flex flex-col items-center w-full bg-gray-100 min-h-screen">
      <Header isadmin />

      <div className="flex flex-col items-center gap-4 mx-auto w-full p-8">
<<<<<<< HEAD
        <SimuladoInput value={simuladoNome} onChange={(value) => setSimuladoNome(value)} />
        <DateInput value={dataSimulado} onChange={(value) => setDataSimulado(value)} />
=======
        <SimuladoInput value={simuladoNome} onChange={setSimuladoNome} />
        <DateInput value={dataSimulado} onChange={setDataSimulado} />
>>>>>>> 12f09a52ab34f7a1d3bf6ce093e10bcfd38724f4
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
