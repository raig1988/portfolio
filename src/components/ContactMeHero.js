import ContactMeForm from "./ContactMeForm";
import './css/ContactMeHero.css';
import '../DesktopGrid.css';

function ContactMeHero() {
    return (
        <div className="contactMeHero">
            <h1>Contact Me</h1>
            <ContactMeForm />
        </div>
    )
}

export default ContactMeHero;