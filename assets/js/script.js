document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll(".btn-filter");
    const destinationCards = document.querySelectorAll(".destination-card");

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => 
                btn.classList.remove('active')
            )

            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Filter Cards
            destinationCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = "block"
                } else {
                    card.style.display = "none";
                }
            })
        })
    })

    // Login type toggle functionality
    const toggleButtons = document.querySelectorAll('.btn-toggle');
    const userLogin = document.getElementById('user-login');
    const adminLogin = document.getElementById('admin-login')

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update Active State
            toggleButtons.forEach(btn=> btn.classList.remove('active'))
            button.classList.add('active');

            // Show/Hide forms
            if (button.dataset.loginType === 'user') {
                userLogin.classList.remove('d-none');
                adminLogin.classList.add('d-none');
            } else {
                adminLogin.classList.remove('d-none');
                userLogin.classList.add('d-none');
            }
        })
    })
})