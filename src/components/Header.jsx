import ButtonSelectors from "./ButtonSelectors";
import SearchBar from "./SearchBar"

import { Button } from 'react-bootstrap';
import { WiMoonAltWaningCrescent6, WiMoonAltWaningGibbous2 } from "react-icons/wi";

// Bootstrap
import Stack from 'react-bootstrap/Stack'

export default function Header({onSubmit, onChange, searchQuery, themeToggle, theme}) {
  return (
      <Stack gap={3} className='m-3'>

        <Button 
          className='mx-auto' 
          onClick={themeToggle} 
          style={{width: '140px'}} 
          size='sm'
          variant={theme.body === '#fff' ? 'outline-dark' : 'primary'}>
            {/* conditional title */}
            {theme.body === '#fff' ? 'Dark' : 'Light'} Mode
            {/* conditional svg icon */}
            {theme.body === '#fff' ? 
            <WiMoonAltWaningGibbous2 style={{fontSize: '24px'}}/> : 
            <WiMoonAltWaningCrescent6 style={{fontSize: '24px'}}/>}
        </Button>

        <h1 className='mx-auto' style={
            {
              color: theme.fontColor, 
              letterSpacing: '2.5px',
              fontFamily: 'Calistoga'
          }}>
            GiphGround
        </h1>

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

      </Stack>
  );
}
