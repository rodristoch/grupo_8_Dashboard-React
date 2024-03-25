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
          <td><a href={`http://localhost:3100/productos/detalle/${product.id}`}>{product.nombre}</a></td>
          <td>{product.categorias.map(categoria => categoria.categoria)}</td>
        </tr>
      ))}
    </tbody>
  </Table>
</Container>

  );
}

export default Products;
