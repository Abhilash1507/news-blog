import React, { useState, useEffect } from "react";
import NewsGrid from "./Components/NewsGrid";
import SearchForm from "./Components/SearchForm";
import { Articles_API_KEY } from "./Constants/Constants";
import "./App.css";

function App() {
  const [value, setValue] = useState([]);
  const [term, setTerm] = useState("everything");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=${term}&apiKey=${Articles_API_KEY}`
        );
        const result = await res.json();
        setValue(result.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticles();
  }, [term]);

  return (
    <>
      <div className="show-case">
        <div className="overlay pt-12 p-3">
          <h1 className="text-5xl font-bold text-white text-center mb-5 mt-5 lg:text-6x">
            Today's
            <br />
            Blogs
          </h1>
       <p className="text-white mt-6">
            awesome place to make oneself productive <br />
            and entertained through daiy updates.
          </p>
          <SearchForm searchText={(text) => setTerm(text)} />
        </div>
      </div>

      <NewsGrid items={value}></NewsGrid>
    </>
  );
}

export default App;
