import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <h2>Error</h2>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
