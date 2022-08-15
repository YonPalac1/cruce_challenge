import React from "react";
import { Link } from 'react-router-dom'

const Buttons = () => {
  return (
      <Link
        to="/listado-coleccionables"
        className="btn-orange mx-auto font-primary flex justify-center items-center"
      >
        Ver coleccionables
      </Link>
  );
};

export default Buttons;
