function createLink(title, url, description, category, tags) {
    return {
        title: title,
        url: url,
        description: description,
        category: category,
        tags: tags,
        favicon: `${url}/favicon.ico`
    };
}

const allLinks = [
    createLink("Google", "https://google.com", "The world's most popular search engine", "social", ["search", "web"]),
    createLink("Facebook", "https://facebook.com", "Connect with friends. Share photos and videos", "social", ["social media", "networking"]),
    createLink("YouTube", "https://youtube.com", "Video sharing platform", "social", ["video", "entertainment"]),
    createLink("GitHub", "https://github.com", "Where the world builds software", "work", ["development", "code", "git"]),
    createLink("Upwork", "https://www.upwork.com", "A leading freelancing platform.", "work", ["freelancing", "remote work", "marketplace"]),
    createLink("Kashipara", "https://kashipara.com", "Educational platform offering project source codes.", "dev", ["open-source", "projects", "education", "programming"]),
    createLink("V0", "https://v0.dev", "AI-powered tool by Vercel for generating code from text descriptions", "dev", ["AI", "UI", "code generation", "Vercel"]),
    createLink("CerebrasCoder", "https://CerebrasCoder.com", "AI tool for generating fully functional applications from ideas", "dev", ["AI", "code generation", "app development"]),
    createLink("UI Verse", "https://uiverse.io", "Website styling", "dev", ["Website", "code ", "styles"]),
    createLink("Project AI", "https://projectai.in", "Project building", "dev", ["Website", "Projects "]),
    createLink("Land Book", "https://land-book.com", "Make Landing Pages", "dev", ["Website", "Landing Pages "]),
    createLink("10Web", "https://10web.io", "Building, hosting, and managing WordPress websites.","dev",["AI", "website builder", "hosting", "SEO"]),
    createLink("Chat GPT", "https://chat.openai.com", "AI chatbot developed by OpenAI", "bots", ["AI", "language model", "text generation"]),
    createLink("Perplexity", "https://perplexity.ai", "AI-powered search engine", "bots", ["AI", "language model"]),
    createLink("Deepseek", "https://www.deepseek.com", "Advanced AI platform", "bots", ["AI", "language model"]),
    createLink("Quadratic Ai", "https://quadratichq.com", "Modern spreadsheet technology", "analysis", ["AI", "spreadsheets", "data analysis"]),
    createLink("Convergence AI", "https://convergence.ai", "Best for research", "research", ["AI", "industry solutions", "efficiency"]),
    createLink("W3Schools", "https://www.w3schools.com", "learning web technologies", "learning", ["tutorials"]),
    createLink("Coursera", "https://coursera.org", "Online courses from top universities", "learning", ["education", "courses"]),
    createLink("Brand Mark", "https://brandmark.io", "AI-powered online logo and brand identity generator.", "design", ["logo design", "branding", "graphics"]),
    createLink("Designs AI", "https://designs.ai", "Create logos, videos, and more in minutes.", "design", ["design", "content creation", "branding"]),
    createLink("MidJourney","https://midjourney.com","Creates stunning and realistic images from text prompts.","design",["image generation", "art"]),
    createLink("MagicSlides", "https://magicslides.app", "AI-powered Slides that creates presentations from text, videos and more", "slides", ["education", "courses"]),
    createLink("Terrific Tools", "https://terrific.tools", "Productivity and automation solutions for developers and businesses", "tools", ["productivity"]),
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
