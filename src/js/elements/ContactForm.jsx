import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [disabled, setDisabled] = useState(false);
    const [alertInfo, setAlertInfo] = useState({
        display: false,
        message: '',
        type: '',
    });

    // Shows alert message for form submission feedback
    const toggleAlert = (message, type) => {
        setAlertInfo({ display: true, message, type });

        // Hide alert after 5 seconds
        setTimeout(() => {
            setAlertInfo({ display: false, message: '', type: '' });
        }, 5000);
    };

    // Function called on submit that uses emailjs to send email of valid contact form
    const onSubmit = async (data) => {
        // Destrcture data object
        const { from_name, email, message } = data;
        try {
            // Disable form while processing submission
            setDisabled(true);

            // Define template params
            const templateParams = {
                from_name,
                email,
                message,
            };

            // Use emailjs to email contact form data
            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_PUBLIC_KEY,
            );

            // Display success alert
            toggleAlert('Thank you! We&rsquo;ll be in touch ASAP', 'success');
        } catch (e) {
            console.error(e);
            // Display error alert
            toggleAlert('Uh oh. Something went wrong.', 'danger');
        } finally {
            // Re-enable form submission
            setDisabled(false);
            // Reset contact form fields after submission
            reset();
        }
    };

    return (

        <div className='contactForm'>
            <form
                id='contact-form'
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                {/* Row 1 of form */}
                <div className='row formRow'>
                    <div>
                        <input
                            type='text'
                            name='from_name'
                            {...register('from_name', {
                                required: {
                                    value: true,
                                    message: 'Please enter your name',
                                },
                                maxLength: {
                                    value: 45,
                                    message: 'Please use 45 characters or less',
                                },
                            })}
                            placeholder='Name'
                        ></input>
                        {errors.name && (
                            <span className='errorMessage'>
                                {errors.from_name.message}
                            </span>
                        )}
                    </div>
                    <div>
                        <input
                            type='email'
                            name='email'
                            {...register('email', {
                                required: true,
                                pattern:
                                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            })}
                            placeholder='Email address'
                        ></input>
                        {errors.email && (
                            <span className='errorMessage'>
                                Please enter a valid email address
                            </span>
                        )}
                    </div>
                </div>

                {/* Row 3 of form */}
                <div className='row formRow'>
                    <div className='col'>
                        <textarea
                            rows={3}
                            name='message'
                            {...register('message', {
                                required: true,
                            })}
                            placeholder='Message'
                        ></textarea>
                        {errors.message && (
                            <span className='errorMessage'>
                                Please enter a message
                            </span>
                        )}
                    </div>
                </div>

                <div>
                    <button
                        className='black'
                        disabled={disabled}
                        type='submit'
                    >
                        Send
                    </button>
                </div>
            </form>

            {alertInfo.display && (
                <div
                    className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
                    role='alert'
                >
                    {alertInfo.message}
                    <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='alert'
                        aria-label='Close'
                        onClick={() =>
                            setAlertInfo({ display: false, message: '', type: '' })
                        } // Clear the alert when close button is clicked
                    ></button>
                </div>
            )}
        </div>
    );
};

export default ContactForm;