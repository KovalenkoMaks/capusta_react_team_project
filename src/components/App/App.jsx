import HomePageView from 'pages/HomePageView/HomePageView'
import Header from "components/Header/Header";
import '../../../node_modules/modern-normalize/modern-normalize.css'

export const App = () => {
  return (
    <div>
   <Header/>
   <HomePageView />
    </div>
  );
};
