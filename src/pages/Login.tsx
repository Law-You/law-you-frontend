import React from 'react';

const Login = () => (
  <div style={{ padding: '2rem', maxWidth: 400, margin: '0 auto', fontFamily: 'Inter, Arial, sans-serif' }}>
    <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16 }}>Login</h1>
    <form>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: 4 }}>Email</label>
        <input id="email" type="email" style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: 4 }}>Password</label>
        <input id="password" type="password" style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
      </div>
      <button type="submit" style={{ padding: '10px 24px', borderRadius: 6, background: '#2563eb', color: '#fff', border: 'none', fontWeight: 600, fontSize: '1rem' }}>
        Login
      </button>
    </form>
  </div>
);

export default Login;
