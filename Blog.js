// Search Filter Functionality
document.querySelector('.inp-sr').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const blogPosts = document.querySelectorAll('.left-container');
    
    blogPosts.forEach(function(post) {
        const title = post.querySelector('.left-h2').textContent.toLowerCase();
        const category = post.querySelector('.category').textContent.toLowerCase();
        const content = post.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || category.includes(searchTerm) || content.includes(searchTerm)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
});

// "Read More" Toggle Functionality
const readMoreLinks = document.querySelectorAll('.read-more');
readMoreLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const content = this.previousElementSibling;
        const fullText = content.getAttribute('data-full-text');
        
        if (content.textContent === fullText) {
            content.textContent = content.getAttribute('data-short-text');
            this.textContent = 'Read More →';
        } else {
            content.textContent = fullText;
            this.textContent = 'Read Less ↑';
        }
    });
});

// Dynamic Pagination
const pageNumbers = document.querySelectorAll('.page-number');
pageNumbers.forEach(function(page) {
    page.addEventListener('click', function(event) {
        event.preventDefault();
        const currentPage = document.querySelector('.page-number.active');
        if (currentPage) {
            currentPage.classList.remove('active');
        }
        this.classList.add('active');
        // Logic to fetch and display posts for the selected page
        console.log(`Displaying posts for page: ${this.textContent}`);
    });
});
