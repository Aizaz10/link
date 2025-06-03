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
    createLink("GitHub", "https://github.com", "Where the world builds software", "work", ["development", "code", "git"]),
    createLink("Upwork", "https://www.upwork.com", "A leading freelancing platform.", "work", ["freelancing", "remote work", "marketplace"]),
    createLink("Freelancer", "https://www.freelancer.com", "Find freelancers in any field, from design, web development to marketing to accounting.", "work", ["freelancing", "remote work"]),
    createLink("Linkedin", "https://www.linkedin.com", "online professional platform.", "work", ["freelancing", "remote work", "jobs"]),
    createLink("Indeed", "https://pk.indeed.com", "Jobs platform.", "work", ["freelancing", "remote work", "jobs"]),
    createLink("Flex jobs", "https://www.flexjobs.com", "Jobs platform.", "work", ["freelancing", "remote work", "jobs"]),
    createLink("We work remotely", "https://weworkremotely.com", "Jobs platform.", "work", ["freelancing", "remote work", "jobs"]),
    createLink("Hire in Pakistan", "https://hireinpakistan.com", "Pakistan Freelancing platform.", "work", ["freelancing", "remote work"]),
    createLink("Careerflow", "https://www.careerflow.ai", "Land your dream job without the stress.", "work", ["jobs", "work"]),
    createLink("Youware", "https://www.youware.com", "AI website maker - Stunning sites in seconds by simply text input.", "dev", ["open-source", "projects"]),
    createLink("Kashipara", "https://kashipara.com", "Educational platform offering project source codes.", "dev", ["open-source", "projects", "education", "programming"]),
    createLink("V0", "https://v0.dev", "AI-powered tool by Vercel for generating code from text descriptions", "dev", ["AI", "UI", "code generation", "Vercel"]),
    createLink("CerebrasCoder", "https://CerebrasCoder.com", "AI tool for generating fully functional applications from ideas", "dev", ["AI", "code generation", "app development"]),
    createLink("Code Convert", "https://www.codeconvert.ai", "Paste your code and click a button to convert it to your desired language.", "dev", ["AI", "code converter"]),
    createLink("UI Verse", "https://uiverse.io", "Website styling", "dev", ["Website", "code ", "styles"]),
    createLink("Spline", "https://spline.design", "Spline, a place to design and collaborate in 3D.", "dev", ["Website", "code ", "styles"]),
    createLink("Project AI", "https://projectai.in", "Project building", "dev", ["Website", "Projects"]),
    createLink("Replit", "https://replit.com", "Tell Replit Agent your app or website idea", "dev", ["Website", "Apps","Python"]),
    createLink("Land Book", "https://land-book.com", "Make Landing Pages", "dev", ["Website", "Landing Pages"]),
    createLink("Chat Base", "https://www.chatbase.co", "Create chatbots", "dev", ["bots", "AI"]),
    createLink("10Web", "https://10web.io", "Building, hosting, and managing WordPress websites.","dev",["AI", "website builder", "hosting", "SEO"]),
    createLink("21st", "https://21st.dev", "Ship polished UIs faster with ready-to-use React Tailwind components inspired by shadcn/ui.","dev",["AI", "UI", "components"]),
    createLink("Same", "https://same.new", "Prompt URL to make copies/pages.","dev",["AI", "code" , "UI"]),
    createLink("Lovable", "https://lovable.dev", "App Builder - Build a Website in Minutes","dev",["AI", "code" , "UI"]),
    createLink("ELF Sight", "https://elfsight.com", "Upgrade your website","dev",["AI", "code" , "UI"]),
    createLink("Durable AI", "https://durable.co", "Website builder that allowed me to apply my artistic side to the creation process","dev",["AI", "code"]),
    createLink("Code With Random", "https://www.codewithrandom.com", "find projects for programming.", "dev", ["project", "python","frontend","backend"]),
    createLink("Lazy AI", "https://getlazy.ai", "business apps/webs built with your prompts.","dev",["AI", "code"]),
    createLink("Chef Convex", "https://chef.convex.dev", "Generate and launch realtime full-stack apps you never thought possible","dev",["AI", "code"]),
    createLink("Fine", "https://ai.fine.dev", "What do you want to build? Vibe code full-stack web apps.","dev",["AI", "vibe code"]),
    createLink("Chat GPT", "https://chat.openai.com", "AI chatbot developed by OpenAI", "bots", ["AI", "language model", "text generation"]),
    createLink("Perplexity", "https://perplexity.ai", "AI-powered search engine", "bots", ["AI", "language model"]),
    createLink("Deepseek", "https://www.deepseek.com", "Advanced AI platform", "bots", ["AI", "language model"]),
    createLink("Convergence AI", "https://convergence.ai", "Best for research", "bots", ["AI", "industry solutions", "efficiency"]),
    createLink("X AI", "https://x.ai", "X chat bot", "bots", ["AI", "efficiency"]),
    createLink("Quill bot", "https://quillbot.com", "Ai detector and humanizer", "bots", ["AI", "humanize"]),
    createLink("Quadratic Ai", "https://quadratichq.com", "Modern spreadsheet technology", "analysis", ["AI", "spreadsheets", "data analysis"]),
    createLink("Formula Bot", "https://www.formulabot.com", "Platform to analyze, visualize, clean, transform and enrich your data", "analysis", ["AI", "spreadsheets", "data analysis"]),
    createLink("W3Schools", "https://www.w3schools.com", "learning web technologies", "learning", ["tutorials"]),
    createLink("Codedex", "https://www.codedex.io", "Coding practices using game", "learning", ["gaming","coding"]),
    createLink("Coursera", "https://coursera.org", "Online courses from top universities", "learning", ["education", "courses"]),
    createLink("Class central", "https://www.classcentral.com", "Online courses", "learning", ["education", "courses"]),
    createLink("Mind luster", "https://www.mindluster.com", "Discover top online courses to enhance your skills", "learning", ["skills", "courses"]),
    createLink("Quick Ref", "https://quickref.me", "cheatsheets and quick references", "learning", ["education", "cheatsheets"]),
    createLink("Brand Mark", "https://brandmark.io", "AI-powered online logo and brand identity generator.", "design", ["logo design", "branding", "graphics"]),
    createLink("Figma", "https://www.figma.com", "Create, share, and test designs for websites, mobile apps, and other digital products", "design", ["design","web"]),
    createLink("Picsart", "https://picsart.com", "From pro-quality business designs to next-gen AI art", "design", ["design","bg-remove","edit"]),
    createLink("PngIMG", "https://pngimg.com", "PNG images clipart catalog for design and web design in best resolution and quality.", "design", ["design","png","image"]),
    createLink("Lottie Files", "https://lottiefiles.com", "animations for web, apps and social.", "design", ["design", "code", "web"]),
    createLink("Postermywall", "https://www.postermywall.com", "Create posters that standout with easy-to-use poster maker", "design", ["design", "code", "web"]),
    createLink("Rx Resu", "https://rxresu.me", "Create your resume.", "resume", ["design", "resume"]),
    createLink("Kick Resume", "https://www.kickresume.com/en/", "Create your resume.", "resume", ["design", "resume"]),
    createLink("Hire Flow", "https://www.hireflow.net", "Check your resume.", "resume", ["design", "resume"]),
    createLink("Portfolio Box", "https://www.portfoliobox.net", "Create your Portfolio.", "resume", ["design", "portfolio"]),
    createLink("MidJourney","https://midjourney.com","Creates stunning and realistic images from text prompts.","design",["image generation", "art"]),
    createLink("Color Hunt","https://colorhunt.co"," Get color inspiration for your design and art projects.","design",["color combinations"]),
    createLink("Clean Up","https://cleanup.pictures","Remove objects from pictures.","design",["image generation", "art"]),
    createLink("MagicSlides", "https://magicslides.app", "AI-powered Slides that creates presentations from text, videos and more", "slides", ["slides"]),
    createLink("Decktopus", "https://www.decktopus.com", " Generate Beautiful Slides In Seconds ", "slides", ["design", "slides"]),
    createLink("Terrific Tools", "https://terrific.tools", "Productivity and automation solutions for developers and businesses", "tools", ["productivity"]),
    createLink("Tiny Wow", "https://tinywow.com", "AI Writing, PDF, Image, and other Online Tools", "tools", ["productivity"]),
    createLink("10015", "https://10015.io", "All Online Tools in One Box", "tools", ["tools"]),
    createLink("SEO Studio", "https://seostudio.tools", "Offers to set of free SEO and expererience more tools", "tools", ["seo","tools"]),
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
