const sections = document.querySelectorAll('.animate')

window.addEventListener('DOMContentLoaded',animate)

function animate(){
    sections.forEach(function(sec){
        let height = sec.offsetHeight
        let offset = sec.offsetTop - 300
        let top = window.scrollY 
        
        if(top>= offset && top < offset + height)
            sec.classList.add('show-animation')
        else{
            sec.classList.remove('show-animation')
        }
        
    })
}

window.onscroll = () => {
    animate()
}
