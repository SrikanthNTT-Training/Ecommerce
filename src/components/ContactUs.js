    
      import './ContactUs.css';
      import React,{useState} from 'react';

      function ContactUs() {
      
        const [values, setValues] = useState({
          yourname:'',
          youremail: '',
          phone: '',
          persons:'',
          message: ''
        });
       const handleyournameInputChange = (event) => {
          event.persist();
          setValues((values) => ({
            ...values,
            yourname: event.target.value,
          }));
        };
       const handleyouremailInputChange = (event) => {
          event.persist();
          setValues((values) => ({
            ...values,
            youremail: event.target.value,
          }));
        };
        const handlephoneInputChange = (event) => {
          event.persist();
          setValues((values) => ({
            ...values,
            phone: event.target.value,
          }));
        };
        const handlepersonsInputChange = (event) => {
          event.persist();
          setValues((values) => ({
            ...values,
            persons: event.target.value,
          }));
        };

        const handlemessageInputChange = (event) => {
          event.persist();
          setValues((values) => ({
            ...values,
            message: event.target.value,
          }));
        };
        
        return (
            <form  onSubmit={values}>
            <h1 >contact us</h1>
            
           <div className="space">
            
           <input
            id="yourname" 
               type="text"
                placeholder="Enter your Name"
                name="yourname" 
                value={values.yourname}
                onChange={handleyournameInputChange}
                />
               
                <input className="leftalign"
                id="youremail"
                type="text"
                placeholder="Enter Your Email"
                name="youremail"
                value={values.youremail}
                onChange={handleyouremailInputChange}
            />
            </div>  <br></br>
             <div className="space">
              <input 
                id="persons"
                type="text"
                placeholder="Enter persons"
                name="persons"
                value={values.persons}
                onChange={handlepersonsInputChange}
            />
              <input className="leftalign"
               id="phone"
               type="text"
                placeholder="Enter Your Mobile No."
                name="phone"
                value={values.phone}
                onChange={handlephoneInputChange}
            /> </div>
                <br></br>
                
              <div className="space">
                
             <input className="increase"
              id="message"
               type="text"
                placeholder="Enter Your Message"
                name="message"
                value={values.message}
                onChange={handlemessageInputChange}
                /><br></br>
                 
           <button type= 'send'>send</button>
           </div>
              
              </form>      
        );
      }
      
      export default ContactUs;