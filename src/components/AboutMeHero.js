import './css/AboutMeHero.css';
import '../DesktopGrid.css';
import Stack from './Stack';
import Solidity from '../images/stack/solidity.png';
import Hardhat from '../images/stack/hardhat.png';
import React from '../images/stack/react.png';
import Javascript from '../images/stack/js.png';
import Html from '../images/stack/html.png';
import Css from '../images/stack/css3.png';
import Python from '../images/stack/python.png';
import Sqlite from '../images/stack/sqlite.png';
import Django from '../images/stack/django.png';
import Ubuntu from '../images/stack/ubuntu.png';

function AboutMeHero() {
    return(
        <div className="aboutMeHero">
            <h1 className="aboutMeHero-title">About Me...</h1>
            <h1>Hi, i am Rodrigo. Thanks for visiting my portfolio.
                I am Jr. full stack & blockchain developer.
                I am also a blockchain investor since 2021 mainly focus in ETH 2.0 validator & Web3 gaming.
                I have worked as a financial risk analyst and love analyzing financial positions.
                On my free times, reading is one of my passions, mainly investment & history books.
            </h1>
            <a href="https://flowcv.com/resume/m70ow0k889" target="_blank" rel="noreferrer"><button>Resume</button></a>
            <h1>Stack</h1>
            <div className="stacks">
                <Stack img={Solidity} alt="Solidity " title="Solidity" />
                <Stack img={Hardhat} alt="Hardhat " title="Hardhat" />
                <Stack img={React} alt="React " title="React" />
                <Stack img={Javascript} alt="Javascript " title="Javascript" />
                <Stack img={Html} alt="Html" title="Html" />
                <Stack img={Css} alt="Css " title="Css" />
                <Stack img={Python} alt="Python " title="Python" />
                <Stack img={Sqlite} alt="Sqlite " title="Sqlite" />
                <Stack img={Django} alt="Django " title="Django" />
                <Stack img={Ubuntu} alt="Ubuntu " title="Ubuntu Linux" />
            </div>
        </div>
    )
}

export default AboutMeHero;