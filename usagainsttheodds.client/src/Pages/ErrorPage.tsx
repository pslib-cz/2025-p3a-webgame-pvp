import { Link, useRouteError } from "react-router-dom";
import style from "../assets/styles/components/other.module.css"

const ErrorPage = () => {
  const error = useRouteError() as any;

  return (
    <div className={style.error}>
      <h1>Oops. We will fix it, someday.</h1>
      
      <p>
        Detail chyby: {error.statusText || error.message}
      </p>

      <Link to="/game">Go back</Link>
    </div>
  );
};
export default ErrorPage;