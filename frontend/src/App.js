import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';

// components
import DataProvider from './context/DataProvider';
import Header from './components/header/Header';
import Home from './components/home/Home';
import CreatePost from './components/create/CreatePost';
import DetailView from './components/details/DetailView';
import Update from './components/create/Update';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Login from './components/account/Login';
import Dashboard from './components/dashboard/Dashboard.jsx';

const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to='/account' />
  );
};

function App() {
  const [isAuthenticated, setIsUserAuthenticated] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    if (token) {
      // Optionally verify token validity here
      setIsUserAuthenticated(true);
    } else {
      setIsUserAuthenticated(false);
    }
  }, []);

  return (
    <DataProvider>
      <BrowserRouter>
        <Box style={{ marginTop: 64 }}>
          <Routes>
            <Route
              path='/account'
              element={
                isAuthenticated ? <Navigate replace to='/' /> : <Login isUserAuthenticated={setIsUserAuthenticated} />
              }
            />
            <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/' element={<Home />} />
              <Route path='/create' element={<CreatePost />} />
              <Route path='/details/:id' element={<DetailView />} />
              <Route path='/update/:id' element={<Update />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />

              <Route path='/dashboard' element={<Dashboard />} />

            </Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
