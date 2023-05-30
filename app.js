const boxRef = document.querySelector('.box');
//const animationDuration = 3000; // Czas trwania animacji w milisekundach

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
/*const receipt = new Promise((resolve, reject) => {
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
 */
// function move(top, left) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             boxRef.style.left = left;
//             boxRef.style.top = top;
//             resolve();
//         }, 3000);
//     });
// }
//
// move(0, '500px')
//     .then(() => move ('500px', '500px'))
//     .then(() => move('500px', '0px'))
//     .then(() => move('0px', '0px'));

 // const url = 'https://api.nbp.pl/api/exchangerates/rates/a/chf/?format=json';
// const request = fetch (url);
//
//
// request
//     .then((response) => response.json())
//     .then((data) => console.log(data.rates[0].mid))
//     .catch(console.log);
//
// function myFetch(url){
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//
//         xhr.onload = function () {
//             if(xhr.status >= 200 && xhr.status < 400){
//                 const response = JSON.parse(xhr.responseText);
//                 resolve(response);
//             } else{
//                 reject(xhr.status);
//             }
//         }
//         xhr.onerror = function () {
//             reject('Something is no yes!')
//         }
//         xhr.open('GET', url, true);
//         xhr.send()
//     })
// }
//
// const request = myFetch(url);
//
// request
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
//     .finally(() => {console.log('done!')})
//

