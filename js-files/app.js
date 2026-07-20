let {signal, component} = reef;

// Create a reactive data store
let data = signal({
	//Loader Variables
    contentDisplay: `hidden`,
    loaderDisplay: `flexbox`,
    //Content variables
    mode: `interest`,
    interest: `selected`,
    principal: ``,
    time: ``,
    interestRate: ``,
});

// Create a template function
function template () {
	return `
        <!--Main content-->
        <div id="page-content" class="${data.contentDisplay}">
            <!-- Header -->
            <header class="header">
                <h1>Simple Interest Calculator</h1>
            </header>
            <!-- Main Content -->
            <main class="main secondary-bg">
                <p class="text body-text centered-text">Select mode, enter the values for each known variable, then press enter. (Buttons are coming soon)</p>
                <h2 class="subheading-text text centered-text">Modes</h2>
                <div class="flexbox mode-container"> 
                    <button id="interest-button" class="button ${data.interest}"><p class="body-text">Interest</p></button>
                    <button id="principal-button" class="button ${data.principal}"><p class="body-text">Principal</p></button>
                    <button id="time-button" class="button ${data.time}"><p class="body-text">Time</p></butbodyton>
                    <button id="interest-rate-button" class="button ${data.interestRate}"><p class="body-text">Interest Rate</p></button>
                </div>

            </main>
        </div>

        <!--Loading Screen-->
        <div id="loading-screen" class="${data.loaderDisplay}">
            <div id="loader-wrapper" class="${data.loaderDisplay}">
                <div id="outer-loader" class="${data.loaderDisplay}">
                    <div id="middle-loader" class="${data.loaderDisplay}">
                        <div id="inner-loader" class="${data.loaderDisplay}"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Create a component
// Renders into the UI, and updates whenever the data changes
component('#app', template);