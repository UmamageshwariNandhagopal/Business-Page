// Initialize Firebase(2)
var config = {
  apiKey: 'AIzaSyA2QwTIHidrMj6ZV6WgR2sdLL5kWaqH6_U',
  authDomain: 'drip-tec.firebaseapp.com',
  databaseURL: 'https://drip-tec.firebaseio.com',
  projectId: 'drip-tec',
  storageBucket: 'drip-tec.appspot.com',
  messagingSenderId: '996112981790'
};
firebase.initializeApp(config);

//Reference for form collection(3)


//listen for submit event//(1)
document
  .getElementById('submissionform')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let fname = document.querySelector('#fname').value;
  let email = document.querySelector('#email').value;
  let lname = document.querySelector('#lname').value;
  let contact = document.querySelector('#contact').value;
  let subject = document.querySelector('#subject').value;
  let message = document.querySelector('#message').value;

  //send message values
  sendMessage(fname, email, lname, contact, subject, message);
  //Form Reset After Submission(7)
}

//Send Message to Firebase(4)

function sendMessage(fname, email, lname, contact, subject, message) {
  let formMessage = firebase.database().ref('Feedback/'+contact);
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    Fname: fname,
    email: email,
    Lname: lname,
    Contact: contact,
    Subject: subject,
    Message: message,
    Read: false
  });
}