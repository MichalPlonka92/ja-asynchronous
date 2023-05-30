const boxRef = document.querySelector('.box');
const animationDuration = 3000; // Czas trwania animacji w milisekundach

function animateBox() {
    setTimeout(() => {
        boxRef.style.left = '500px';
        setTimeout(() => {
            boxRef.style.top = '500px';
            setTimeout(() => {
                boxRef.style.left = '0';
                setTimeout(() => {
                    boxRef.style.top = '0';
                    animateBox(); // Rekurencyjne wywołanie funkcji animateBox() dla zapętlenia animacji
                }, animationDuration);
            }, animationDuration);
        }, animationDuration);
    }, animationDuration);
}

animateBox(); // Wywołanie funkcji animateBox() dla rozpoczęcia animacji
