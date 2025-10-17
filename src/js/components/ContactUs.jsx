import ContactForm from "../elements/ContactForm";

const ContactUs = () => {
    return (
        <section className="contact black">
            <div className="container center">

                <div>

                    <div className="contact__content">
                        <h2 className="white">
                            Let&rsquo;s make scroll&nbsp;stopping content!
                        </h2>
                        <ContactForm />
                    </div>

                </div>
            </div>
        </section >
    );
};

export default ContactUs;
