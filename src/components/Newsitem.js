import React from 'react'
const Newsitem = (props) => {
  let { title, discription, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className='container my-3' style={{ padding: '0 7px' }}>
      <div className="card">
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          right: '0',
          position: 'absolute'

        }}>
          <span className="badge rounded-pill bg-danger text-center">{source}</span>
        </div>
        <img src={imageUrl ? imageUrl : "https://image.freepik.com/free-vector/blue-breaking-news-tv-background_1017-14201.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} Inbox</h5>
          <p className="card-text">{discription}...</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_black " className="btn btn-primary btn-sm btn-dark">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default Newsitem
