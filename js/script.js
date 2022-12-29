window.onload = () => {
    
    let btn = document.getElementById('cta-btn');
    let overlay = document.getElementById('overlay');
    btn.addEventListener('click',() => {
        // changing display property from none (in html its none) to grid .ie when we click on it it will display.
        overlay.style.display='grid';
        overlay.classList.add('animate-overlay');
        setTimeout(() => {
            overlay.classList.remove('animate-overlay');
        }, 3000)
    })
}
