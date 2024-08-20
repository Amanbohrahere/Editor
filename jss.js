window.onload = () => {
    document.body.classList.add('fade-in');

    // Modal functionality
    const modal = document.getElementById('profile-modal');
    const img = document.getElementById('profile-pic');
    const modalImg = document.getElementById('modal-img');
    const span = document.getElementsByClassName('close')[0];

    img.onclick = () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    }

    span.onclick = () => {
        modal.style.display = 'none';
    }

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
};

document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('social-hover');
    });
    link.addEventListener('mouseout', () => {
        link.classList.remove('social-hover');
    });
});
window.onload = () => {
    document.body.classList.add('fade-in');

    // Modal functionality
    const modal = document.getElementById('profile-modal');
    const img = document.getElementById('profile-pic');
    const modalImg = document.getElementById('modal-img');
    const span = document.getElementsByClassName('close')[0];

    img.onclick = () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    }

    span.onclick = () => {
        modal.style.display = 'none';
    }

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    // Show video section and introduction after 1 second
    setTimeout(() => {
        document.querySelector('.intro-video').classList.remove('hidden');
        document.querySelectorAll('.delayed-intro').forEach(el => el.classList.add('fade-in'));
    }, 1000); // 1 second delay
};

document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('social-hover');
    });
    link.addEventListener('mouseout', () => {
        link.classList.remove('social-hover');
    });
});
