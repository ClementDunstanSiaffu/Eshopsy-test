

import React from 'react';
import Head from 'next/head'
import HeaderLogin from '../components/header-login';
import LoginCom from '../components/loginCom';
import FormLogin from '../components/formLogin';

function Login() {
  return (
    <div >
      
      <Head>
        <title>eshopsy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <HeaderLogin />
      <LoginCom />
      <FormLogin />
      
     
    </div>
  )
}

export default Login;