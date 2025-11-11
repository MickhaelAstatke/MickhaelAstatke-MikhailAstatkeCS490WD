import React from "react";
import "week11/src/App.css";

import Header from "week11/src/components/Header.jsx";
import FeaturedItem from "week11/src/components/FeaturedItem";
import ItemList from "week11/src/components/ItemList";
import FunFact from "week11/src/components/FunFact";
import Footer from "week11/src/components/Footer";

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
