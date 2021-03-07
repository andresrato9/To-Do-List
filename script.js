
const input = document.querySelector("#add");
const  btn = document.querySelector("#btn");
const list = document.querySelector("#list");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
var el = document.getElementsByTagName('li');


clearInput = function() {
    input.value = '';
}


// this function will allow us to add elements when we click the button
btn.onclick = function(){
    
    var txt = input.value;
    if(txt ==''){
        alert('You must type something here!');
    }else{
        li = document.createElement('li');
    li.innerHTML = txt;
    list.insertBefore(li,list.childNodes[0]);
    input.value = '';
    }
    
};

input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btn").click();
  }
}); 

//this function will allow us to check the clicked elements
list.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
         ev.target.classList.toggle('checked');
    }
};

btn2.onclick = function() {
    list.innerHTML = "";
}


document.getElementById('file').onchange = function(){

list.innerHTML = "";
  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function(progressEvent){
    // By lines
    var lines = this.result.split('\n');
    for(var line = 0; line < lines.length; line++){
      li = document.createElement('li');
        li.innerHTML = lines[line];
        list.insertBefore(li,list.childNodes[0]);
    }
  };
  reader.readAsText(file);
  document.getElementById("file").value=null;
};