const ContactUs = () => {
    return (
        <section className="contact red">
            <div className="container center">

                <div>
                    <div className="intro">
                        <h2>
                            Get in touch
                        </h2>
                    </div>
                    <div className="contact__content">
                        <p>We&rsquo;d love to hear from you.</p>

                        <form>
                            <input type="text" placeholder="email" />
                            <input type="text" placeholder="name" />
                            <div className="textarea">
                                <textarea placeholder="write a few words" />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default ContactUs;
