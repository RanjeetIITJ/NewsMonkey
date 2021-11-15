import React from 'react'

const NewsItem=(props)=> {
    
        let { title, description, imageUrl,newsUrl,author,date,source} = props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl?"https://bitcoinmagazine.com/.image/t_share/MTgyMzg4OTgxOTQ4NzUzMjI0/fiat.jpg":imageUrl} 

                    className="card-img-top" alt="..." />
                    <div className="card-body">
                    {/* <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"50%",zIndex:1}}>{source}</span> */}
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        <span className="position-absolute badge bg-danger" style={{left:"50%",fontSize:"14px"}}>{source}</span>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
