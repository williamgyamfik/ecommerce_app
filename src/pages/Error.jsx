import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>Error 404 Page not found :( </h1>
      <Link to="/">Back to Home page</Link>
    </>
  );
};

export default ErrorPage;
