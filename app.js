import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createRouter, createWebHistory } from 'vue-router';

function navigate(page) {
    const content = document.getElementById('content');

    const routes = {
        'home': '<h1>Home Page</h1><p>Welcome to the home page!</p>',
        'about': '<h1>About Page</h1><p>Learn more about us here.</p>',
        'contact': '<h1>Contact Page</h1><p>Reach out to us here.</p>',
    };

    content.innerHTML = routes[page] || '<h1>404</h1><p>Page not found.</p>';

    // Update the URL without reloading the page
    window.history.pushState({ page }, '', `#${page}`);
}

// Handle browser navigation (back/forward)
window.onpopstate = function(event) {
    const page = window.location.hash.replace('#', '') || 'home';
    navigate(page);
};

// Load default page on initial load
window.onload = function() {
    const page = window.location.hash.replace('#', '') || 'home';
    navigate(page);

    
};

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      document.getElementById('content').innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error('Error:', error));
    
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      document.getElementById('content').innerHTML = JSON.stringify(response.data);
    });


    function App() {
        return (
          <Router>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </nav>
            <Route path="/" exact component={() => <h1>Home Page</h1>} />
            <Route path="/about" component={() => <h1>About Page</h1>} />
          </Router>
        );
      }

      const routes = [
        { path: '/', component: Home },
        { path: '/about', component: About }
      ];
      const router = createRouter({
        history: createWebHistory(),
        routes,
      });
      
      export default router;