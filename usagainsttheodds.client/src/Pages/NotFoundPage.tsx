import { Link } from "react-router-dom";
import style from "../assets/styles/components/other.module.css";

const NotFoundPage = () => (
  <div className={`${style.error} ${style.notFound}`}>
    <h1>404: Lunch break</h1>
    <p>Give them a rest, go try other minigames.</p>
    <Link to="/game">Back to main screen.</Link>
  </div>
);

export default NotFoundPage;