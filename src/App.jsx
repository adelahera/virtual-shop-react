import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";	
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Dropdown from './components/Dropdown';
import './App.css'; 

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleSearch = async (query) => {
    try {
      setIsLoading(true);
      setButtonPressed(true);
      const response = await fetch(`http://127.0.0.1:8000/shop/api/products/search?search=${query}`);
      const data = await response.json();
      console.log(data)

      setSearchResults(data);
      
      console.log(data)
    } catch (error) {
      console.error('Error al realizar la búsqueda:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategory = async (category) => {
    var cat = category.name.toLowerCase();
    try {
      setIsLoading(true);
      setButtonPressed(true);
      const response = await fetch(`http://127.0.0.1:8000/shop/api/products/category?search=${cat}`)
      const data = await response.json();
      console.log(data)
      setSearchResults(data);
    }
    catch (error) {
      console.error('Error al realizar la búsqueda:', error.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
      <Container fluid className="app-container">
        <div className="title-container">
          <p>React Search</p>
        </div>
        <Row className="menu-container">
            <Search onSearch={handleSearch}/>
            <Dropdown onSelectCategory={handleCategory}/> 
        </Row>
        <SearchResults results={searchResults} isLoading={isLoading} buttonPressed={buttonPressed}/>
      </Container>
    );
  };

export default App;
