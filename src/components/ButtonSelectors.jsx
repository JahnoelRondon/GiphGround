import React from 'react';

export default function ButtonSelectors({onSubmit, onChange}) {
  return (
    <form onSubmit={onSubmit}>
        <button onClick={onChange} value="Mountain">Mountain</button>
        <button onClick={onChange} value="Bird">Bird</button>
        <button onClick={onChange} value="Food">Food</button>
        <button onClick={onChange} value="Anime">Anime</button>
    </form>
  );
}
