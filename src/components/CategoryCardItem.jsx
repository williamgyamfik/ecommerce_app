const CategoryCardItem = (props) => {
  return (
    <div className="" id={props.id}>
      <div>
        <div className="col ">
          <img src={props.image} style={{ width: "270px", height: "250px" }} />
        </div>
        <div className="col fw-bold ">
          <p>{`${"$"} ${props.price}`}</p>
        </div>
        <div className="d-flex justify-content-center">
          <i>i</i>
          <span className="fw-bold ">
            <a>More...</a>{" "}
          </span>
        </div>
        <div className="pt-1 fw-bold">
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
};
export default CategoryCardItem;
