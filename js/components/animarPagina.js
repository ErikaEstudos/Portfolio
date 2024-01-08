const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)
        entry.target.classList.toggle('show' , entry.isIntersecting)
    })
})

const elementos = document.querySelectorAll('.animate')

elementos.forEach(el => intersectionObserver.observe(el))
