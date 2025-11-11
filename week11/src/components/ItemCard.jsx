import React, { useState } from "react";

function ItemCard({ title, category, time, rating, description }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    alert(`You clicked on "${title}"`);
  };

  return (
    <article
      className={`item-card ${isHovered ? "item-card-hovered" : ""}`}
      onClick={handleClick}              // CLICK EVENT HANDLER
      onMouseEnter={() => setIsHovered(true)}   // HOVER EVENT HANDLERS
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="item-title">{title}</h3>
      <p className="meta">
        {category} • {time}
      </p>
      <p className="description">{description}</p>
      <p className="rating">⭐ {rating}</p>
    </article>
  );
}

export default ItemCard;
