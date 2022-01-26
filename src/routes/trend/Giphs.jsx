import React from 'react';
import GiphImage from './GiphImage'

// Bootstrap
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


export default function Giphs({data}) {
  return (
      <Row>
        {data && data.map(giph => (
          // Col must be a flex so it can center the giphImage
          <Col xs={12} lg={4} xxl={3} className='d-flex justify-content-center mb-3 mt-3'>
            <GiphImage key={giph.id} giph={giph} />
          </Col>
        ))}
      </Row>
  );
}
