import React from 'react';
// Bootstrap
import { Form } from 'react-bootstrap';

export default function SearchBar({onSubmit, onChange, searchQuery}) {
  return (
    <Form onSubmit={onSubmit} autoComplete="off" className='mx-auto'>
        <Form.Control onChange={onChange} id='query' value={searchQuery.query} type="search" placeholder="Search..."></Form.Control>
    </Form>
  );
}
