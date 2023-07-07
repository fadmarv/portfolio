var i = 0;
var txt = "Hello , i am Fadunmiye Marvellous i am a Web Developer.";
var speed = 100;

function typewriter() {
    if (1 < txt.length) {
        document.getElementById("bio").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typewriter,speed);
    }
}
typewriter()