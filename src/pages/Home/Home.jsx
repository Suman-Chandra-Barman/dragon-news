import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../Shared/NewsCard";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <h3 className="text-center">All News : {allNews?.length}</h3>
      {allNews?.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Home;
