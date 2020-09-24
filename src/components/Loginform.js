import React,{PureComponent,ReactFragment} from 'react';
import {Form,TextField,Checkbox,Link,Button, Grid,Text} from '@adobe/react-spectrum';

class LoginForm extends PureComponent{

    render(){
        return(
         
          <Form  isQuiet width="80%" marginStart="single-line-height" >
              <Text><h2>ACCOUNT LOGIN</h2></Text>
            <TextField label="Email" type="email" placeholder="abc@adobe.com" width="90%" marginStart="single-line-height"/>
            <TextField label="Password" type="password"placeholder="1234"  width="90%" marginStart="single-line-height" />
             
             <Grid>
             
                <Checkbox marginStart="single-line-height">Remember me</Checkbox>
                <Link marginStart="single-line-height"><a href="#" > Forgot Password?</a></Link>
            
            </Grid>
            <Button variant="cta" type="submit" 
            width="90%" 
            marginStart="single-line-height"> 
                Login
            </Button>
            
            <Grid>
                <Text justifySelf="center">
                    Are you new ?
                    <Link><a href="#" > Sign up</a></Link>
                </Text>
            </Grid>
            
         </Form>
         
        );
    }
}
export default LoginForm;