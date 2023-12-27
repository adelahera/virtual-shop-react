// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar-container">
        <InputGroup className="mb-3">
        <FormControl
            placeholder="Search for products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="outline-secondary" onClick={handleSearch}>
            Search
        </Button>
        </InputGroup>
    </div>
  );
};

export default SearchBar;
