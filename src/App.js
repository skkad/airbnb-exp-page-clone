import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Header from './Components/Header';
import OptionsTab from './Components/OptionsTab';
import SectionOne from './Components/SectionOne';
import TopSellerSection from './Components/TopSellerSection';

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
          <OptionsTab/>
          <TopSellerSection/>
        </Box>
      </Box>
    </>
  );
}

export default App;
