const internavDrum = document.querySelector('.drum__main-internal--wheel');
const upDrum = document.querySelector('.drum__main-up')

document.querySelector('.drum__logo-content--button').addEventListener('click', () => {
    console.log('sda');
    
    internavDrum.style.animation = 'scrollingDrum 6s ease'
    upDrum.style.animation = 'scrollingUpDrum 6s ease'
    setTimeout(() => {
        // internavDrum.style.animation = 'scrollingDrum 4s ease'
        upDrum.classList.add('up-active');
        upDrum.src = './images/active up.png'
        internavDrum.classList.add('internal-active')
        document.querySelector('.alert-container').style.display = 'flex';
        document.body.classList.add('body-active')
    }, 6000)
})
