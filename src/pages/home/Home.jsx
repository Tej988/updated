import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from "../../components/Auth/LoginButton";
// import Header from "../new/Header";
// import LoginButton from "../../components/Auth/LoginButton";

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0;
  return (

   isAuthenticated ? 
      <> 
     

        <div className="home">
          <Sidebar />
          <div className="homeContainer">

            <Navbar />
            <div className="widgets">
              <Widget type="user" />
              <Widget type="order" />
              <Widget type="earning" />
              <Widget type="balance" />
            </div>
            <div className="charts">
              <Featured />
              <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
            </div>
            <div className="listContainer">
              <div className="listTitle">Latest Transactions</div>
              <Table />
            </div>
          </div>
        </div>
    
      </>: <LoginButton/>
   
  );
};

export default Home;
