import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react'; // chakra provider me wrap krna h apni app ko bs  // default theme bhi le rhe from chakra ui so that we can apply default theme
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher';

// colorModeSwitcher se hm dark mode or light mode me switch kr payenge
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    {/* wrapping the app in chakra prodvider so that we can use chakra component library basically baat itni ki chakraprovider me wrap krke hm chakraprovider ko use kr payenge for css isko man lo tailwind css ka bhai , and jaise bootstrap se copy paste krte the but isme bhi vhi h bs css iski badiya h */}
    {/* theme use kr rhe chakra ui ki , jo bhi h iski theme me */}
    <ColorModeScript />  
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </StrictMode>
);