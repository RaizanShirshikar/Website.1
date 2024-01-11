import React from 'react'
  import "./Header.css";
import { Body } from './Body';

export const Header = () => {
  return (
      

        <>
   <section class="sec1">
    <img src="https://media.istockphoto.com/id/488120139/photo/modern-real-estate.jpg?s=612x612&w=0&k=20&c=88jk1VLSoYboMmLUx173sHs_XrZ9pH21as8lC7WINQs=" alt=""/>

    <h1>Heading of content</h1>

    <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam et ex autem, dignissimos alias, totam minus perspiciatis dolor illum vel reprehenderit suscipit quaerat nobis, quasi esse molestias. 
     
        <br/>Unde at perspiciatis dolorum harum expedita accusantium consequatur asperiores ratione hic suscipit cupiditate exercitationem natus, repellat modi deleniti neque iure mollitia ea sapiente facilis assumenda qui porro. Laudantium, quasi!"</p>

</section>

     

<div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button> 
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
      <img src="https://www.prajapatigroup.com/images/opal/podium-view.jpg" class="d-block w-100" alt=""/>
      
        <div class="carousel-caption  d-md-block">
          <h5 className='h5'>Podium view</h5>
          
        </div>
      </div>
      <div class="carousel-item">
      <img src="https://www.prajapatigroup.com/images/opal/Closer-view-to-podium-view.jpg" class="d-block w-100" alt=""/>
    
        <div class="carousel-caption  d-md-block">
          <h5>Closer view of Podium</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://www.prajapatigroup.com/images/opal/Arial-view-to-the-podium.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption  d-md-block">
          <h5>Arial view of Podium</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://www.prajapatigroup.com/images/news/video_thumbnails/ornate/amenities/Kids-Play-Area.jpg"class="d-block w-100" alt="..."/>
        <div class="carousel-caption  d-md-block">
          <h5>Kids play Area</h5>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

<Body/>

  </>
    
  )
}
