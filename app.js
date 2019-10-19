//Init Github
const github = new Github;
//init UI
const ui = new UI;

//search input
const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup', (e) => {
//Get input text
const userText = e.target.value;

if(userText !== ''){
 // console.log(userText);
 // Make http call
 github.getUser(userText)
 .then(data => {
   if(data.profile.message === 'Not Found'){
      // Show alert
        console.log('no data');
   } else {
      ui.showProfile(data.profile);
   }
   //console.log(data);
 })
}  else {
  //clear profile
}

});