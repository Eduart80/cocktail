import React from "react";
import CocktailList from "../Components/CocktailList";
import SearchForm from "../Components/SearchList";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
