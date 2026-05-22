const exploreBtn = document.getElementById('exploreBtn');

exploreBtn.addEventListener('click', () => {
    document.getElementById('services').scrollIntoView({
        behavior: 'smooth'
    });
});

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    alert('Message sent successfully!');

    form.reset();
});