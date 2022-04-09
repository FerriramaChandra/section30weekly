import './App.css';
import { Link, Outlet } from 'react-router-dom';
import Navbar from "./Route/Pages/Navbar";
import Git from './Route';

const App = () => {
  return (
    <div>
      <Navbar>
        <Link to={'/'}/>
        <Link to={'/Introduction'}/>
        <Link to={'/Figma'}/>
        <Link to={'/HTML'}/>
        <Link to={'/CSS'}/>
        <Link to={'/Bootstrap'}/>
        <Link to={'/Js'}/>
        <Link to={'/Clean'}/>
      </Navbar>
      <Outlet/>
      <div className="App">
        <Git/>
      </div>
    </div>
  );
}

export default App;
