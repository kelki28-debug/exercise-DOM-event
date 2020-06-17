
let button = document.querySelector('.register');

button.addEventListener('click', function(){
    let user = {
        fullName: document.querySelector('.text').value,
        email:document.querySelector('.email').value,
        password:document.querySelector('.password').value,
        phone:document.querySelector('.phone').value
    }
    
    alert(`Nama: ${user.fullName}
    Email: ${user.email}
    Password: ${user.password}
    Phone: ${user.phone}`)
})





