import React from "react";
import ItemCard from "./ItemCard";

function ItemList() {
  const recipes = [
    {
      id: 1,
      title: "Lemon Herb Roasted Chicken",
      category: "Dinner",
      time: "1 hr 15 min",
      rating: 4.9,
      description: "Crispy skin, juicy meat, and bright lemon flavor."
    },
    {
      id: 2,
      title: "Veggie Stir-Fry Noodles",
      category: "Lunch",
      time: "25 min",
      rating: 4.7,
      description: "Colorful veggies tossed with soy-garlic sauce."
    },
    {
      id: 3,
      title: "Berry Overnight Oats",
      category: "Breakfast",
      time: "10 min prep",
      rating: 4.8,
      description: "Creamy oats that are ready when you wake up."
    },
    {
      id: 4,
      title: "Chocolate Avocado Mousse",
      category: "Dessert",
      time: "15 min",
      rating: 4.6,
      description: "Rich chocolate flavor with a secretly healthy base."
    }
  ];

  return (
    <div className="card-grid">
      {recipes.map((recipe) => (
        <ItemCard
          key={recipe.id}
          title={recipe.title}
          category={recipe.category}
          time={recipe.time}
          rating={recipe.rating}
          description={recipe.description}
        />
      ))}
    </div>
  );
}

export default ItemList;
