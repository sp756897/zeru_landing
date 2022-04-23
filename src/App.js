import './App.css';
import TopNavBar from './components/TopNavbar';
import { Layout } from 'antd';
import LandingPage from './components/LandingPage';

const { Header, Footer } = Layout;

function App() {
  return (
    <div className='maindiv'>

      <Layout className="layout" style={{ backgroundColor: "transparent", }}>

        <Header style={{ alignItems: 'right', backgroundColor: 'transparent', color: 'white' }}>

          <div className="logo" >
            <h2 style={{ fontFamily: "Rubik", fontSize: "21px", fontWeight: "bold" }}>
              <i></i> Z E R U
            </h2>
          </div>

          <TopNavBar className="topnavbar" />

        </Header>


        <LandingPage />

        <Footer style={{ textAlign: 'center', background: "transparent" }}>

          <p style={{ color: 'white' }}>Zeru ©2022
          </p>

        </Footer>

      </Layout>

    </div>

  );
}

export default App;
