import { type FC } from "react";
import { Link } from "react-router-dom";

export const ErrorPage: FC = () => (
  <div>
    <h1>Error</h1>
    <p>Někdy to opravíme, opravdu. :)</p>
    <Link to="/game">Zpět na hrací plochu.</Link>
  </div>
  /*asi by bylo lepší tady udělat něco komplexnějšího,
  co bere a vypisuje konkrétní eroror, ale to není moje starost aktuální*/
);

export default ErrorPage;