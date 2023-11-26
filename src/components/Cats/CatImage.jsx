export default function CatImage({myImgUrl}) {
    return (
        <>
            <img className='card-img-top mx-auto img-fluid mh-75 my-image' src={myImgUrl} style={{marginTop: '50px'}}></img>
            
        </>
    )
}