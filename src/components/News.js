import React, {useEffect,useState}from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
// document.title= `NewsMania -${props.category}`;
const News=(props)=>{
  const [articles , setarticles]=useState([])
  const [loading , setloading]=useState(true)
  const [page , setpage]=useState(1)
  const [totalResults , setTotalresuls]=useState(0)

  const updateNews = async ()=>{
    props.setProgress(20);
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
     setloading(true)
    let data= await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setarticles(parsedData.articles)
    setloading(false)
    setTotalresuls(parsedData.totalResults)
    props.setProgress(100);
  }
   useEffect(()=> {
     updateNews();
    }, [])  

  
  const fetchMoreData = async () => {
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pagesize}`;
  setpage(page+1)
   let data= await fetch(url);
   let parsedData = await data.json()
   console.log(parsedData)
   setarticles(articles.concat(parsedData.articles))
   setTotalresuls(parsedData.totalResults)
  };
    return (
   <>
        <h1 className='text-center' style={{margin:'17px', marginTop:'85px' }}>NewsMania - Top {props.category} Headlines </h1>
         {loading &&<Spinner/>} 
         <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
          >
            <div className="container">
        <div className="row">
        {articles.map((element)=>{
        return <div className="col-md-4"  key={element.url}>
        <Newsitem title={element.title?element.title.slice(0,59):""} discription={element.description?element.description.slice(0,133):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
    
        </>
    )
  
}
News.defaultProps={
  category:'general',
  country:'in',
  pagesize:8,

}
News.propTypes={
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
}


export default News
