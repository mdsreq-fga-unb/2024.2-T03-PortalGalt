"use client";

import React, { FC, useState } from "react";
import { Upload, X } from "lucide-react";

interface InputFileProps {
  label?: string;
  id?: string;
  setGabarito: (gabarito: Record<string, string>) => void;
}

const InputFile: FC<InputFileProps> = ({ label, id, setGabarito }) => {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files || event.target.files.length === 0) return;

    const file = event.target.files[0];
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e.target?.result) return;

      const text = e.target.result as string;
      console.log("📄 Arquivo lido (bruto):", text);

      const lines = text
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line);
      console.log("🔹 Linhas do CSV:", lines);

      if (lines.length < 2) {
        console.error("❌ Arquivo inválido: menos de 2 linhas.");
        return;
      }

      const gabarito: Record<string, string> = {};

      lines.slice(1).forEach((line) => {
        const [questao, resposta] = line
          .split(/[,;]/)
          .map((item) => item.trim());
        if (questao && resposta) {
          gabarito[questao] = resposta; 
        }
      });

      console.log("✅ Gabarito gerado:", gabarito);
      setGabarito(gabarito);
    };

    reader.readAsText(file);
  };

  const handleCancel = () => {
    setFileName("");
    setGabarito({});
    const input = document.getElementById(id!) as HTMLInputElement;
    if (input) {
      input.value = "";
    }
  };

  return (
    <label
      htmlFor={id}
      className="flex flex-col items-center w-60 mx-auto cursor-pointer"
    >
      <div className="block w-full text-center text-lg font-medium text-white bg-teal-600 px-4 py-2 rounded-t-lg">
        {label || "Faça o upload do gabarito"}
      </div>
      <div className="flex flex-col items-center justify-center w-full h-32 bg-[#D9D9D9] rounded-b-lg hover:bg-gray-400 relative">
        {fileName ? (
          <div className="flex flex-col items-center">
            <span className="text-black text-sm text-center px-2">
              {fileName}
            </span>
            <button
              type="button"
              className="absolute bottom-2 flex items-center justify-center bg-transparent text-white hover:text-gray-700"
              onClick={handleCancel}
            >
              <X size={24} />
            </button>
          </div>
        ) : (
          <Upload size={60} color="#9E9E9E" />
        )}
      </div>
      <input
        className="hidden"
        id={id}
        type="file"
        accept=".csv"
        onChange={handleFileChange}
      />
    </label>
  );
};

export default InputFile;
