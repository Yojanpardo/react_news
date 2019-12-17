import React from 'react';
import New from './New';
import PropTypes from 'prop-types';

const News = ({news}) =>(
    <div className="row">
        {news.map(noticia => (
            <New
                key = {noticia.url}
                noticia = {noticia}
            />
        ))}
    </div>
);
News.propTypes = {
    news : PropTypes.array.isRequired
}
export default News;