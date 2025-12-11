import { Suspense, use, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Apitest = () => {
  const [promise, setPromise] = useState<Promise<any> | null>(null);

  const fetchData = () => {
  return fetch("https://localhost:7222/api/minigames/test")
    .then(res => {
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      return res.json();
    });
  };
  useEffect(() => {
    setPromise(fetchData());
  }, []);

  const ApiContent = () => {
    const data = use(promise || Promise.reject("No promise set"));
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  };

  const ErrorFallback = ({ error }: { error: Error }) => (
  <div>
    <pre style={{ color: 'red' }}>Error: {error.message}</pre>
    {error.message.includes("Failed to fetch") && (
      <h3 style={{ color: 'red' }}>MUSÍŠ MÍT ZAPLÝ BACKEND SERVER</h3>
    )}
    <button onClick={() => window.location.reload()}>Reload</button>
  </div>
);


  return (
    <div>
      <h1>API Test</h1>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div>Loading data...</div>}>
          <ApiContent />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Apitest;