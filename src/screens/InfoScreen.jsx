import React from "react";

function InfoScreen({ onClose }) {
  const developer = {
    name: "Juan Gabriel Garcia",
    role: "Full Stack Developer",
    github: "https://github.com/JuanOnly",
    portfolio: "https://juan-portfolio.vercel.app",
    email: "juan@example.com"
  };

  const stack = [
    { name: "React", icon: "⚛️" },
    { name: "Vite", icon: "⚡" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "TMDB API", icon: "🎬" },
    { name: "Axios", icon: "📡" },
    { name: "Vercel", icon: "▲" }
  ];

  const features = [
    "Netflix-style UI with exact color palette",
    "Real movie data from TMDB",
    "Search functionality with live filtering",
    "Genre-based movie filtering",
    "Movie detail modal with similar movies",
    "Mobile-responsive with bottom navigation",
    "Skeleton loading animations",
    "Smooth hover effects and transitions"
  ];

  return (
    <div style={{ 
      paddingTop: '80px', 
      paddingBottom: '100px',
      minHeight: '100vh',
      background: '#141414'
    }}>
      <button
        onClick={onClose}
        style={{
          position: 'fixed',
          top: '80px',
          right: '20px',
          background: '#E50914',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: '600',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'background 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.background = '#b2070f'}
        onMouseLeave={(e) => e.target.style.background = '#E50914'}
      >
        ← Back to Home
      </button>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '800', 
            marginBottom: '10px',
            background: 'linear-gradient(45deg, #E50914, #ff6b6b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Netflix Clone
          </h1>
          <p style={{ color: '#999', fontSize: '1.1rem' }}>
            A modern streaming platform built with passion
          </p>
        </div>

        <div style={{ 
          background: '#181818', 
          borderRadius: '12px', 
          padding: '30px',
          marginBottom: '20px'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>👨‍💻</span> Developer
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #E50914, #ff6b6b)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              fontWeight: 'bold',
              flexShrink: 0
            }}>
              {developer.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600' }}>{developer.name}</h3>
              <p style={{ color: '#999', marginBottom: '10px' }}>{developer.role}</p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a 
                  href={developer.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '8px 16px',
                    background: '#333',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    transition: 'background 0.2s'
                  }}
                >
                  <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  GitHub
                </a>
                <a 
                  href={developer.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '8px 16px',
                    background: '#E50914',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    transition: 'transform 0.2s, background 0.2s'
                  }}
                >
                  <span>🌐</span>
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ 
          background: '#181818', 
          borderRadius: '12px', 
          padding: '30px',
          marginBottom: '20px'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>🛠️</span> Tech Stack
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {stack.map((tech, index) => (
              <div 
                key={index}
                style={{
                  padding: '12px 20px',
                  background: 'linear-gradient(135deg, #252525, #1a1a1a)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.95rem',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(229, 9, 20, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ 
          background: '#181818', 
          borderRadius: '12px', 
          padding: '30px'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>✨</span> Features
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
            {features.map((feature, index) => (
              <div 
                key={index}
                style={{
                  padding: '12px 16px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.95rem',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(229, 9, 20, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }}
              >
                <span style={{ color: '#E50914', fontSize: '0.8rem' }}>▹</span>
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '40px',
          padding: '20px',
          color: '#666',
          fontSize: '0.9rem'
        }}>
          <p>Built with ❤️ using React + Vite</p>
          <p style={{ marginTop: '5px' }}>© 2024 Netflix Clone. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default InfoScreen;
