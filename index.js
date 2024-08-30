// window.addEventListener('scroll', function(){
//     let value = window.scrollY
//     if(value >= .01){
//         this.document.getElementById('navigasi').style.position = 'fixed'
//         this.document.getElementById('badge').style.bottom = '10vh'
//     }
//     else{
//         this.document.getElementById('navigasi').style.position = 'static'
//         this.document.getElementById('badge').style.bottom = '2vh'
//     }
// })

window.addEventListener('DOMContentLoaded', function() {
    const medCheckElement = document.getElementById('med_check');
    
    if (medCheckElement) {
        window.addEventListener('resize', function() {
            const a = window.innerHeight;
            const b = window.innerWidth;
            medCheckElement.innerHTML = "@media screen and (max-width:" + b + "px) and (max-height: " + a + "px)";
        });
    } else {
        console.error('Element with ID "med_check" not found.');
    }
});


window.addEventListener('resize', function(){
    console.log(innerWidth)
    
    if(window.innerWidth < 1138){
    document.getElementById("burger").addEventListener('click', function(){
    
            document.getElementById("side-navigasi").style.display = "block"
    
        })
    }
    
    if(window.innerWidth>1138){
        document.getElementById("side-navigasi").style.display = "none"
    }
    
    document.getElementById("x").addEventListener('click', function(){
        document.getElementById("side-navigasi").style.display = "none"
    })
})