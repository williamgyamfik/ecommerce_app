import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center mt-5 py-5 px-5">
      <h1 className="fs-1">Error 404 Page not found :( </h1>
      <Link to="/">Back to Home page</Link>
    </div>
  );
};

export default ErrorPage;
