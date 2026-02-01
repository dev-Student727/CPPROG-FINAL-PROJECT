document.addEventListener('DOMContentLoaded', () => {
    
    // --- Existing Element Selections ---
    const orderForm = document.getElementById('orderForm');
    const cancelButton = document.querySelector('.cancel-btn'); 
    const seeMoreButton = document.getElementById('seeMoreBtn'); // Assumed ID for 'See More'
    
    // MODIFIED: Use a specific, consistent class name for desktop buttons
    const viewDesktopButtons = document.querySelectorAll('.view-product-btn-desktop'); 
    
    // --- NEW Element Selection: Targets ALL 'View Laptop' buttons ---
    const viewLaptopButtons = document.querySelectorAll('.view-laptop-btn'); 


    // --- Handle Cancel Button Click (Existing) ---
    if (cancelButton && orderForm) {
        cancelButton.addEventListener('click', function(event) {
            event.preventDefault(); 
            const userConfirmed = confirm('Are you sure you want to exit?');
            
            if (userConfirmed) {
                orderForm.reset();
                window.location.href = "home.html";
            }
        });
    }


    // --- Handle 'View Product' Button Click (REPLACED/MODIFIED) ---
    // Now uses the specific class 'view-product-btn-desktop'
    if (viewDesktopButtons.length > 0) {
        viewDesktopButtons.forEach(button => {
            button.addEventListener('click', function() {
                window.location.href = 'desktop.html'; // Now goes to desktop.html
            });
        });
    }


    // --- Handle 'View Laptop' Button Click (Existing Logic) ---
    if (viewLaptopButtons.length > 0) {
        viewLaptopButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Forces navigation to laptop.html
                window.location.href = 'laptop.html';
            });
        });
    }


    // --- Progress Bar Logic (Existing - Best Practice Location) ---
    const nextStageButton = document.getElementById('nextStageButton');

    if (nextStageButton) {
        let currentStepIndex = 0; 
        const steps = document.querySelectorAll('#progressBar .step');
        const maxSteps = steps.length - 1; 

        function updateProgress() {
            if (currentStepIndex >= maxSteps) {
                nextStageButton.disabled = true;
                nextStageButton.textContent = "Order Complete (Delivered)";
                return;
            }

            steps[currentStepIndex].classList.remove('active');
            currentStepIndex++;
            steps[currentStepIndex].classList.add('active');

            nextStageButton.textContent = `Advance to Next Stage (${currentStepIndex}/${maxSteps})`;
            
            if (currentStepIndex === maxSteps) {
                nextStageButton.disabled = true;
                nextStageButton.textContent = "Order Complete (Delivered)";
            }
        }

        nextStageButton.addEventListener('click', updateProgress);
    }
});