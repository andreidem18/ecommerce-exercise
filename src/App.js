import './App.css';
import {
  HashRouter,
  Routes,
  Route,
  Outlet
} from 'react-router-dom'
import { Cart, Home, Login, Orders, ProductDetail, Shop, SignUp } from './pages';
import { Footer, LoadingScreen, NavBar, Notification, ProtectedRoutes, ScrollToTop } from 'components';
import { useSelector } from 'react-redux';
import { loginBackground } from 'assets/images';

function App() {

  const isLoading = useSelector(state => state.app.isLoading);
  const notification = useSelector(state => state.app.notification);

  return (
    <HashRouter>
      { isLoading && <LoadingScreen /> }
      <Notification message={notification} />
      <ScrollToTop />
      <Routes>

        <Route element={<FreeRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />}/>
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />}/>
            <Route path="/orders" element={<Orders />} />
          </Route>
        </Route>

      </Routes>
    </HashRouter>
  );
}

const FreeRoutes = () => {
  return (
    <>
      <Outlet />
      <video className='login-background' src={loginBackground} autoPlay muted loop></video>
    </>
  );
};

const MainLayout = () => {
  return (
    <>
        <NavBar />
        <Outlet />
        <Footer />
    </>
  )
}

export default App;
