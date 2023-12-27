import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";	
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './components/Search';
import './App.css'; 

const App = () => {
//   const [searchResults, setSearchResults] = useState([]);

  const searchProducts = async (query) => {
    // Hacer la llamada a la API de Django con la query de búsqueda
    // Actualizar setSearchResults con los resultados obtenidos
    // Ejemplo ficticio:
    // const response = await fetch(`/api/products?search=${query}`);
    // const data = await response.json();
    // setSearchResults(data);
    console.log(`Realizar búsqueda de productos con la query: ${query}`);
  };

  return (
    <Container fluid className="app-container">
      <Row className="justify-content-center align-items-center">
        <Col xs={20} md={20} lg={20}>
          <div className="title-container">
            <p>React Search </p>
          </div>
          <Search onSearch={searchProducts} />
        </Col>
      </Row>
      <Row>
        <Col>
          {/* Mostrar los resultados de la búsqueda */}
          <ul>
            {/* {searchResults.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))} */}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
