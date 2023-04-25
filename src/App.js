import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './utils/helperFunctions/protectedRoute.util';
import Navigation from './layouts/Navigation';
import Home from './routes/Home';
import Shop from './routes/Shop';
import Cart from './routes/Cart';
import Subscriptions from './routes/Subscriptions';
import Wholesale from './routes/Wholesale';
import Account from './routes/Account';
import Auth from './routes/Auth';
import Admin from './routes/Admin';

const App = () => {
  // eslint-disable-next-line
  const { isAuthenticated, setIsAuthenticated } = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/wholesale" element={<Wholesale />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/auth" element={<Auth />} />

        {/* <ProtectedRoute path="/admin" element={<Admin />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
