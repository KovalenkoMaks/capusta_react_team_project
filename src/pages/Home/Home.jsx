// import { LogIn } from 'components/logIn/Login';
// import { Registration } from 'components/registrations/Registrations';

import { Outlet } from 'react-router';

const Home = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Home;
