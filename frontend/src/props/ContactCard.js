const ContactCard = () => {
    return ( 
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
    );
}
 
export default ContactCard;