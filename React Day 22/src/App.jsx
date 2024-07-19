import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Wrapper from './Components/Wrapper';
import TopbarSearch from './Components/TopbarSearch';
import PageContent from './Components/PageContent';
import Footer from './Components/Footer';
import Logout from './Components/Logout';

function App() {
  return (
    <div id='wrapper'>
        <Wrapper />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id='content'>
                <TopbarSearch />
                <PageContent />
            </div>
            <Footer />
        </div>
        <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"></i>
        </a>
        <Logout />
    </div>
    
  )
}

export default App;