const boxRef = document.querySelector('.box');
const animationDuration = 3000; // Czas trwania animacji w milisekundach

/*function animateBox() {
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
*/
const receipt = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Kebab maj friend!");
    }, 3001);
    setTimeout(() => {
        reject("No kebab, łonna fajt?")
    }, 3000);
});

console.log(receipt)
receipt
.then((msg) =>{console.log(msg)
})
.catch((msg) =>{
    console.log(msg)
});