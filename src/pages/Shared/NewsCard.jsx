import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, _id, thumbnail_url, details, author, rating, total_view } =
    news;
  return (
    <Card className="mt-4">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Image
            src={thumbnail_url}
            roundedCircle
            style={{ width: "60px", height: "60px" }}
          />
          <div className="ms-3">
            <p className="mb-0">{author?.name}</p>
            <p className="mb-0">
              <small>{author?.published_date}</small>
            </p>
          </div>
        </div>
        <div>
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details.length > 250 ? (
            <>
              {details.slice(0, 250) + "..."}
              <Link to={`/news/${_id}`}> Read More</Link>
            </>
          ) : (
            <>{details}</>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <div>
          <FaStar className="text-warning me-2" />
          <span>{rating.number}</span>
        </div>
        <div>
          <FaEye className="me-2" />
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
