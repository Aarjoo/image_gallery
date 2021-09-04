import React from 'react';
import Modal from './Modal';

class Images extends React.Component
{
    constructor(props)
    {
        super(props);
        this.imageRef = React.createRef();
        this.state= {
            spans:0,
            fullPreview:false
        }
    }

    componentDidMount()
    {
        this.imageRef.current.addEventListener('load', this.getImageHeight.bind(this));
    }

    getImageHeight()
    {
        const imageHeight = this.imageRef.current.clientHeight;
        const spans = Math.ceil(imageHeight/9);
        this.setState({spans});
    }

    handlePreview()
    {
        this.setState((prev) => {
            return {fullPreview : !prev.fullPreview}
        });     
    }
    render()
    {
        return(
            <>
                <div style={{gridRowEnd:`span ${this.state.spans}`}}>       
                    <div className="image-div">                
                        <img 
                            className="image"
                            ref={this.imageRef} 
                            src={this.props.url} 
                            alt={this.props.alternative}       
                        />  
                        <div 
                            className="image-overlay" 
                            onClick={this.handlePreview.bind(this)}>                        
                        </div>                        
                    </div>          
                </div>
                {this.state.fullPreview?
                    <Modal 
                        imgHeight={this.imageRef.current.clientHeight}
                        imgidth={this.imageRef.current.clientWidth}
                        imageUrl={this.props.url}
                        id={this.props.id}
                        handleClose={this.handlePreview.bind(this)}
                        title={this.props.alternative}
                        userName={this.props.userName}
                        portfolio={this.props.portfolio}
                        
                    /> : 
                    null}      
            </>
        )
    }
}
export default Images;