import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar,Toolbar,IconButton ,Typography,CssBaseline} from '@mui/material';
import './App.css';
import Dappbar from './Dappbar';
import { Paper } from '@mui/material';
import { useState } from 'react';

function App() {  
const [dark,setDark] = useState(true)
const theme = createTheme({
  palette:{
    mode:dark?"dark":'light'
  }
})
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper>
          <div>
            <Dappbar check={dark} change={()=>{setDark(!dark)}}/>
          </div>
        </Paper>
      </ThemeProvider>
  );
}

export default App;