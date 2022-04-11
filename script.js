//Creating a var for sound clips
var buttonClick = new Audio('assets/click.mp3');
var conditional = new Audio('assets/oops.mp3');

$(document).ready(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    


  // Called function to update the name, happiness, and weight of our pet in our HTML
  

  // When each button is clicked, it will "call" function for that button (functions are below)
  $(".treat-button").click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.nap-button').click(clickedNapButton);
  $('.submit-button').click(function updateName() {
    pet_info.name = $("#petName").val();
    $('.header-title').text(pet_info.name + " the Giga pPt!");

    updatePetInfoInHtml();

  //When buttons are clicked, they make a sound.
    buttonClick.play();
    
  });


  
});

  // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
  var pet_info = {name:"My Pet Name", weight:0, happiness:0, energy:0 };  
  



  function clickedTreatButton() {
    // Increase pet happiness
    
      pet_info.happiness += 1; 

    // Increase pet weight
    
      pet_info.weight += 1; 

    //Incerase pet energy

    pet_info.energy += 1; 
    
    checkAndUpdatePetInfoInHtml();

    buttonClick.play();

    $('.notification').text(pet_info.name + " loves treats!");
    $('.weight-conditional').text(" ");
    //Setting conditional text to nothing when needed 
    $('.happiness-conditional').text(" ");
    $('.energy-conditional').text(" ");

  }
  
  function clickedPlayButton() {
    // Increase pet happiness
    pet_info.happiness += 1;
    
    // Decrease pet weight
    pet_info.weight -= 1;
    checkAndUpdatePetInfoInHtml();

    buttonClick.play();
    
    $('.notification').text(pet_info.name + " loves to play!");
    //Setting conditional text to nothing when needed 
     $('.happiness-conditional').text(" ");
    console.log("play button clicked!");
  }
  
  function clickedExerciseButton() {  //Might have to come back to this later and create an exception in the case that the user clicks this without having set values.
    // Decrease pet happiness
    pet_info.happiness -= 1;
    // Decrease pet weight
    pet_info.weight -= 1;
    //Decrease pet energy
    pet_info.energy -= 1;
    checkAndUpdatePetInfoInHtml();

    buttonClick.play();

    $('.notification').text(pet_info.name + " is fussy about exercising!");
    
    console.log("Exercise button clicked!");
  }

  function clickedNapButton(){
    //Increase Energy
    pet_info.energy += 1;
    console.log("nap button clicked!");

    buttonClick.play();

    checkAndUpdatePetInfoInHtml();

    $('.notification').text(pet_info.name + " is energized after napping!");
    //Setting conditional text to nothing when needed 
    $('.energy-conditional').text(" ");
  }

  function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();  
    updatePetInfoInHtml();
  }
  
  function checkWeightAndHappinessBeforeUpdating() {
    // Add conditional so if weight is lower than zero, set it back to zero
    if(pet_info.weight < 0 ){
      pet_info.weight = 0;

      //Notification when weight is at 0
      $('.weight-conditional').text(pet_info.name + " Can't lose anymore weight! Feed him with treats!");
      conditional.play();
    }
    if(pet_info.happiness < 0){
      //Notification when happiness  is at 0
      pet_info.happiness = 0;
      $('.happiness-conditional').text(pet_info.name + " is sad! Cheer him up with treats or playing with him!");
      conditional.play();
    }
    if(pet_info.energy < 0){
      //Notification when energy   is at 0
      pet_info.energy = 0;
      $('.energy-conditional').text(pet_info.name + " is tired! Energize him with treats or a nap!");
      conditional.play();
    }
  }
  
  // Updates your HTML with the current values in your pet_info object
  function updatePetInfoInHtml() {
    $('.name').text(pet_info['name']);
    $('.weight').text(pet_info['weight']);
    $('.happiness').text(pet_info['happiness']);
    $('.energy').text(pet_info['energy']);
  }
