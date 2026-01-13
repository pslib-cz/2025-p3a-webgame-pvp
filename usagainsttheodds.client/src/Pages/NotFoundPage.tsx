
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    <h1>404: Stránka nenalezena</h1>
    <p>Tahle cesta neexistuje. Zkus to jinak!</p>
    <Link to="/game">Zpět na hrací plochu.</Link>
  </div>
);

export default NotFoundPage;