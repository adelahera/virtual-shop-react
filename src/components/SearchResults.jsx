// SearchResults.jsx
import React from 'react';
import ProductCard from './ProductCard';

const SearchResults = ({ results, isLoading, buttonPressed }) => {
  return (
    <div className='group-cards'>
        {isLoading && <p>Loading...</p>}
        {buttonPressed && results.length === 0 && <p>No results found</p>}
        {results.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}

    </div>
  );
};

export default SearchResults;
