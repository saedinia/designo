import Image from "next/image";
import React from "react";
import heroImage from "@/public/images/home/image-hero-phone.png";

const Home = () => {
  return (
    <main>
      <div className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <p>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <button className="btn btn-dark">Learn more</button>
          </div>
          <div className="hero-image">
            <Image src={heroImage} alt="" />
          </div>
        </div>
      </div>
      {/* <h1>Hello World!</h1>
      <h2>Hello World!</h2>
      <h3>Hello World!</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        numquam est odit, a id autem excepturi tempora, consectetur voluptates
        fugit eum temporibus atque corrupti voluptatibus magni. Iste delectus
        maiores ratione. Voluptas atque quasi, dolor architecto ut molestias
        explicabo aspernatur illo labore repellendus quos beatae cumque aperiam
        illum mollitia alias officiis modi nesciunt amet similique totam.
        Laudantium inventore vero eaque amet. Asperiores accusantium aut soluta.
        Facere veritatis ea minus, quia eos illum est perferendis perspiciatis
        soluta, tenetur optio voluptate voluptas assumenda voluptatem natus
        accusantium voluptates omnis quos non error autem! Delectus!
      </p>

      <button className="btn btn-dark">Learn more</button>

      <button className="btn">Learn more</button> */}
    </main>
  );
};

export default Home;
