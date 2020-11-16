import React from 'react';
import './styles.css';

function Stats({stats}) {
    if(!stats) {
        return <span className="stats">Loading ...</span>
    }
    return (
        <>
        <span className="stats">
            {stats.error && '😵 Error!'}    
            {stats.isLoading && '😳 Loading...'}
            {stats.downloads !== null && `📩 ${JSON.stringify(stats.downloads.total)}`}    
        </span>
        <span className="likes">
            {stats.error && '😵 Error!'}    
            {stats.isLoading && '😳 Loading...'}
            {stats.downloads !== null && `👍 ${JSON.stringify(stats.likes.total)}`}    
        </span>
        <span className="views">
            {stats.error && '😵 Error!'}    
            {stats.isLoading && '😳 Loading...'}
            {stats.downloads !== null && `👁 ${JSON.stringify(stats.views.total)}`}    
        </span>
        </>
    )
}

export default Stats;
