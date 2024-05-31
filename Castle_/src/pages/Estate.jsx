import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Estate = ({ estate }) => {
  const {
    estate_title,
    id,
    image,
    segment_name,
    price,
    status,
    area,
    location,
  } = estate;
  return (
    <div data-aos="zoom-in" data-aos-duration="1000">
      <div className="card card-compact  bg-base-100 border-2 border-primary">
        <figure>
          <img style={{ height: "250px", width: "100%" }} src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {estate_title} </h2>
          <p> Segment:{segment_name}</p>
          <p>Location: {location}</p>
          <p>Status: {status}</p>
          <p>Area: {area}</p>
          <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <Link to={`/estate/${id}`}>
              <button className="btn btn-primary">View Property</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estate;
