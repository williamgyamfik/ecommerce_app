const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "5rem", height: "5rem", color: "red" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
