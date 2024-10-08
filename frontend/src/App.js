import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components
import DataProvider from './context/DataProvider';
import Header from './components/header/Header';
import Home from './components/home/Home';
import CreatePost from './components/create/CreatePost';
import DetailView from './components/details/DetailView';
import Update from './components/create/Update';
import About from './components/about/About';
import Login from './components/account/Login';
import Dashboard from './components/dashboard/Dashboard.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Profile from './components/profile/Profile.jsx';



function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Box style={{ marginTop: 64 }}>
          <Routes>
            <Route
              path='/account'
              element={<Login />}
            />
            <Route element={<PrivateRoute />}>
              <Route path='/' element={<Home />} />
              <Route path='/create' element={<CreatePost />} />
              <Route path='/details/:id' element={<DetailView />} />
              <Route path='/update/:id' element={<Update />} />
              <Route path='/about' element={<About />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
