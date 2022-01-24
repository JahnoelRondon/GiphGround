import React from 'react';
import GiphImage from './GiphImage'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


export default function Giphs({data}) {
  return (
      <Container>
        <Row>
          {data && data.map(giph => (
            <Col>
              <GiphImage key={giph.id} giph={giph} />
            </Col>
          ))}
        </Row>
      </Container>
  );
}
