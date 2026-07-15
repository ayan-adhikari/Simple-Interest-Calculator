//This js file handles important stuff that are usually used
//Variables
window.addEventListener(`load`, loadPage)
function loadPage()
{
  //Arrow function for changing from loading screen to regular screen
  setTimeout(() => {
    //Hide main loading screen and wrapper
    data.loaderDisplay = `hidden` 
    //Show main page
    data.contentDisplay = ``
    //Remove white-bg class from body
    document.getElementById(`body`).classList.remove(`white-bg`)
  }, 1); /*This is the delay which can be increased for testing and is 1ms by default*/
}
//Function for generating numbers between min to max (including min and max)
function generateRandomNumber(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

