const navLinks = document.querySelectorAll('[data-scroll]');

navLinks.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();

        const blockId = item.dataset.scroll;
        const block = document.getElementById(blockId);

        block.scrollIntoView({ behavior: 'smooth' });
    });
});
const scrollToTopButton = document.getElementById("scrollToTopButton");


window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};


scrollToTopButton.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');

modalBtn.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        let modalContent = modal.querySelector('.modal__content');

        modalContent.addEventListener('click', event => {
            event.stopPropagation();
        });

        modal.classList.add('show');
        body.classList.add('no-scroll');

        setTimeout(() => {
            modalContent.style.transform = 'none';
            modalContent.style.opacity = '1';
        }, 1);
    });
});


modalClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget.closest('.modal');
        closeModal(currentModal);
    });
});

modal.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget;
        closeModal(currentModal);
    });
});

function closeModal(currentModal) {
    let modalContent = currentModal.querySelector('.modal__content');
    modalContent.removeAttribute('style');

    setTimeout(() => {
        currentModal.classList.remove('show');
        body.classList.remove('no-scroll');
    }, 200);
}

const copyNumberBtn = document.querySelectorAll('[data-copy-number]');
const number = '43-24-72';

copyNumberBtn.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();

        navigator.clipboard
            .writeText(number)
            .then(() => {
                console.log('Скопировано');
            })
            .catch(error => {
                console.error(`Текст не скопирован ${error}`);
            });
    });
});

const clearInputsBtn = document.querySelector('[data-clear]');
const inputs = document.querySelectorAll('.input');

clearInputsBtn &&
    clearInputsBtn.addEventListener('click', event => {
        event.preventDefault();

        inputs.forEach(item => {
            item.value = '';
        });
    });
   
    document.getElementById('openSlideButton').addEventListener('click', function() {
        var slideContent = `
            <div id="slide">
                <h2>Мы ответим на любой ваш вопрос!</h2>
                <input type="text" id="orderNumber" placeholder="Введите номер заказа">
                <input type="text" id="questionInput" placeholder="Ваш вопрос">
                <button id="sendButton">Отправить</button>
            </div>
        `;
        
        var newWindow = window.open("", "_blank", "width=400,height=300");
        newWindow.document.write(slideContent);
    
        newWindow.document.getElementById('sendButton').addEventListener('click', function() {
            var orderNumber = newWindow.document.getElementById('orderNumber').value;
            var question = newWindow.document.getElementById('questionInput').value;
            alert('Заказ №' + orderNumber + ', ваш вопрос: ' + question + ', был успешно отправлен!');
        });
    });
    