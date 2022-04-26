import './App.css';
import TopNavBar from './components/TopNavbar';
import { Layout } from 'antd';
import LandingPage from './components/LandingPage';

const { Header, Footer } = Layout;

function App() {
  return (
    <div className='maindiv' style={{backgroundImage: 'radial-gradient(farthest-corner at 100px 100px,#3d354e, #0c061d)'}}>

      <Layout className="layout" style={{ backgroundColor: "transparent", }}>

        <Header className='headerclass' style={{ alignItems: 'right', color: 'white' }}>


          <TopNavBar className="topnavbar" />

        </Header>

        <LandingPage />

        

      </Layout>

    </div>

  );
}

export default App;
