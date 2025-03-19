import React from 'react'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [loading, setLoading] = useState(false);

    const handleChange = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value })

    }

    //service_78e649b

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            emailjs.send('service_78e649b',
                'template_udx364c',
                {
                    from_name: formData.name,
                    to_name: "Priyanshu",
                    from_email: formData.email,
                    to_email: "Priyanshupaul32@gmail.com",
                    message: formData.message
                },
                'm-2mCOq2vHgKbdgOI'
            )

            setLoading(false);
            alert("Your message is sent !")
            setFormData({
                name:"",
                email:"",
                message:""
            })
        } catch (e) {
            setLoading(false);
            console.log(e);
            console.log("something went wrong ")
        }
    }


    return (
        <section className='c-space my-20' id='contact'>
            <div className='relative min-h-screen flex items-center justify-center flex-col'>

                <img src="/assets/terminal.png" alt="terminal" className='absolute inset-0 min-h-screen' />
                <div className='contact-container'>
                    <h3 className='head-text mt-20'>
                        Let's Connect
                    </h3>
                    <p className='text-lg text-white-600 mt-2  '>Whether you are looking for building a new website or need any help in AI I can help you.</p>

                    <form ref={formRef} onSubmit={handleSubmit} className='mt-8 flex flex-col gap-8 space-y-7'>
                        <label className='space-y-1'>
                            <span className='field-label'>Your Name</span>
                            <input type="text"
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder='Enter your name' className='field-input' />
                        </label>

                        <label className='space-y-3'>
                            <span className='field-label'>Email</span>
                            <input type="email"
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder='Enter your mail' className='field-input' />
                        </label>

                        <label className='space-y-3'>
                            <span className='field-label'>Your Message</span>
                            <textarea
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={3}
                                placeholder='Hey I would like to .... ' className='field-input' />
                        </label>
                        <button type='submit' disabled={loading} className='field-btn'>
                            {loading ? "Sending message..." : "send message"}
                            <img src="/assets/arrow-up.png" alt="up arrow " className='field-btn_arrow' />
                        </button>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Contact