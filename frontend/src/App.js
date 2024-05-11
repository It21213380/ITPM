import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";

import { DocumentList } from "./components/document-list.component";
import { CreateDocument } from "./components/document-add.component";


import { InquiryList } from './components/inquiry-list.component';
import { CreateInquiry } from './components/inquiry-add.component';

import { AdInquiryList } from './components/adInquiry-list.component';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/document" element={<DocumentList />} />
          <Route exact path="/createDocument" element={<CreateDocument />} />

          

          <Route exact path="/inquiry" element={<InquiryList />} />
          <Route exact path="/createInquiry" element={<CreateInquiry />} />

          <Route exact path="/adInquiry" element={<AdInquiryList />} />

         

        </Routes>
      </Router>
    </div>
  );

}

export default App;
