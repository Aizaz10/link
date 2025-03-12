const allLinks = [
    {
        title: "Google",
        url: "https://google.com",
        description: "The world's most popular search engine",
        category: "seo",
        tags: ["search", "web"],
        favicon: "https://www.google.com/favicon.ico",
    },
    {
        title: "Facebook",
        url: "https://facebook.com",
        description: " Connect with friends. Share photos and videos, send messages and get updates.",
        category: "social",
        tags: ["social media", "networking", "communication"],
        favicon: "https://www.facebook.com/favicon.ico",
    },
    {
        title: "YouTube",
        url: "https://youtube.com",
        description: "Video sharing platform",
        category: "social",
        tags: ["video", "entertainment"],
        favicon: "https://www.youtube.com/favicon.ico",
    },
    {
        title: "GitHub",
        url: "https://github.com",
        description: "Where the world builds software",
        category: "work",
        tags: ["development", "code", "git"],
        favicon: "https://github.com/favicon.ico"
    },
    {
        title: "Convergence AI",
        url: "https://convergence.ai",
        description: "Focused on developing and integrating AI solutions for various industries.Best for research",
        category: "research",
        tags: ["AI", "industry solutions", "efficiency"],
        favicon: "https://convergence.ai/favicon.ico",

    },
    {
        title: "Stack Overflow",
        url: "https://stackoverflow.com",
        description: "Where developers learn, share, & build careers",
        category: "work",
        tags: ["development", "programming"],
        favicon: "https://stackoverflow.com/favicon.ico"
    },
    {
        title: "Coursera",
        url: "https://coursera.org",
        description: "Online courses from top universities",
        category: "learning",
        tags: ["education", "courses"],
        favicon: "https://www.coursera.org/favicon.ico",
    },
    {
        title: "Twitter",
        url: "https://twitter.com",
        description: "Social networking service",
        category: "social",
        tags: ["social media", "news"],
        favicon: "https://twitter.com/favicon.ico",
    },
    {
        title: "Brand Mark",
        url: "https://brandmark.io",
        description: "AI-powered online logo and brand identity generator.",
        category: "design",
        tags: ["AI", "logo design", "branding", "graphics"],
        favicon: "https://brandmark.io/favicon.ico"
    },
    {
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org",
        description: "Resources for developers, by developers",
        category: "learning",
        tags: ["development", "documentation", "web"],
        favicon: "https://developer.mozilla.org/favicon.ico"
    },
    {
        title: "Kashipara",
        url: "https://kashipara.com",
        description: "Educational platform offering a open-source project source codes.",
        category: "dev",
        tags: ["open-source", "projects", "education", "programming"],
        favicon: "https://www.kashipara.com/favicon.ico",
    },
    {
        title: "ChatGPT",
        url: "https://chat.openai.com",
        description: "AI chatbot developed by OpenAI, capable of generating texts, supporting different tasks.",
        category: "bots",
        tags: ["AI", "language model", "text generation", "image processing"],
        favicon: "https://chat.openai.com/favicon.ico",
    },
    {
        title: "V0",
        url: "https://v0.dev",
        description: "AI-powered tool by Vercel for generating production-ready UI code from text descriptions.",
        category: "dev",
        tags: ["AI", "UI", "code generation", "Vercel"],
        favicon: "https://v0.dev/favicon.ico",
    },
    {
        title: "CerebrasCoder",
        url: "https://cerebrascoder.com",
        description: "AI tool for generating fully functional applications from ideas, powered by Llama3.3-70B model.",
        category: "dev",
        tags: ["AI", "code generation", "app development", "Llama3.3"],
        favicon: "https://cerebrascoder.com/favicon.ico",
    },
    {
        title: "MagicSlides",
        url: "https://magicslides.app",
        description: "AI-powered Slides that creates presentations from text, YouTube videos, PDFs, and web pages.",
        category: "slides",
        tags: ["AI", "presentation maker", "Google Slides"],
        favicon: "https://magicslides.app/favicon.ico"
    },
    {
        title: "Terrific Tools",
        url: "https://terrific.tools",
        description: "Productivity and automation solutions for developers and businesses.",
        category: "tools",
        tags: ["AI", "automation","productivity"],
        favicon: "https://terrific.tools/favicon.ico",
    },
    {
        title: "Quadratic Ai",
        url: "https://quadratichq.com",
        description: "Modern spreadsheet technology",
        category: "analysis",
        tags: ["AI", "spreadsheets","data analysis"],
        favicon: "https://quadratichq.com/favicon.ico",
    },
    {
        title: "Codewars",
        url: "https://www.codewars.com",
        description: "Online platform for improving coding skills",
        category: "learning",
        tags: ["coding challenges", "programming"],
        favicon: "https://www.codewars.com/favicon.ico",
    },
    {    
        title: "Perplexity",
        url: "https://perplexity.ai",
        description: "AI-powered search engine",
        category: "bots",
        tags: ["AI", "language model"],
        favicon: "https://perplexity.ai/favicon.ico",
    },
    {    
        title: "Deepseek",
        url: "https://www.deepseek.com",
        description: " Advanced AI platform",
        category: "bots",
        tags: ["AI", "language model"],
        favicon: "https://www.deepseek.com/favicon.ico",
    },
    {    
        title: "Type Link",
        url: "https://type.link",
        description: "Website builder",
        category: "dev",
        tags: ["Website"],
        favicon: "https://type.link/favicon.ico",
    }
];

// DOM elements
const linksContainer = document.getElementById('links-container');
const searchInput = document.getElementById('search-input');
const categoryButtons = document.querySelectorAll('.category-btn');

// Current filter state
let currentCategory = 'all';
let searchQuery = '';

// Function to render links based on current filters
function renderLinks() {
    // Filter links based on category and search query
    let filteredLinks = [...allLinks];

    if (currentCategory !== 'all') {
        filteredLinks = filteredLinks.filter(link => link.category === currentCategory);
    }

    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredLinks = filteredLinks.filter(link =>
            link.title.toLowerCase().includes(query) ||
            link.description.toLowerCase().includes(query) ||
            link.tags.some(tag => tag.toLowerCase().includes(query))
        );
    }

    // Clear the container
    linksContainer.innerHTML = '';

    // Show empty state if no links match the filters
    if (filteredLinks.length === 0) {
        linksContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No links found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }

    // Render each link
    filteredLinks.forEach(link => {
        const linkCard = document.createElement('div');
        linkCard.className = 'link-card';

        // Function to extract domain from URL for favicon fallback
        const getDomain = (url) => {
            try {
                const domain = new URL(url).hostname;
                return domain;
            } catch (e) {
                return url;
            }
        };

        // Create tags HTML
        const tagsHTML = link.tags.map(tag =>
            `<span class="tag">${tag}</span>`
        ).join('');

        linkCard.innerHTML = `
            <div class="link-header">
                <div class="favicon">
                    <img src="${link.favicon}" alt="" onerror="this.src='https://www.google.com/s2/favicons?domain=${getDomain(link.url)}&sz=64'">
                </div>
                <h3 class="link-title">${link.title}</h3>
            </div>
            <div class="link-content">
                <p class="link-description">${link.description}</p>
                <div class="tags">
                    ${tagsHTML}
                </div>
            </div>
            <div class="link-footer">
                <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="visit-btn">
                    <span>Visit</span>
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `;

        linksContainer.appendChild(linkCard);
    });

    // Add event listeners to favorite buttons
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', toggleFavorite);
    });
}

// Function to toggle favorite status
function toggleFavorite(e) {
    const id = parseInt(e.currentTarget.dataset.id);
    const link = allLinks.find(link => link.id === id);

    if (link) {
        link.isFavorite = !link.isFavorite;
        e.currentTarget.classList.toggle('active');
    }
}

// Event listener for category buttons
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Update current category
        currentCategory = button.dataset.category;

        // Re-render links
        renderLinks();
    });
});

// Event listener for search input
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderLinks();
});

// Initial render
renderLinks();