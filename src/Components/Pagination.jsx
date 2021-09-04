import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPhoto, fetchPages} from '../Actions';
import ImageList from './ImageList';

const Pagination = (props) => {
    const[current_page, setPageNumber] = useState(1);

    useEffect(() => {
           
        getTotalPagesNumber();
        setPageNumber(1); 
        if(current_page === 1)
        {
            getPaginatedData();
            window.scrollTo({ behavior: 'smooth', top: '0px' });
        }
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [props.query]);

     
    useEffect(() => {
        getPaginatedData();
        window.scrollTo({ behavior: 'smooth', top: '0px' });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [current_page]);

      
     const goToNextPage = () => {
        setPageNumber(current_page+1);
     }
   
     const goToPreviousPage = () => {
        setPageNumber(current_page-1);
     }
   
     const changePage = (event) => {
        const pageNumber = Number(event.target.textContent);
        setPageNumber(pageNumber);
     }
   
     const getPaginatedData = () => {
        
         props.fetchPhoto(props.query, current_page);
     };
   
     const getTotalPagesNumber = () => {
        
        props.fetchPages(props.query);
    };
  
     const getPaginationGroup = () => {
        let start = Math.floor((current_page - 1) / 5) * 5;
        return new Array(5).fill().map((_, idx) => start + idx + 1);
     };
    
        return(
        <div> 
            
            <ImageList images={props.images}/>
            <div className="pagination">       
                <button
                    onClick={goToPreviousPage}
                    className={`prev ${current_page === 1 ? 'disabled' : ''}`}>
                    prev
                </button>
                {getPaginationGroup().map((item, index) => (
                <button
                    key={index}
                    onClick={changePage}
                    className={`paginationItem ${current_page === item ? 'active' : null}`}>
                    <span>{item}</span>
                </button>
                ))}
                <button
                    onClick={goToNextPage}
                    className={`next ${current_page === 20 ? 'disabled' : ''}`}>
                    next
                </button>
        </div>      
    </div>
    )
    
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        pages:state.pages,
        images: state.images
    
    }
}

export default connect(mapStateToProps,{fetchPhoto, fetchPages})(Pagination);