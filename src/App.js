

    import './App.css';
    import React,{useState} from 'react';
    function App() {
    
      const [values, setValues] = useState({
        email:'',
        password: ''
      });
      const [submitted, setSubmitted] = useState(false);

    
      const handleemailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
          ...values,
          email: event.target.value,
        }));
      };
    
      
      
      const handlepasswordlInputChange = (event) => {
        event.persist();
        setValues((values) => ({
          ...values,
          password: event.target.value,
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
      };
    
      return (
        <form className="App" onSubmit={handleSubmit}>
            
          <h1>sign-in</h1>
          <input
              id="email"
              class="form-field"
              type="text"
              placeholder="email"
              name="email" 
              value={values.email}
              onChange={handleemailInputChange}
          /><br></br>
    
          <input
              id="password"
              class="form-field"
              type="text"
              placeholder="password"
              name="password"
              value={values.password}
              onChange={handlepasswordlInputChange}
          /><br></br>
           <button type='submit'>sign</button><br></br>
           <h2>New to amazona</h2>
           <button type='new to client'>new to client</button>
          
             </form>
      );
    }
    
    export default App;
    
    