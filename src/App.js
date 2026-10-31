import React from 'react';
import './style.css';

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px', backgroundColor: '#fff9f0', minHeight: '100vh' }}>
      
      {/* Header Section */}
      <h1 style={{ color: '#ff6b6b', fontSize: '40px', margin: '10px 0' }}>🌟 AistroTalk 🌟</h1>
      <p style={{ fontSize: '18px', color: '#555' }}>Aapka apna AI Astrology Platform</p>
      
      {/* Services Section */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '40px' }}>
        
        {/* Service 1 */}
        <div style={{ backgroundColor: 'white', padding: '20px', border: '1px solid #ffccb3', borderRadius: '10px', width: '250px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#ff6b6b' }}>🔮 Daily Horoscope</h3>
          <p style={{ color: '#666', fontSize: '14px' }}>Janiye aapke sitare aaj kya kehte hain.</p>
          <button style={{ marginTop: '15px', padding: '10px 20px', backgroundColor: '#ff6b6b', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>Read Now</button>
        </div>

        {/* Service 2 */}
        <div style={{ backgroundColor: 'white', padding: '20px', border: '1px solid #ffccb3', borderRadius: '10px', width: '250px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#ff6b6b' }}>👨‍⚕️ Chat with Astrologer</h3>
          <p style={{ color: '#666', fontSize: '14px' }}>Hamare expert astrologers se turant baat karein.</p>
          <button style={{ marginTop: '15px', padding: '10px 20px', backgroundColor: '#ff6b6b', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>Chat Now</button>
        </div>

      </div>
      
    </div>
  );
}