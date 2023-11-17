// core styles are required for all packages
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import Index from './Index';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App() {

  return (
    <MantineProvider theme={theme}>
      <Index />
    </MantineProvider>
  )
}