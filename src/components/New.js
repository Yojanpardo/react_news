import React from 'react';

const New = ({noticia}) => {

    const {urlToImage, url, title, description, source } = noticia

    const image = (urlToImage) ? 
        <div className="card-image">
            <img src={urlToImage} alt={title}/>
            <span className="card-title">{source.name}</span>
        </div>
    : null;

    return(
        <div className="col s12 m6 l4">
            <div className="card">
                {image}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} rel="noopener noreferrer" target="_blank" className="waves-effect waves-light btn">
                        View new
                    </a>
                </div>
            </div>
        </div>
    );
}
export default New;