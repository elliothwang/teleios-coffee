import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import Shop from './routes/Shop';
import Cart from './routes/Cart';
import Subscriptions from './routes/Subscriptions';
import Wholesale from './routes/Wholesale';
import Account from './routes/Account';
import Auth from './routes/Auth';

const App = () => {
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
      </Route>
    </Routes>
  );
};

export default App;
