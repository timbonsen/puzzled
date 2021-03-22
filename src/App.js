
import './App.css';
import logo from './assets/icons/JigsawFat.png'
import accountButton from './assets/icons/AccountFat.png'

function App() {
    return (
        <>
            <div className="navContainer">
                <div className="navBar">
                    <nav>
                        <div className="logoContainer">
                            <img className="puzzledLogo" src={logo} alt="Puzzled Logo"/>
                            <div className="puzzledName">PUZZLED</div>
                        </div>
                        <a className="navButton">HOME</a>
                        <a className="navButton">UPLOAD</a>
                        <a className="navButton">SEARCH</a>
                    </nav>
                    <img className="accountButton" src={accountButton} alt="Account Button"/>
                </div>
            </div>
        </>

  );
}

export default App;
