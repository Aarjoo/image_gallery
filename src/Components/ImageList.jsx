import React from 'react';
import Images from './Images';

class ImageList extends React.Component{

    render()
    {
        return (
            <div className="image-list">
               {this.props.images.map((image) => {
                   return (
                    <Images 
                        key={image.id}
                        id={image.id}
                        url={image.urls.regular}
                        alternative={image.alt_description}
                        userName={image.user.username}
                        portfolio={image.user.portfolio_url}
                    />
                   )
               })} 
            </div>          
        )
    }
}

export default ImageList;