import React from 'react'
import "./Contact.css";

export const Contact = () => {
  return (
<>
<div className="fulbody">


<div class="container1">
    <h1>Contact Us</h1>
    <div class="Main-1">
        <img class="logo" src="https://png.pngtree.com/template/20200227/ourmid/pngtree-real-estate-logo-design-template-image_353484.jpg" alt="logo" />
   <p >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
        vel quam eaque provident ea sit atque nesciunt voluptates,
        repellat iusto.br <br/> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
        vel quam eaque provident ea sit atque nesciunt voluptates,
        repellat iusto.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
        vel quam eaque provident ea sit atque nesciunt voluptates,
        repellat iusto.
      </p></div>
</div>
<div class="container2">
    
   <div class="left">

       <form>
           <h3>Get In Touch!!!</h3>
           
          
           
           <input type="Username" placeholder="Enter Name "/> <br />
           <input type="email"  placeholder="Enter Email Id "/> <br />
           <input type="text"  placeholder="Contact number "/>
           <br />
           <input type="text" id="Message" placeholder="Message "/>
           <br />
           <button className='button' type="submit">Send</button>
        </form>
    </div>




    <div id="col22" className="Cols">
        <h3 className='h3'>Office Location</h3>
<p className='p'>kharghar 
sector 34 ,Taloja, <br/>
navi mumbai, 410208. <br/>
youremail@gmail.com</p>
<h5 className='h5'>+91 55652 88552</h5>
   
      <div className="social">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-whatsapp"></i>
        </div>
    </div>
</div>
    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7221654120385!2d73.06358547466414!3d19.031960653354723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c26aea4e658f%3A0x93f90cf53f1b5868!2sKharghar%20Three%20Monkey%20Point!5e0!3m2!1sen!2sin!4v1704812440106!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>          
</>
  )
}
