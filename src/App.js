import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Header from './Components/Header';
import SectionOne from './Components/SectionOne';

function App() {
  return (
    <>
      <CssBaseline/>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Box>
          {/* <h4>hekl jyngmk</h4> */}
          <Header/>
          <SectionOne/>
        </Box>
      </Box>
    </>
  );
}

export default App;
