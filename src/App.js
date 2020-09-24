import React from 'react';
import logo from './logo.svg';
import {Provider,defaultTheme,Grid,View} from '@adobe/react-spectrum';
import './App.css';
import LoginForm from './components/Loginform';

function App() {
  return (
      <div className="App">
      <Provider theme={defaultTheme} >

        <Grid areas={['content']}>
          
          <View 
          gridArea="content"
          borderWidth="thin" 
          borderColor="dark" 
          height="auto" 
          width="50%"
          justifySelf ="center"
          backgroundColor="static-white"
          margin="size-1600"> 
            <LoginForm />
          </View>
          
        </Grid>
        
      </Provider>
    </div>
  );
}

export default App;
