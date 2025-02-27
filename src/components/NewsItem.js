import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-4">
                <div className="card">
                    <div style={{ display: "flex", position: "absolute", justifyContent: "flex-end", right: "0" }}>
                        <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={!imageUrl ? "https://c.ndtvimg.com/2024-04/v2qv722c_solar-eclipse_625x300_04_April_24.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewsItem
