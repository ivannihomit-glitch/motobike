// js/script.js
(function() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');

    function switchToPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active-page');
        });
        const activePage = document.getElementById(pageId);
        if (activePage) {
            activePage.classList.add('active-page');
        }
        navBtns.forEach(btn => {
            const btnPage = btn.getAttribute('data-page');
            if (btnPage === pageId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const pageId = btn.getAttribute('data-page');
            if (pageId) {
                switchToPage(pageId);
            }
        });
    });

    const heroBtn1 = document.getElementById('heroCatalogBtn');
    const heroBtn2 = document.getElementById('heroCatalogBtn2');
    if (heroBtn1) {
        heroBtn1.addEventListener('click', () => switchToPage('catalog'));
    }
    if (heroBtn2) {
        heroBtn2.addEventListener('click', () => switchToPage('catalog'));
    }

    const sendBtn = document.getElementById('sendFakeRequest');
    const formMsg = document.getElementById('formMessage');
    if (sendBtn) {
        sendBtn.addEventListener('click', () => {
            const nameInput = document.getElementById('userName');
            const phoneInput = document.getElementById('userPhone');
            const name = nameInput ? nameInput.value.trim() : '';
            const phone = phoneInput ? phoneInput.value.trim() : '';
            if (!name || !phone) {
                if(formMsg) formMsg.style.color = "#c2410c";
                if(formMsg) formMsg.innerText = 'Пожалуйста, заполните имя и телефон.';
                setTimeout(() => { if(formMsg) formMsg.innerText = ''; }, 2000);
                return;
            }
            if(formMsg) {
                formMsg.style.color = "#2b6e3c";
                formMsg.innerText = `Спасибо, ${name}! Менеджер перезвонит на ${phone} в ближайшее время.`;
            }
            if(nameInput) nameInput.value = '';
            if(phoneInput) phoneInput.value = '';
            setTimeout(() => {
                if(formMsg) formMsg.innerText = '';
            }, 4000);
        });
    }

    const allBikeBtns = document.querySelectorAll('#catalog .bike-card .btn');
    allBikeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const cardTitle = btn.closest('.bike-card')?.querySelector('h3')?.innerText || 'мотоцикл';
            alert(`Спасибо за интерес к ${cardTitle}! Наш менеджер свяжется с вами в ближайшее время.`);
        });
    });

    const currentActive = document.querySelector('.page.active-page');
    if (!currentActive) {
        switchToPage('home');
    }
})();