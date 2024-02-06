import React, { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./style.css/Home.css"
import { Link, useSearchParams } from 'react-router-dom'

// import testdata from './testdata.json'
import bnnews from'./breaking_news.jpg'
export default function Home() {

const [searchParams] = useSearchParams();
const category = searchParams.get('category')

const [newsData, setNewsData] = useState([])

async function apiData(){
  
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category?category:"general"}&apiKey=176e0b661e2e4b14bfaa5a612cb3fbf8`
  let data = await fetch(url);
  let parsedData = await data.json();
  let newsItem =await parsedData.articles
  setNewsData(newsItem)
  console.log('fn call')
}
useEffect(() => {
  apiData();

 }, [category]);


 

  
  return (
    <>
      <div className="home">

        {newsData ? newsData.map(data=>{
          return(
            <div className='card' key={uuidv4()}>
              <img key={uuidv4()} src={data.urlToImage?data.urlToImage:bnnews} alt="" />
              <h1  key={uuidv4()}>{data.title?data.title.substring(0,47):"Title"}...</h1>
              <p  key={uuidv4()}>{data.description?data.description.substring(0,200):"Description"}...</p>
              <small className='data_date' key={uuidv4()}>by <b>{data.author ? data.author : 'Unknown Source'} </b><br/> at {new Date(data.publishedAt).toDateString()}</small>
              <button className="btn"><a href={data.url} target='_blank'>Read More...</a></button>
            </div> 
            
          )
        }):"No Data Found"}
      </div>
    </>

  )
}
