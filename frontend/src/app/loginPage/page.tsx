'use client';
import ButtonGalt from "@/components/button";
import InputGalt from "@/components/input";
import { useEffect, useState } from "react";


export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(){
    
    const data = {
      username: email,
      password: password,
    };
    console.log(data)

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };


    fetch("http://localhost:8000/login/", requestOptions).then(
      response => {
        if (!response.ok){
          throw new Error('Network not ok')
        }
        return response.json()
      }
    ).then(data => {
      console.log(data);
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <img src='../assets/Galt.png'
              className="w-32 mx-auto" />
          </div>
          <div className="mt-12 flex flex-col items-center font-museo">
            <h1 className="text-2xl xl:text-5xl text-main_color font-bold">
              Bem vindo ao Portal Galt!
            </h1>
            <div className="w-full flex-1">
              <div className="my-12 border-b text-center">
              </div>
              <div className="mx-auto max-w-xs">
                <InputGalt type="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <InputGalt type="PassWord" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <ButtonGalt text="Entrar" svg="user" onClick={login}/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center hidden lg:flex">
          <img src='../assets/imagemlogin.png'/>
        </div>
      </div>
    </div>
  );
}