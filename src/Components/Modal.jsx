import React from 'react';

class Modal extends React.Component{
    handleCross()
    {
        this.props.handleClose();
    }

    downloadImageFromURL = (imageUrl) =>
    {
        console.log(this);
        var globalThis = this;
        fetch(imageUrl, {
            method: "GET",
            headers: {}
          })
            .then(response => {
              response.arrayBuffer().then(function(buffer) {
                const url = window.URL.createObjectURL(new Blob([buffer]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", `${globalThis.props.title}.png`); //or any other extension
                document.body.appendChild(link);
                link.click(); 
              });
            })
            .catch(err => {
              console.log(err);
            });
    }
    
    handleDownload()
    {
       this.downloadImageFromURL(this.props.imageUrl); 
    }
    render()
    {
        return (    
            <div className="modal">
                           
                <span className="close" onClick={this.handleCross.bind(this)}>&times;</span>
                <div className="caption" onClick={this.handleDownload.bind(this)}>Download</div>
                <p className="photo-footer">Image by <a className="user_name" href={this.props.portfolio} target="_blank" rel="noopener noreferrer">{this.props.userName}</a> with 💝 </p>
                <div className="image-center">
                <img style={{height : this.props.imgHeight, width: this.props.imgWidth}} src={this.props.imageUrl} alt="data not avail"/>   
                </div>                    
            </div>
        );
    }
}

export default Modal;