import React from 'react';

const recipes = [
  { name: 'Recipe 1', price: '$10', image: 'https://placekitten.com/200/200' },
  { name: 'Recipe 2', price: '$12', image: 'https://placekitten.com/201/201' },
  // Add more recipes here
];

const MyRecipe = () => {
  return (
    <div>
      <h2>My Recipes</h2>
      <div className="row">
        {recipes.map((recipe, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card">
              <img src={recipe.image} className="card-img-top" alt={recipe.name} />
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text">Price: {recipe.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyRecipe;
