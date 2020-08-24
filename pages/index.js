
import React from 'react';
import Head from 'next/head'
import Header from '../components/header';
import Shoe from '../components/shoe';
import Electronic from '../components/electronic';
import Book from '../components/book';
import fetch from 'isomorphic-unfetch';

function Home({data,data1,data2}) {
  return (
    <div >
      
      <Head>
        <title>eshopsy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Shoe data = {data} />
      <Electronic data1 = {data1} />
      <Book data2 = {data2} />
     
    </div>
  )
}http://localhost:3000/api/shoeApi

Home.getInitialProps = async ()=>{
  const response = await fetch('https://eshopsy.vercel.app/api/shoeApi')
  const response1 = await fetch('https://eshopsy.vercel.app/api/electronicApi')
  const response2 = await fetch('https://eshopsy.vercel.app/api/bookApi')
  const data = await response.json()
  const data1 = await response1.json()
  const data2 = await response2.json()
  return {data,data1,data2}
  
}

export default Home;