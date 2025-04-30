function send (){
    event.preventDefault();
    let name = document.querySelector('[name="name"]').value
    let surname = document.querySelector('[name="surname"]').value
    let email = document.querySelector('[name="email"]').value
    let number = document.querySelector('[name="number"]').value
    console.log('qq')
    emailjs.init("oyTsF8QHmlqgyvx-p");

    let templateParams = {
        from_name:name,
        from_surname:surname,
        from_mail:email,
        from_number:number,
    };
    console.log('wewew')
    emailjs.send('service_lwofais', 'template_8egl5o4', templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
}
let button = document.querySelector('.button')
let right_but = button.querySelector('input')

right_but.addEventListener('click', send)

let but = document.querySelectorAll('.h2')
let card = document.querySelectorAll('.card')

for (let i=0; i<but.length; i+=1){
  but[i].addEventListener('click', function(){
    document.querySelector('.is-active').classList.remove("is-active")
    card[i].classList.add("is-active")
  })
}
