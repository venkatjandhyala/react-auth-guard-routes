import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AuthPage from './components/auth/AuthPage';
import UserProfilePage from './components/user/UserProfilePage';
import WelcomePage from './components/welcome/WelcomePage';
import ProtectedRoute from './components/guardRoutes/ProtectedRoute';
import PublicRoute from './components/guardRoutes/PublicRoute';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/auth" element={<PublicRoute />}>
          <Route path="" element={<AuthPage />} />
        </Route>
        <Route path="/user" element={<ProtectedRoute />}>
          <Route path="" element={<UserProfilePage />} /> 
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
