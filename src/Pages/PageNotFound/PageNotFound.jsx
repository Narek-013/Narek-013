import { useNavigate } from "react-router-dom";
import "./pageNotFound.scss";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="not-found-container">
      <div className="not-found__back">
        <div className="not-found-content">
          <h1>404</h1>
          <p>Oops! The page you are looking for doesn’t exist.</p>
          <button onClick={handleGoBack}>Go Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
