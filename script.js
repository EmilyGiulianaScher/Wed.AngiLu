document.addEventListener('DOMContentLoaded', () => {

    //===
    // VARIABLES
    //===
    const DATE_TARGET = new Date('12/15/2023 05:01 PM');
    // DOM for render
    const SPAN_DAYS = document.querySelector('span#days');
    const SPAN_HOURS = document.querySelector('span#hours');
    const SPAN_MINUTES = document.querySelector('span#minutes');
    const SPAN_SECONDS = document.querySelector('span#seconds');
    // Milliseconds for the calculations
    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

    //===
    // FUNCTIONS
    //===

    /**
    * Method that updates the countdown and the sample
    */
    function updateCountdown() {
        // Calcs
        const NOW = new Date()
        const DURATION = DATE_TARGET - NOW;
        let REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
        let REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        let REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        let REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

        // Set any negative values to 0
        REMAINING_DAYS = REMAINING_DAYS < 0 ? 0 : REMAINING_DAYS;
        REMAINING_HOURS = REMAINING_HOURS < 0 ? 0 : REMAINING_HOURS;
        REMAINING_MINUTES = REMAINING_MINUTES < 0 ? 0 : REMAINING_MINUTES;
        REMAINING_SECONDS = REMAINING_SECONDS < 0 ? 0 : REMAINING_SECONDS;

        // Naileth Pinto

        // Render
        SPAN_DAYS.textContent = REMAINING_DAYS;
        SPAN_HOURS.textContent = REMAINING_HOURS;
        SPAN_MINUTES.textContent = REMAINING_MINUTES;
        SPAN_SECONDS.textContent = REMAINING_SECONDS;
    }

    //===
    // INIT
    //===
    updateCountdown();
    // Refresh every second
    setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
});
//const FotoConFondo = document.querySelector(".FotoConFondo");
//const FotoSinFondo = document.querySelector(".FotoSinFondo");
//const cbuTitulo = document.querySelector(".cbuTitulo");

//window.addEventListener("scroll", () => {
    //let scroll = window.scrollY;

    //FotoConFondo.style.top = scroll * 0.2 + "px";
//});

const imagenes =
document.getElementsByClassName('FotoConFondo');
document.getElementsByClassName('FotoSinFondo');
new simpleParallax(imagenes);









