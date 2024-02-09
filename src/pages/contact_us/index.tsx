// pages/contact/index.tsx

import React, { useState } from "react";
import { InputArea, InputGroup } from "../../shared/Input";
import { CommentButton } from "../../shared/Button";
import Typrography from "../../shared/Typography";

const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // You can add your logic to send the form data to a server or perform other actions
  };

  return (
    <div className="container">
      <Typrography.H2
        title="Contact Us"
        style={{
          marginBottom: "50px",
        }}
      />
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col custom-md:flex-row gap-[20px] w-full">
          <InputGroup label="First Name " styles="custom-md:w-1/2" />
          <InputGroup label="Last Name " styles="custom-md:w-1/2" />
        </div>
        <div className="flex flex-col custom-md:flex-row gap-[20px] w-full">
          <InputGroup label="Email Address" styles="custom-md:w-1/2" />
          <InputGroup label="Tel. Number" styles="custom-md:w-1/2" />
        </div>
        <InputArea label="Message" />
        <CommentButton
          label="SEND MESSAGE "
          styles="justify-self-start self-start !px-[70px] !py-[20px]"
        />
      </div>
    </div>
  );
};

export default ContactPage;

// // pages/contact/index.tsx

// import React, { useState } from 'react';

// const ContactPage: React.FC = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // Handle form submission logic here
//         console.log('Name:', name);
//         console.log('Email:', email);
//         console.log('Message:', message);
//         // You can add your logic to send the form data to a server or perform other actions
//     };

//     return (
//         <div>
//             <h1>Contact Us</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//                 </label>
//                 <br />
//                 <label>
//                     Email:
//                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 </label>
//                 <br />
//                 <label>
//                     Message:
//                     <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
//                 </label>
//                 <br />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default ContactPage;
