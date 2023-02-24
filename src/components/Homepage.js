import Hero from './Hero';
import Menu from './Menu';
import Footer from './Footer';
import MenuDesktop from './MenuDesktop';

function Homepage() {
    return (
        <div className="Homepage">
            <Hero />
            <Menu />
            <MenuDesktop />
            <Footer />
        </div>
    )
}

export default Homepage;