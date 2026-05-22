const exploreBtn = document.getElementById('exploreBtn');

exploreBtn.addEventListener('click', () => {
    document.getElementById('services').scrollIntoView({
        behavior: 'smooth'
    });
});

