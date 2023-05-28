import React from 'react';
// import { useState } from 'react'



function Contact() {
     // Here we set two state variables for firstName and lastName using `useState`
    //  const [firstName, setFirstName] = useState('');
    //  const [lastName, setLastName] = useState('');
    //  const [email, setEmail] = useState('');
    //  const [message, setMessage] = useState(''); 
   
    //  const handleInputChange = (e) => {
    //     e.preventDefault();
    //    // Getting the value and name of the input which triggered the change
    //    const { name, value } = e.target;
       
    //    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    //    return name === 'firstName' ? setFirstName(value) : setLastName(value);
    //  };

    //  const handleEmailChange = (e) => {
    //     e.preventDefault();
    //     // Getting the value and name of the input which triggered the change
    //     const { name, value } = e.target;
    //      return name === 'email' ? setEmail(value): alert(`Please enter valid email`) ;
    //   };

    //   const handleMessageChange = (e) => {
    //     e.preventDefault();
    //     // Getting the value and name of the input which triggered the change
    //     const { name, value } = e.target;
    //     return name === "message" ? setMessage(value): alert(`Please enter a message`);
    //   };
   
    //  const handleFormSubmit = (e) => {
    //    // Preventing the default behavior of the form submit (which is to refresh the page)
    //    e.preventDefault();
   
    //    // Alert the user their first and last name, clear the inputs
    //     console.log(firstName, lastName, email, message);

    //     var input = []
    //     input.push(firstName);
    //     input.push(lastName);
    //     input.push(email);
    //     input.push(message);
    
    //     console.log('input', input)
    //     localStorage.setItem("contact", input);
        
       
    //    setFirstName('');
    //    setLastName('');
    //    setEmail('');
    //    setMessage('');

    // //    alert(`Thanks for your message ${firstName}! Unfortunately this form is in develpment, please email me!`);
    // };
    
    return (
    <div className="container py-4">
        <h2 className="h2" id="Contact-Me">Contact Me:</h2>
        <p>I'd love to connect! Please fill out the form to send a greeting!! </p>
        
    <form action="https://formsubmit.co/7d380e25922453979086acbd2c00676d" method="POST">
        <input type="text" name="_honey" style={{display: "none"}}/>
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_subject" value="New submission!"></input>
        <div className="row">
            <div className="col">
                <label for="firstName">First Name</label>
                <input type="text" className="form-control" name="name" id="firstName" placeholder="First Name"/>
            </div>
            <div className="col">
                <label for="lastName">Last Name</label>
                <input  type="text" className="form-control" name='lastName' id="lastName" placeholder="Last Name"/>
            </div>
            <div className="form-group col">
                <label for="email">Email address</label>
                <input  type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">Please enter a valid email.</small>
            </div>
        </div>
        <div className="row">
            <div className="form-group col-8">
                <label for="message">Message</label>
                <input  type="text" className="form-control" name="message" id="message" placeholder="Message"/>
            </div> 
            <button type="submit"  className="btn btn-primary col-2">Submit</button>
        </div>
  
    </form>

    </div>
)
}

export default Contact;