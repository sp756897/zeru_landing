import './App.css';
import TopNavBar from './components/TopNavbar';
import { Layout } from 'antd';
import LandingPage from './components/LandingPage';

const { Header, Footer } = Layout;

function App() {
  return (
    <div className='maindiv'>

      <Layout className="layout" style={{ backgroundColor: "transparent", }}>

        <Header style={{ alignItems: 'right', backgroundColor: 'transparent', color: 'white', paddingTop: "1rem" }}>

          <div className="logo" >
            <h2 style={{ fontFamily: "Rubik", fontSize: "21px", fontWeight: "bold" }}>
              <i></i> Z E R U
            </h2>
          </div>

          <TopNavBar className="topnavbar" />

        </Header>


        <LandingPage />

        <p style={{ color: 'black', textAlign:'center'}}>
        Zeru ©2022
        </p>

      </Layout>

    </div>

  );
}

export default App;
