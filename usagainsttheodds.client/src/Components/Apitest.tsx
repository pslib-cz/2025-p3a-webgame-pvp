import { Suspense, use, useEffect, useState } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import apiGet from "../Helpers/apiHelper";

const Apitest = () => {
  const [promise, setPromise] = useState<Promise<any> | null>(null);
  

  useEffect(() => {
    setPromise(apiGet<any>("/api/consumables/"));
  }, []);

  const ApiContent = () => {
    const data = use(promise || Promise.reject("No promise set"));
    return <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{JSON.stringify(data, null, 2)}</pre>;
  };

  const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
    let message = "Unknown error";
    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === "string") {
      message = error;
    }

    return (
      <div>
        <pre style={{ color: 'red' }}>Error: {message}</pre>
        {message.includes("Failed to fetch") && (
          <h3 style={{ color: 'red' }}>MUSÍŠ MÍT ZAPLÝ BACKEND SERVER</h3>
        )}
        <button onClick={resetErrorBoundary}>Reload</button>
      </div>
    );
  };

  if (!promise) {
    return <div>Initializing API request...</div>;
  }




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