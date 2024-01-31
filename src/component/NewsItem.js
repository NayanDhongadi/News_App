import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageurl, url, author, date, source } = this.props;
        return (
            <div className='container my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageurl} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary"> By {author ? author : 'Unknown Source'} on {new Date(date).toGMTString()}</small></p>


                        <span className="position-absolute top-0  start-100 translate-middle badge rounded-pill bg-success" style = {{fontSize:'8px',zIndex:"1",top:"20px"}}>
                            source - {source}
                        </span>



                        <a href={url} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
