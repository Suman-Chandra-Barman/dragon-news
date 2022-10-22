import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../Shared/NewsCard";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <h3 className="text-center">Total News: {categoryNews.length}</h3>
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Category;
