import React, { useState } from "react";

function FunFact() {
  const [showFact, setShowFact] = useState(false);

  const handleToggle = () => {
    setShowFact((prev) => !prev);
  };

  return (
    <div className="fun-fact">
      <button className="btn" onClick={handleToggle}>
        {showFact ? "Hide Fun Fact" : "Show Fun Fact"}
      </button>

      {showFact && (
        <p className="fun-fact-text">
          Fun fact: The word “recipe” comes from the Latin word{" "}
          <em>recipere</em>, meaning “to take” — as in, “take these ingredients
          and create something delicious!”
        </p>
      )}
    </div>
  );
}

export default FunFact;
