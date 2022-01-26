import ButtonSelectors from "./ButtonSelectors";
import SearchBar from "./SearchBar"

import Stack from 'react-bootstrap/Stack'

export default function Header({onSubmit, onChange, searchQuery}) {
  return (
      <Stack gap={3} className='m-3'>
        <h1 className='mx-auto'>GiphGround</h1>

        <SearchBar 
          onSubmit={onSubmit}
          onChange={onChange}
          searchQuery={searchQuery}
        />

        <ButtonSelectors
          onSubmit={onSubmit}
          onChange={onChange}
        />
      </Stack>
  );
}
