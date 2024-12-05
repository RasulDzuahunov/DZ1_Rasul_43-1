import logo from './logo.svg';
import './App.css';

import React from 'react';

// Title Component
function Title({ text }) {
  return <h1>{text}</h1>;
}

// Text Component
function Text() {
  return <p>Lorem ipsum dolor sit.</p>;
}

// Header Component
function Header() {
  return (
    <div>
      <Title text="Header Title" />
      <h1>I am Header Component</h1>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <div>
      <Title text="Footer Title" />
      <h1>I am Footer Component</h1>
    </div>
  );
}

// App Component
function App() {
  return (
    <div className="App">
      <Header />
      <Title text="App Title" />
      <h1>Hello world</h1>
      <Footer />
    </div>
  );
}

export default App;

