import React from 'react'
import SawoLogin from 'sawo-react'
import { useHistory } from 'react-router-dom';
import dotenv from 'dotenv';
dotenv.config({path:'./frontend/.env'});
const LoginPage = () => {
    const history = useHistory();
    console.log(process.env.SAWO_API_KEY);
    function sawoLoginCallback(payload) {
        console.log(payload)
        history.push({
            pathname:'/home'
        })
    }
    
    const sawoConfig = {
        onSuccess: sawoLoginCallback, //required
        identifierType: 'email', //required, must be one of: 'email', 'phone_number_sms',
        apiKey:'e2f72775-cd07-4586-8bdd-e507c2ab6f27', // required, get it from sawo dev.sawolabs.com,
        containerHeight: '230px', // the login container height, default is 230px
    }

    return (
        <div>
            <SawoLogin config={sawoConfig}/>
        </div>
    )
}

export default LoginPage