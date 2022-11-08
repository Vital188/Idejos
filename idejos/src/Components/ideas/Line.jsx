

function Line({ ideas }) {

    return (
        <>
        
        <li className="list-group-item">
            <div className="line__content__info" style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <div className="line__content__title">
            TITLE:  {ideas.title}
          </div>
                        {ideas.image ? <div className='img-bin'>
                            <img src={ideas.image} alt={ideas.title}>
                            </img>
                        </div> : <span className="red-image">No image</span>}
                        
                    <div className="line__content__info">
                   <b> Project price:</b> {ideas.price}
                    </div>
                    <b>Description:</b>
                    <div className="line__content__info" style={{
                            width: '300px',
                            height: 'auto'
                      }}>
                        {ideas.post} 
                      
                      
                    </div>
                    </div>
            <div className="line" style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                flexWrap: 'wrap'
            }}>
                <div className="line__content" style={{
                    flexDirection: 'column'
                }}>
                    
                    
                    
                    
               </div>
            </div>
        </li></>
    )
}

export default Line;