import React from 'react';
import { Form, Button, Stack} from 'react-bootstrap';


export default function ButtonSelectors({onSubmit, onChange}) {
  return (
    <Form onSubmit={onSubmit} className='mx-auto'>
        <Stack direction='horizontal' gap={2}>
          <Button type='input' onClick={onChange} value="Mountain" variant="primary" active>Mountain</Button>
          <Button type='input' onClick={onChange} value="Bird" active>Bird</Button>
          <Button type='input' onClick={onChange} value="Food" active>Food</Button>
          <Button type='input' onClick={onChange} value="Anime" active>Anime</Button>
        </Stack>
    </Form>
  );
}
