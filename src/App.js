import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, {useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setprogress] = useState(0)
  
  const changeProgress = (progress) => {
    setprogress(progress)
  }
  const apiKey = process.env.REACT_APP_NEWS_API;
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News changeProgress={changeProgress} apiKey={apiKey} 
                   pageSize={5}
                  country="in"
                  category="general"
                  key="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News changeProgress={changeProgress} apiKey={apiKey} 
                   pageSize={5}
                  country="in"
                  category="business"
                  key="business"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News changeProgress={changeProgress} apiKey={apiKey} 
                   pageSize={5}
                  country="in"
                  category="science"
                  key="science"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News changeProgress={changeProgress} apiKey={apiKey} 
                   pageSize={5}
                  country="in"
                  category="technology"
                  key="technology"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News changeProgress={changeProgress} apiKey={apiKey} 
                   pageSize={5}
                  country="in"
                  category="sports"
                  key="sports"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News changeProgress={changeProgress} apiKey={apiKey} 
                   pageSize={5}
                  country="in"
                  category="entertainment"
                  key="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News changeProgress={changeProgress} apiKey={apiKey} 
                   pageSize={5}
                  country="in"
                  category="health"
                  key="health"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;