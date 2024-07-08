document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the attribute 'data-tab-button'
    const buttons = document.querySelectorAll('[data-tab-button]');

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
});

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
