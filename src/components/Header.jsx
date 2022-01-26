import ButtonSelectors from "./ButtonSelectors";
import SearchBar from "./SearchBar"

import { Button } from 'react-bootstrap';
import { WiMoonAltWaningCrescent6, WiMoonAltWaningGibbous2 } from "react-icons/wi";

// Bootstrap
import Stack from 'react-bootstrap/Stack'

export default function Header({onSubmit, onChange, searchQuery, themeToggle, theme}) {
  return (
      <Stack gap={3} className='m-3'>

        <h1 className='mx-auto' style={{color: theme.fontColor}}>GiphGround</h1>

        <SearchBar 
          onSubmit={onSubmit}
          onChange={onChange}
          searchQuery={searchQuery}
        />

        <ButtonSelectors
          onSubmit={onSubmit}
          onChange={onChange}
        />

        <Button className='mx-auto' onClick={themeToggle} style={{width: '200px'}}>
          Theme {theme.body === '#fff' ? <WiMoonAltWaningGibbous2/> : <WiMoonAltWaningCrescent6/>}
        </Button>

      </Stack>
  );
}
