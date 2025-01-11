
'use client';

export default function Home() {
  const callAPI = async () => {
    try {
      const res = await fetch(`http://localhost:8000/hello`, {
        mode:'no-cors',
        method: "get",
            headers: {
                 "Content-Type": "application/json"
            },
      })
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className="w-full h-full flex justify-center text-black">Bem vindo ao Portal
    <button onClick={callAPI}>clica</button></div>
  );
}
