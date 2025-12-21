import { type FC } from "react";
import { Link } from "react-router-dom";

export const NotFoundPage: FC = () => (
  <div>
    <h1>404: Stránka nenalezena</h1>
    <p>Tahle cesta neexistuje. Zkus to jinak!</p>
    <Link to="/game">Zpět na hrací plochu.</Link>
  </div>
);

export default NotFoundPage;