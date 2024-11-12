import ContactForm from "../elements/ContactForm";

const ContactUs = () => {
    return (
        <section className="contact green">
            <div className="container center">

                <div>

                    <div className="contact__content">
                        <h2 className="white">
                            Let&rsquo;s get in touch
                        </h2>
                        <ContactForm />
                    </div>

                </div>
            </div>
        </section >
    );
};

export default ContactUs;
