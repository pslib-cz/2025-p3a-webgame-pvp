
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    <h1>404: Lunch break</h1>
    <p>Give them a rest, go try other minigames.</p>
    <Link to="/game">Back to main screen.</Link>
  </div>
);

export default NotFoundPage;