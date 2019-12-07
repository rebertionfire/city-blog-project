const date = new Date();
let locale = 'pt-PT';


setInterval(() => {
    const dateTime = new Date();
    let time = dateTime.toLocaleTimeString(locale);
    document.querySelector("#hour").innerHTML = time;
}, 1000);

document.querySelector("#date").innerHTML = date.toLocaleDateString(locale, {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
} );




