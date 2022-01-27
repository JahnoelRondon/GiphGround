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
          theme={theme}
        />

        <Button 
          className='mx-auto' 
          onClick={themeToggle} 
          style={{width: '100px'}} 
          variant={theme.body === '#fff' ? 'outline-dark' : 'primary'}>
            {/* conditional title */}
            {theme.body === '#fff' ? 'Dark' : 'Light'} 
            {/* conditional svg icon */}
            {theme.body === '#fff' ? 
            <WiMoonAltWaningGibbous2 style={{fontSize: '20px'}}/> : 
            <WiMoonAltWaningCrescent6 style={{fontSize: '20px'}}/>}
        </Button>

      </Stack>
  );
}
