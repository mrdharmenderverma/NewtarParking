import "./NewsRoom.css";
import CallImg from "../../assets/icons/services-icons/call-img.png";
import RatingImg from "../../assets/icons/services-icons/rating_img.png";
import ProductImg from "../../assets/images/our_product-01.png";
// import { IoMdArrowDropdown } from "react-icons/io";
const NewsRoom = () => {
  return (
    <div className="container newsroom__Container">
      <div className="newsroom__content">
        <h5 className="">Our Newsroom</h5>
        <h2 className="">Tar Parking News Room, Read our most recent </h2>
        <button type="submit" className="btn_newroom">
          <p>Tower Car Parking System</p>
        </button>
        <button type="submit" className="btn_newroom">
          <p>Tower Car Parking System</p>
        </button>
      </div>

      <div className="newsroom_image">
        <h2>Grand Parking System</h2>
        <div className="newsroom_content">
          <img src={ProductImg} alt="" />
          <p>
          Manufacturing of designing, innovating and installing various parking systems and solutions.  TAR PARKING is one of the leading manufacturers of car parking systems worldwide.
          </p>
          <button type="button" className="btn-primary">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsRoom;
