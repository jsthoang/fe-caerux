import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; 

import "./Contact.scss";

function Contact() {
    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            request: "",
        },
        validationSchema: Yup.object({
            fullname: Yup.string()
                .required("You must fill in this section"),
            email: Yup.string()
                .email("Invalid email")
                .required("You must fill in this section"),
            request: Yup.string()
                .required("You must fill in this section"),
        }),
        onSubmit: values => {
            console.log(values);
        }
    })
    return(
        <div className="main">
            <form action="" method="POST" className="form" id="form-2" onSubmit={formik.handleSubmit}>
                <h3 className="heading">CONTACT US</h3>
            
                <div className="spacer"></div>
            
                <div className="form-group">
                    <label htmlFor="fullname" className="form-label">Full name</label>
                    <input id="fullname" name="fullname" placeholder="e.g: Mr. Brown" className="form-control" 
                        type="text"
                        value={formik.values.name} 
                        onChange = {formik.handleChange}
                    />
                    {formik.errors.fullname && formik.touched.fullname && 
                        <span className="form-message">{formik.errors.fullname}</span>
                    }
                </div>
            
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="email" name="email" placeholder="e.g: email@domain.com" className="form-control" 
                        type="email"
                        value={formik.values.email} 
                        onChange = {formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && 
                        <span className="form-message">{formik.errors.email}</span>
                    }
                </div>
            
                <div className="form-group">
                    <label htmlFor="text" className="form-label">Request</label>
                    <textarea id="request" name="request" placeholder="your request" className="form-control" 
                        type="text"
                        value={formik.values.request} 
                        onChange = {formik.handleChange}
                    />
                    {formik.errors.request && formik.touched.request && 
                        <span className="form-message">{formik.errors.request}</span>
                    }
                </div>
                <button className="form-submit">SUBMIT</button>
            </form>
        </div>

    )
}

export default Contact;