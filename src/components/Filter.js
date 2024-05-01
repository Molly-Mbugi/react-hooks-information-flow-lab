import React from "react";

function Filter({ onCategoryChange, categories }) {
  return (
    <div className="Filter">
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        {/* Map over categories and create an option for each */}
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
