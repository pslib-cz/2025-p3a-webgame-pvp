import { useEffect, useState } from "react";

const Apitest = () => {
  const [data, setData] = useState<any>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://localhost:7222/api/Minigames")
      .then(res => {
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        return res.json();
      })
      .then(setData)
      .catch(e => setErr(String(e)));
  }, []);

  return (
    <div>
      <h1>API Test</h1>
      {err ? 
        <div>
          <pre style={{color:'red'}}>Error: {err}</pre>
          <h3 style={{color:'red'}}>MUSÍŠ MÍT ZAPLÝ BACKEND SERVER, TAKŽE JE TO NEJSPÍŠ TIM</h3>
        </div> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default Apitest;