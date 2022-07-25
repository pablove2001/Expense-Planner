import { useState, useEffect } from "react";

const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label>Filter Expense</label>
          <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
            <option value="">-- All categories --</option>
            <option value="saving">Saving</option>
            <option value="food">Food</option>
            <option value="house">House</option>
            <option value="expense">Various expense</option>
            <option value="leisure">Leisure</option>
            <option value="health">Health</option>
            <option value="subscription">Subscription</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
