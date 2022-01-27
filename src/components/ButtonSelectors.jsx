import React from 'react';
import { Form, Button, Stack} from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function ButtonSelectors({onSubmit, onChange, theme}) {
  return (
    <Form onSubmit={onSubmit} className='mx-auto'>
        <Stack direction='horizontal' gap={2}>

          <Button 
            type='input' 
            onClick={onChange} 
            variant={theme.body === '#fff' ? 'outline-dark' : 'primary'} 
            value="Birthday" 
            size='sm'
            active>
            Birthday
          </Button>{' '}

          <Button 
            type='input' 
            onClick={onChange} 
            variant={theme.body === '#fff' ? 'outline-dark' : 'primary'} 
            value="Dog" 
            size='sm'
            active>
              Dog
          </Button>

          <Button 
            type='input' 
            onClick={onChange} 
            variant={theme.body === '#fff' ? 'outline-dark' : 'primary'} 
            value="Food" 
            size='sm'
            active>
              Food
          </Button>

          <Button 
            type='input' 
            onClick={onChange} 
            variant={theme.body === '#fff' ? 'outline-dark' : 'primary'} 
            value="Anime" 
            size='sm'
            active>
              Anime
          </Button>

          <Link to="/trending">
            <Button 
              size='sm' 
              variant={theme.body === '#fff' ? 'outline-dark' : 'primary'}
              active>
                Trend
            </Button>
          </Link>

        </Stack>
    </Form>
  );
}
