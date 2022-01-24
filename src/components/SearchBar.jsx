import React from 'react';

export default function SearchBar({onSubmit, onChange, searchQuery}) {
  return (
    <form onSubmit={onSubmit} autoComplete="off">
        <input onChange={onChange} id='query' value={searchQuery.query} type="search" placeholder="Search..."></input>
    </form>
  );
}
