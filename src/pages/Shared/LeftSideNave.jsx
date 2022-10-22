import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNave = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("ERROR: ", error));
  }, []);

  return (
    <div>
      <h4>All Category</h4>
      {categories.map((category) => (
        <p key={category.id}>
          <Link
            className="text-decoration-none"
            to={`/category/${category.id}`}
          >
            {category.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNave;
