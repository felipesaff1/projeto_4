document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);

            escondeTodasAbas();
            removeBotaoAtivo();

            aba.classList.add('shows__list--is-active');
            botao.target.classList.add('shows__tabs__button--is-active');
        });
    }

    function escondeTodasAbas() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');
        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('shows__list--is-active');
        }
    }

    function removeBotaoAtivo() {
        const buttons = document.querySelectorAll('[data-tab-button]');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('shows__tabs__button--is-active');
        }
    }

    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            const item = question.parentElement;
            const isOpen = item.classList.contains('faq__questions__item--is-open');

            // Fecha todas as perguntas
            document.querySelectorAll('.faq__questions__item').forEach(function (el) {
                el.classList.remove('faq__questions__item--is-open');
            });

            // Se a pergunta clicada não estava aberta, abre ela
            if (!isOpen) {
                item.classList.add('faq__questions__item--is-open');
            }
        });
    });
});
