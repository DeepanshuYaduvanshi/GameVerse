import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      color="current"
      pos={'fixed'} // absolute + sticky --> dark or light mode button stick ho jayega uper me
      top={'4'}    // margin 4 from top  // 1 = 4px  so 4 = 16px
      right={'4'}  // margin 4 from right
      zIndex={'overlay'} // sabke uper rhe
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;