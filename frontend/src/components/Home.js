import ContactCard from '../props/ContactCard';
import { useEffect, useState } from 'react';

const axios = require('axios');

const handleOpenAddContact = () => {
    const element = document.getElementById('Add-Contact');
    element.className = 'open-pop-up'
}
const handleCloseAddContact = () => {
    const element = document.getElementById('Add-Contact');
    element.className = 'close-pop-up'
}
const handleOpenContact = () => {
    const element = document.getElementById('Contact-Section');
    element.className = 'contact-section-open'
}
const handleCloseContact = () => {
    const element = document.getElementById('Contact-Section');
    element.className = 'contact-section-close'
}

const Home = () => {

    const [contacts, setcontacts] = useState(null);

    useEffect(() => {
        axios.get('/user?ID=12345')
        .then((response) => {
            setcontacts(response["data"]);
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);

    return ( 
        <article className="Home">   
            <section>  

                {/* Contact Section - Aside */}

                <div id="Contact-Section" className="contact-section-open">
                    <div className="add-btn-container">
                        <div className="mobile">
                            <button onClick={handleCloseContact} className="btn-2 primary-btn"><i className="fa fa-times" aria-hidden="true"></i></button>
                        </div>
                        <h1>Contacts</h1>
                        <button onClick={handleOpenAddContact} className="add-btn"><i className="fa fa-plus" aria-hidden="true"></i></button>
                    </div>
                    {/* <div className="contacts">
                        {contacts.map((eachContact)=>(
                            <ContactCard name={eachContact.name}/>
                        ))}
                    </div> */}
                </div>

                {/* Main Section */}

                <div className="main-section">
                    <div className="send-sos">
                        <button>SOS</button>
                    </div>
                    <div id="Contacts-Btn" className="mobile">
                        <div className="btn-container">
                            <button onClick={handleOpenContact} className="btn primary-btn">Contacts</button>
                        </div>
                    </div>
                </div>

                {/* position: fixed */}

                <div id="Add-Contact" className="close-pop-up">
                    <div className="closeBtn">
                        <button onClick={handleCloseAddContact} className="btn-2 primary-btn"><i className="fa fa-times"></i></button>
                    </div>
                    <div className="card">
                       <div className="card-content">
                            <form action="">
                                <label>Name : </label>
                                <div>
                                    <input type="name" name="name"/>
                                </div>
                                <label>Email address : </label>
                                <div>
                                    <input type="email" name="email"/>
                                </div>
                                <div className="btn-container">
                                    <button className="btn primary-btn">Add Contact</button>
                                </div>
                            </form>
                       </div>
                    </div>
                </div>

            </section>
        </article>
    );
}
 
export default Home;


/*

    <div className="contact-card">
        <figure className="contact-image">
            <i className="fa fa-user-o"></i>
        </figure>
        <div className="info">
            <p className="name">Prakhar Ojha</p>
        </div>
        <div>
            <button className="normal-btn">
                <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>
        </div>
    </div>

*/