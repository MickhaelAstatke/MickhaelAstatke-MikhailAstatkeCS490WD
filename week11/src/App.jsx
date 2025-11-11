import React from "react";
import "./App.css";

import Header from "./components/Header";
import FeaturedItem from "./components/FeaturedItem";
import ItemList from "./components/ItemList";
import FunFact from "./components/FunFact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <section className="section">
          <h2 className="section-title">⭐ Featured Recipe</h2>
          <FeaturedItem />
        </section>

        <section className="section">
          <h2 className="section-title">📚 Recipe List</h2>
          <ItemList />
        </section>

        <section className="section">
          <h2 className="section-title">👩‍🍳 Recipe Fun Fact</h2>
          <FunFact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
