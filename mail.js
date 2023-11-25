const firebaseConfig = {
    apiKey: "AIzaSyCoPfxTbImAG-Ml24pU9QA9nzwUiqiMdok",
    authDomain: "index-36e92.firebaseapp.com",
    databaseURL: "https://index-36e92-default-rtdb.firebaseio.com",
    projectId: "index-36e92",
    storageBucket: "index-36e92.appspot.com",
    messagingSenderId: "716335575375",
    appId: "1:716335575375:web:db1f3ba489405d017cd53a",
    measurementId: "G-C76CEC8XEN"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };