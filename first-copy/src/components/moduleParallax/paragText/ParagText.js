import React from 'react';

export const ParagText = (parag) => {
  return (
    <div>
      <div className="parrafoText">
        <h3 className="border">{parag.propsTittle}</h3>
        <p>{parag.propsText}</p>
      </div>
    </div>
  );
};
