// LÓGICA PARA A PESSOA CLICAR NAS ABAS E MOSTRAR OS FILMES
// LOGICA PARA ABRIR E FECHAR QUESTÕES

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]'); //selecionando tds os elements com a atributo [data-tab-button]
    
    const questions = document.querySelectorAll('[data-faq-question]'); //selecionando tds os elements com a atributo [data-tab-question]
    
    const heroSection = document.querySelector('.hero')
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })


    // SESSAO DE ATRAÇÕES, PROGRAMAÇÃO DAS AABS
    // Loop through all the buttons using forEach
    buttons.forEach(button => {
        // Add click event listener to each button
        button.addEventListener('click', function(event) {
            // Get the tab ID from the clicked button's data attribute
            const abaAlvo = event.target.dataset.tabButton; 
            // Find the corresponding tab content using the tab ID
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);

            // Hide all tab contents
            escondeTodasAbas(); 
            // Show the selected tab content by adding the active class
            aba.classList.add('shows__list--is-active'); 
            
            // Remove active state from all tab buttons
            removeBotaoAtivo(); 
            // Add active state to the clicked tab button
            event.target.classList.add('shows__tabs__button--is-active');        
        });
    });

    // SESSAO FAQ, ACCORDION
    // Loop through all questions using forEach
    questions.forEach(question => {
        // Add click event listener to each question
        question.addEventListener('click', abreOuFechaResposta);
    });

});

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');    
    header.classList.add('header--is-hidden') //// Show the selected tab content by adding the active class
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');    
    header.classList.remove('header--is-hidden') //// Show the selected tab content by adding the active class
}

// function to open and close answers
function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open'; // identificar o elemento e atribuir classes css
    const elementoPai = elemento.target.parentNode; // Encontrar a pergunta que foi clicada

    elementoPai.classList.toggle(classe);
}

// Function to remove active state from all tab buttons
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    buttons.forEach(button => {
        button.classList.remove('shows__tabs__button--is-active');
    });
}

// Function to hide all tab contents
function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    tabsContainer.forEach(tab => {
        tab.classList.remove('shows__list--is-active');
    });
}
