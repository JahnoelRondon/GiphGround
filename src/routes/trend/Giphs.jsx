import React from 'react';
import GiphImage from './GiphImage'
import Container from 'react-bootstrap/Container'

export default function Giphs({data}) {
  return (
      <Container fluid='md'>

        {data && data.map(giph => (
          <GiphImage key={giph.id} giph={giph} />
        ))}

      </Container>
  );
}
