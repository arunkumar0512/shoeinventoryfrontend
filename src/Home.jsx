


import React from 'react';
import './Home.css'; // Import your CSS file

const Home = () => {
  return (
    <div className="homepage">
      <header>
        <div className="header-content">
         
          <q style={{ fontSize: '30px', fontWeight: '700' ,marginLeft:'150px'}}>Your one-stop destination for stylish shoes</q>
        </div>
      </header>

      <section className="featured-products">
        <div className="section-title">
          <h2 style={{marginLeft:'50px',fontSize:'50px'}}>Featured Products</h2>
        </div>

        <div className="product-list">
          {/* Display some featured shoes */}
          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL4Aq_loykgplXElM8NhbyCf6hwotK5-bslj3V_EIymftxAOQ1qfxhlgLagTNuP62TAhA&usqp=CAU" alt="Shoe 1" />
            <h3>Stylish Sneakers</h3>
           
            <button>Available Now!!!</button>
          </div>

          <div className="product-card">
            <img src="data:image/jpeg;base64,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" alt="" />
            <h3>Classic Loafers</h3>
           
            <button>Available Now!!!</button>
          </div>
          {/* Add more product cards as needed */}
        </div>
      </section>

      <section className="new-arrivals">
        <div className="section-title">
          <h2   style={{fontSize:'70px',marginLeft:'100px'}}>New Arrivals</h2>
        </div>
        <div  className='display1'>
        <div className="arrival-list">
          {/* Display some new arrivals */}
          <div className="arrival-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9OnAjGyQYP9cEGDQbWNpzbvS__MyakUZ_UA&usqp=CAU" alt="New Arrival 1" />
            <h3>Trendy Boots</h3>
            
            <button>Available Now!!!</button>
          </div>



          

          <div className="arrival-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWl0SnXzcBfnHRtyqVdC7lV2Jbddvdw53d9iDBCbnDqVHVqVMl18dXpdMC-7XL8QXVxSI&usqp=CAU" alt="" />
            <h3>Casual Shoe</h3>
            
            <button>Available Now!!!</button>
          </div>
          {/* Add more new arrival items as needed */}

          <div className="arrival-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLp5j_3jALslS0BzSydu9nFzQgjwzLxG_6Dw&usqp=CAU" alt="" />
            <h3>Athletic Shoe</h3>
            
            <button>Available Now!!!</button>
          </div>


          <div className="arrival-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_L-VqomDowVuR1Cm4uXKEHEFJxlMBzir7Q&usqp=CAU" alt="" />
            <h3>Formal Shoe</h3>
            
            <button>Available Now!!!</button>
          </div>



        </div>




        </div>

        
      </section>

      <section className="customer-reviews">
        <div className="section-title">
          <h2>Customer Reviews</h2>
        </div>

        <div className="review-list">
          {/* Display some customer reviews */}
          <div className="review">
            <p>"Love the quality and style of their shoes. Highly recommended!"</p>
            <p className="reviewer">- Jane Doe</p>
          </div>

          <div className="review">
            <p>"Fantastic customer service and fast shipping. Will buy again!"</p>
            <p className="reviewer">- John Smith</p>
          </div>
          {/* Add more reviews as needed */}
        </div>
      </section>

      
      <footer  >
        <div className="footer-content">
          <p>&copy; 2024 Shoe Store</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
