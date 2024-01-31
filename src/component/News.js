import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }


  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults : 0
    }
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=176e0b661e2e4b14bfaa5a612cb3fbf8&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }
  async componentDidMount() {
    this.updateNews()

  }

  handleNextClick = async () => {


    this.updateNews()
    this.setState({ page: this.state.page + 1 });

  }
  handlePrevClick = async () => {
    this.updateNews()
    this.setState({ page: this.state.page - 1 });
  }


  fetchMoreData = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=176e0b661e2e4b14bfaa5a612cb3fbf8&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1 });
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    })

  };


  render() {
    return (
      <>
        <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
        {/* {this.state.loading && <Spinner />} */}
       
           <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
          
          > 
           <div className="container">
           <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url} >
                <NewsItem url={element.url ? element.url : 'xyz'} source={element.source.name} title={element.title} author={element.author} date={element.publishedAt} imageurl={element.urlToImage ? element.urlToImage : 'data:image/jpeg;base64,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'} description={element.description} />
              </div>

            })}
            </div>
            </div>
            </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className="btn btn-primary"> &larr; previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-primary">Next &rarr;</button>
        </div> */}
      </>
    )
  }
}
