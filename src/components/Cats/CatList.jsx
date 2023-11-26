import CatImage from "./CatImage";
import './CatList.css';

export default function CatList({myCatList}) {
    return (
        <div className="container pt-5 myContainer">
    
                <ul className="row g-2" id='pictures'> 
                    {myCatList.map(cat => (
                        <li id='card-container' className='col-lg-3 col-md-4 col-sm-6 col-12' key={cat.id}>
                            <div id='div-card' className='card bg-light flex-column shadow'>
                                
                                <CatImage imageId='image' myImgUrl={cat.url}/>
                                <div 
                                    id='div-body-card' 
                                    className='card-body d-flex align-items-end'>
                                    Picture Id: {cat.id}<br></br>Picture Height: {cat.pictureHeight}
                                </div>
                                
                            </div>
                        </li>
                    ))}
                </ul>
          
      </div>
    )
}