import React, { useState } from 'react';

const TableInputCell = ({ initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const newValue = e.target.value;

    // Solo permite números
    if (/^\d*$/.test(newValue)) {
      setValue(newValue);
      onChange(newValue);  // Llama a la función onChange pasada como prop
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      // No se aplican estilos visuales
      style={{ border: 'none', outline: 'none', background: 'transparent', padding: 0, textAlign: 'center' }}
    />
  );
};

export default TableInputCell;
