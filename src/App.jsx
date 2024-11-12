import React from 'react';
import './App.css'; 

function App() {
  return (
    <div className='container'>
      <header>
        <div className="header-content">
          <div className="search-container">
            <button className="search-button">
              <img 
                src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" 
                alt="Search" 
                className="search-icon"
              />
            </button>
            <input 
              type="text" 
              placeholder="BOOK YOUR ARTIST" 
              className="search-input"
            />
            <div className="menu">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
        <nav>
          {/* <ul> */}
          <button type="button" class="btn btn-light">
            <button type="button" class="btn btn-light">Feed</button>&nbsp;&nbsp;&nbsp;&nbsp; 
            <button type="button" class="btn btn-light">Help Center</button>
            <button type="button" class="btn btn-light">FindMyArtist</button>
            <button type="button" class="btn btn-light">Log In</button>
            </button>
          {/* </ul> */}
        </nav>

        {/* Bootstrap Carousel for Event Samples */}
        <div id="eventCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {["Event 1", "Event 2", "Event 3", "Event 4", "Event 5"].map((event, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img 
                  className="d-block w-100" 
                  src={`https://tse4.mm.bing.net/th?id=OIP.WLfYw_BlcdSQiIq_G5WGDAHaC5&pid=Api&P=0&h=220`} 
                  alt={event}
                />
              </div>
            ))}
          </div>
          {/* Carousel controls */}
          <a className="carousel-control-prev" href="#eventCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#eventCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </header>

      <section className="search-section">
        <div className="search-filter">
          <h3>Search & Filter&nbsp;&nbsp;</h3>
          <input type="text" placeholder="Search for artists..." />
          <button>Search</button>
        </div>

        <div className="recommended">
          <h3>Recommended Artists</h3>
          <div className="artist-cards">
            {[  
              { name: 'Kushagra Raj', imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.KOmDZUAFc0HJ4765UJmgcAHaKw&pid=Api&P=0&h=220' },
              { name: 'Arijit Singh', imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.BhWfTIz2DXMOSrboem0IRwHaEK&pid=Api&P=0&h=220' },
              { name: 'Freddie Leiba', imgSrc: 'https://up.yimg.com/ib/th?id=OIP._NIWTW9brc0oeGbBVeXcFQHaE8&pid=Api&rs=1&c=1&qlt=95&w=170&h=113' },
              { name: 'Jennifer Lopez', imgSrc: 'https://up.yimg.com/ib/th?id=OIP.tQVbOKt1hr7MEydGqQv2lwHaEK&pid=Api&rs=1&c=1&qlt=95&w=215&h=120' },
              { name: 'John Doe', imgSrc: 'https://up.yimg.com/ib/th?id=OIP.02XXqIKUeAk-Nxs0Tju5GAExDM&pid=Api&rs=1&c=1&qlt=95&w=176&h=117' }
            ].map((artist, index) => (
              <div className="card" key={index}>
                <img src={artist.imgSrc} alt={`Artist ${index + 1}`} />
                <p>{artist.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <nav className="bottom-nav">
          <a href="#">Home</a>
          <a href="#">Cart</a>
          <a href="#">Account</a>
          <a href="#">Trailers</a>
        </nav>
      </footer>

      {/* Bootstrap JS and jQuery */}
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </div>
  );
}

export default App;
