import React, { useState, useEffect, useCallback } from "react";
import Banner from "../Banner";
import Nav from "../Nav";
import requests from "../Requests";
import Row from "../Row";
import MovieModal from "../MovieModal";
import BottomNav from "../BottomNav";
import InfoScreen from "./InfoScreen";

const GENRES = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Sci-Fi" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

function HomeScreen() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGenre, setActiveGenre] = useState(null);
  const [activeTab, setActiveTab] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      setActiveGenre(null);
    }
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const handleGenreClick = (genreId) => {
    if (activeGenre === genreId) {
      setActiveGenre(null);
    } else {
      setActiveGenre(genreId);
      setSearchQuery("");
    }
  };

  const handleAboutClick = () => {
    setActiveTab('info');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    if (activeTab === 'search') {
      return (
        <div style={{ padding: '80px 20px 20px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Search Results</h2>
          {searchQuery ? (
            <Row
              title={`Results for "${searchQuery}"`}
              fetchURL={`/search/multi?api_key=${requests.apiKey}&query=${searchQuery}`}
              onMovieClick={handleMovieClick}
            />
          ) : (
            <p style={{ color: '#666' }}>Start typing to search for movies and TV shows</p>
          )}
        </div>
      );
    }

    if (activeTab === 'info') {
      return <InfoScreen />;
    }

    if (activeTab === 'coming') {
      return (
        <div style={{ padding: '80px 20px 20px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Coming Soon</h2>
          <Row
            title="Upcoming Releases"
            fetchURL={`/movie/upcoming?api_key=${requests.apiKey}`}
            onMovieClick={handleMovieClick}
          />
        </div>
      );
    }

    if (activeTab === 'downloads') {
      return (
        <div style={{ padding: '80px 20px 20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Downloads</h2>
          <div style={{ color: '#666', marginTop: '50px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📥</div>
            <p>Download your favorites to watch offline</p>
            <button 
              onClick={() => showToast('Downloads feature coming soon!')}
              style={{
                marginTop: '20px',
                padding: '12px 24px',
                background: '#E50914',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Find Downloads
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="homeScreen">
        <Nav onSearch={handleSearch} onAboutClick={handleAboutClick} />
        
        <Banner onMovieClick={handleMovieClick} />
        
        {activeTab === 'home' && (
          <>
            <div 
              onClick={handleAboutClick}
              style={{
                margin: '20px',
                padding: '30px',
                background: 'linear-gradient(135deg, #E50914 0%, #b2070f 100%)',
                borderRadius: '12px',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(229, 9, 20, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '10px' }}>
                👨‍💻 Meet the Developer
              </h2>
              <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '15px' }}>
                Built by Juan Gabriel Garcia • React + Vite + TMDB
              </p>
              <span style={{ 
                background: 'white', 
                color: '#E50914', 
                padding: '10px 24px', 
                borderRadius: '4px',
                fontWeight: '700',
                fontSize: '0.95rem'
              }}>
                Learn More →
              </span>
            </div>

            <div className="genre__chips" style={{ paddingTop: '0px' }}>
              {GENRES.slice(0, 10).map((genre) => (
                <button
                  key={genre.id}
                  className={`genre__chip ${activeGenre === genre.id ? 'genre__chip--active' : ''}`}
                  onClick={() => handleGenreClick(genre.id)}
                >
                  {genre.name}
                </button>
              ))}
            </div>

            {searchQuery ? (
              <Row
                title={`Search Results for "${searchQuery}"`}
                fetchURL={`/search/multi?api_key=${requests.apiKey}&query=${searchQuery}`}
                onMovieClick={handleMovieClick}
                filterGenre={activeGenre}
              />
            ) : activeGenre ? (
              <>
                <Row
                  title="NETFLIX ORIGINALS"
                  fetchURL={requests.fetchNetflixOriginals}
                  isLargeRow={true}
                  onMovieClick={handleMovieClick}
                  filterGenre={activeGenre}
                />
                <Row
                  title="Trending Now"
                  fetchURL={requests.fetchTrending}
                  onMovieClick={handleMovieClick}
                  filterGenre={activeGenre}
                />
                <Row
                  title="Top Rated"
                  fetchURL={requests.fetchTopRated}
                  onMovieClick={handleMovieClick}
                  filterGenre={activeGenre}
                />
              </>
            ) : (
              <>
                <Row
                  title="NETFLIX ORIGINALS"
                  fetchURL={requests.fetchNetflixOriginals}
                  isLargeRow={true}
                  onMovieClick={handleMovieClick}
                />
                <Row
                  title="Trending Now"
                  fetchURL={requests.fetchTrending}
                  onMovieClick={handleMovieClick}
                />
                <Row
                  title="Top Rated"
                  fetchURL={requests.fetchTopRated}
                  onMovieClick={handleMovieClick}
                />
                <Row
                  title="Action Movies"
                  fetchURL={requests.fetchActionMovies}
                  onMovieClick={handleMovieClick}
                />
                <Row
                  title="Comedy Movies"
                  fetchURL={requests.fetchComedyMovies}
                  onMovieClick={handleMovieClick}
                />
                <Row
                  title="Horror Movies"
                  fetchURL={requests.fetchHorrorMovies}
                  onMovieClick={handleMovieClick}
                />
                <Row
                  title="Romance Movies"
                  fetchURL={requests.fetchRomanceMovies}
                  onMovieClick={handleMovieClick}
                />
                <Row
                  title="Documentaries"
                  fetchURL={requests.fetchDocumentaries}
                  onMovieClick={handleMovieClick}
                />
              </>
            )}
          </>
        )}
        
        <button
          className={`scrollToTop ${showScrollTop ? 'scrollToTop--visible' : ''}`}
          onClick={scrollToTop}
        >
          ↑
        </button>
        
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
        
        {selectedMovie && (
          <MovieModal movie={selectedMovie} onClose={closeModal} />
        )}
        
        {toast && <div className="toast">{toast}</div>}
      </div>
    );
  };

  return renderContent();
}

export default HomeScreen;
