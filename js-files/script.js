//This file has project-specific scripting that is different for each project

window.addEventListener(`load`, ()=>{
    //Element Variables
    const interestButton = document.getElementById(`interest-button`)
    const principalButton = document.getElementById(`principal-button`)
    const timeButton = document.getElementById(`time-button`)
    const interestRateButton = document.getElementById(`interest-rate-button`)
    //Event Listeners
    interestButton.addEventListener(`click`, changeMode(`interest`))
    principalButton.addEventListener(`click`, changeMode(`principal`))
    timeButton.addEventListener(`click`, changeMode(`time`))
    interestRateButton.addEventListener(`click`, changeMode(`interestRate`))
}, 1)
//Functions
function changeMode(newMode)
{
    //Reset variables
    data.interest = ``
    data.principal = ``
    data.time = ``
    data.interestRate = ``
    //Add the rest of the function later
}