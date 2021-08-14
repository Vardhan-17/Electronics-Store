import React from 'react';

function Carousel(){
    return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner" >
            <div className="carousel-item active" style={{height:"500px"}}>
            <img src="https://images.unsplash.com/photo-1465479423260-c4afc24172c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" className="d-block w-100 h-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
            </div>
            <div className="carousel-item" style={{height:"500px"}}>
            <img src="https://wallpaperaccess.com/full/1910636.jpg" className="d-block w-100 h-100"  alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
            </div>
            </div>
            <div className="carousel-item" style={{height:"500px"}}>
            <img src="https://images.unsplash.com/photo-1461151304267-38535e780c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVsZXZpc2lvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" className="d-block w-100 h-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>);
}

export default React.memo(Carousel);