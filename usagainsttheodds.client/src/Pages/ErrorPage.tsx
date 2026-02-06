import { Link } from "react-router-dom";
import style from "../assets/styles/components/other.module.css";
import type { FallbackProps } from "react-error-boundary";

const ErrorPage = ({ error, resetErrorBoundary }: FallbackProps) => {
  const errorMessage = error instanceof Error ? error.message : "Unknown error.";

  return (
    <div className={style.page}>
      <h1>Oops. We will fix it, someday.</h1>
      
      <p className={style.text}> Error detail: {errorMessage} </p>

      <Link to="/game" onClick={resetErrorBoundary}>
        Go back
      </Link>
    </div>
  );
};

export default ErrorPage;