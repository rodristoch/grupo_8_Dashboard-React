import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';

function Products() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3100/api/productos');
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getProductURL = (tipoMascota, categoria, productId) => {
    const mascota = tipoMascota === 2 ? 'perro' : 'gato'; // 2 para perro, cualquier otro valor para gato
    let categoriaPlural = categoria;
    if (categoria.toLowerCase() !== 'higiene' && categoria.toLowerCase() !== 'comida') {
      categoriaPlural += 's'; // Agregar una 's' al final de la categoría excepto para "higiene" y "comida"
    }
    return `http://localhost:3100/productos/${mascota}/${categoriaPlural}/${productId}`;
  };

  return (
    <Container className="mt-4">
      <Table striped>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Categoría</th>
          </tr>
          {data && data.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <a href={getProductURL(product.tipo_mascota_id, product.categorias.length > 0 ? product.categorias[0].categoria : "", product.id)}>
                  {product.nombre}
                </a>
              </td>
              <td>{product.categorias.length > 0 && product.categorias.map(categoria => categoria.categoria)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Products;
