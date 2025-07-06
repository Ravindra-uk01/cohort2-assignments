
function showClock() {
    
    setInterval(()=> {
        const date = new Date();
        const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
        const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`; 
        const seconds = date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`; 

        const ampm = hours >= 12 ? 'PM' : 'AM';

        console.log('HH:MM:SS', `${hours}:${minutes}:${seconds}`);
        console.log('HH:MM::SS AM/PM ', `${hours}:${minutes}:${seconds} ${ampm}`);
    }, 1000)
}


showClock();