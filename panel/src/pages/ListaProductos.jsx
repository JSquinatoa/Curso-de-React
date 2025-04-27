import React from "react";
import { Link } from "react-router-dom";

const ListaProductos = () => {
  return (
    <div>
      <ul>
        <li> <Link to={`/productos/1`}>Prodcuto 1</Link></li>
        <li> <Link to={`/productos/2`}>Prodcuto 2</Link></li>
        <li> <Link to={`/productos/3`}>Prodcuto 3</Link></li>
        <li> <Link to={`/productos/4`}>Prodcuto 4</Link></li>
        <li> <Link to={`/productos/5`}>Prodcuto 5</Link></li>
      </ul>
    </div>
  );
};

export default ListaProductos;
