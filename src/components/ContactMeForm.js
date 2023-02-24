import { useFormik } from 'formik';
import {useRef} from 'react';

const required = "Required";
const moreThan2 = "Must be more than 2 characters";
const lessThan2000 = "Must be less than 2000 characters";

function ContactMeForm() {

        // validations:
    //     client-side:
    //         required for all
    //         name: min-text 2 - max-text: 2000
    //         company: min-text 2 - max-text:2000
    //         email: min-text 2 max-text: 2000
    //         message: min text: 2
        // server side:
        //     submit button enables when all parameters are set
    const contactForm = useRef(null);

    const validate = values => {
        const errors = {};
        if (!values.formName) {
            errors.formName = required;
        } else if (values.formName.length <= 2) {
            errors.formName = moreThan2;
        } else if (values.formName.length > 2000) {
            errors.formName = lessThan2000;
        }

        if (!values.formCompany) {
            errors.formCompany = required;
        } else if (values.formCompany.length <= 2) {
            errors.formCompany = moreThan2;
        } else if (values.formCompany.length > 2000) {
            errors.formCompany = lessThan2000;
        }

        if (!values.formEmail) {
            errors.formEmail = required;
        } else if (values.formEmail.length <= 2) {
            errors.formEmail = moreThan2;
        } else if (values.formEmail.length > 2000) {
            errors.formEmail = lessThan2000;
        }

        if (values.formMessage <= 2) {
            errors.formMessage = moreThan2;
        }

        return errors;
    }


    const formik = useFormik({
        initialValues: {
            formName: "",
            formCompany: "",
            formEmail: "",
            formMessage: "",
        },
        validate,
        onSubmit: values => {
            console.log(values);
            contactForm.current.submit();
            console.log("Submit")
        }
    })

    return (
        <form ref={contactForm} action="https://formsubmit.co/78af50f1ba4e587ac9e5368f0db911ad" method="POST" onSubmit={formik.handleSubmit} className="contactMeForm">
            <label htmlFor="formName"><h1>Name</h1></label>
            <input 
                id="formName" 
                name="formName"
                type="text" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.formName}
                autoFocus
            />
            {formik.touched.formName && formik.errors.formName ? <div className='formErrors'><h2>{formik.errors.formName}</h2></div> : null}
            <label htmlFor="formCompany"><h1>Company</h1></label>
            <input 
                id="formCompany" 
                name="formCompany"
                type="text" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.formCompany}
            />
            {formik.touched.formCompany && formik.errors.formCompany ? <div className='formErrors'><h2>{formik.errors.formCompany}</h2></div> : null}
            <label htmlFor="formEmail"><h1>Email</h1></label>
            <input 
                id="formEmail" 
                name="formEmail"
                type="email" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.formEmail}
            />
            {formik.touched.formEmail && formik.errors.formEmail ? <div className='formErrors'><h2>{formik.errors.formEmail}</h2></div> : null}
            <label htmlFor="formMessage"><h1>Message</h1></label>
            <textarea 
                id="formMessage" 
                name="formMessage"
                type="text" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.formMessage}
            />
            {formik.touched.formMessage && formik.errors.formMessage ? <div className='formErrors'><h2>{formik.errors.formMessage}</h2></div> : null}
            <button type="submit" disabled={!(formik.isValid && formik.dirty)}>Submit</button>
        </form>
    )
}

export default ContactMeForm;