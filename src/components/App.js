import React, {Component, useEffect, useState} from "react";
import '../styles/App.css';




const App = () => {

  function isEmail(data)
  {
    for (var i = 0; i < data.length; i++) 
    {
      var char1 = data.charAt(i);
      var cc = char1.charCodeAt(0);
      //console.log("char1:", char1)


      if (char1=='@') 
      {
        return true;
      } else 
      {
          //alert("Input is not alphanumeric");
          
      }
    }
    return false;

  }



  function isAlphNumeric(data)
  {
    for (var i = 0; i < data.length; i++) 
    {
      var char1 = data.charAt(i);
      var cc = char1.charCodeAt(0);

      if ((cc > 47 && cc < 58) || (cc > 64 && cc < 91) || (cc > 96 && cc < 123)) 
      {
      } else 
      {
          //alert("Input is not alphanumeric");
          return false;
      }
    }
    return true;

  }

  function isNumeric(data)
  {
    for (var i = 0; i < data.length; i++) 
    {
      var char1 = data.charAt(i);
      var cc = char1.charCodeAt(0);

      if ((cc > 47 && cc < 58) ) 
      {
      } else 
      {
          //alert("Input is not alphanumeric");
          return false;
      }
    }
    return true;

  }


  const submitForm=(event)=> 
  {
    //console.log("Submit Form");
    event.preventDefault();


    if(!document.getElementById("name").value ||  !document.getElementById("email").value
    || !document.getElementById("gender").value || !document.getElementById("phoneNumber").value
    || !document.getElementById("password").value   )
    {
       alert("All fields are mandatory");
       return;
    }

    if(!isAlphNumeric(document.getElementById("name").value))
    {

      alert("Name is not alphanumeric");
      return;
    }

    if(!isEmail(document.getElementById("email").value))
    {

      alert("Email must contain @");
      return;
    }


    if(!isNumeric(document.getElementById("phoneNumber").value))
    {

      alert("Phone Number must contain only numbers");
      return;
    }


    if(document.getElementById("password").value.length< 6)
    {

      alert("Password must contain atleast 6 letters");
      return;
    }

    let xloc = document.getElementById("email").value.indexOf("@");
    //console.log(xloc);
    let xname = document.getElementById("email").value.substring(0, xloc);

    //console.log(xname);


    alert("Hello " +xname);


  }



  return (
    <div id="main">
      <form >
        <label>
          Name:
          <input type="text" id="name" name="name"    data-testid = 'name'   />
        </label>
        <br></br>
        <label>
        Email address:
          <input type="email" id="email" name="email" data-testid = 'email' />
        </label>
        <br></br>
        Select Gender:
        <select  id="gender" data-testid = 'gender' >
          
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other" >Other</option>
        </select>
        <br></br>
        <label>
        Phone number:
          <input type="text" id="phoneNumber"  name="phoneNumber" data-testid = 'phoneNumber' />
        </label>
        <br/>
        Password :
        <input  id='password'  type="password" data-testid = 'password' />
        <br/>
         <button type="Submit" data-testid = 'submit' onClick={submitForm}> Submit </button>


         </form>      
    </div>
  )
}


export default App;
