// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }

        lastScroll = currentScroll;
    });
}

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .blog-card, .about-content');

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Terminal typing animation
document.addEventListener('DOMContentLoaded', () => {
    const terminalBody = document.getElementById('terminal-body');
    if (!terminalBody) return;

    const authorName = terminalBody.getAttribute('data-author') || 'Developer';

    const commands = [
        { text: 'whoami', output: authorName, delay: 1500 },
        { text: 'show interests', output: 'Theoretical Computer Science\nComplexity Theory\nSystems Programming\nAlgorithm Design', delay: 2000 },
        { text: 'list skills', output: 'Discrete Math  Complexity Theory  Algorithms\nSystems Programming  C/C++  Rust\nPython  Graph Theory  Data Structures', delay: 2000 }
    ];

    let currentCommandIndex = 0;
    let isTyping = false;

    function typeText(element, text, speed = 50, callback) {
        if (isTyping) return;
        isTyping = true;
        let index = 0;
        element.textContent = '';

        const typeInterval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
            } else {
                clearInterval(typeInterval);
                isTyping = false;
                if (callback) callback();
            }
        }, speed);
    }

    function createCommandLine() {
        const line = document.createElement('div');
        line.className = 'terminal-line';

        const prompt = document.createElement('span');
        prompt.className = 'terminal-prompt';
        prompt.textContent = '$';

        const command = document.createElement('span');
        command.className = 'terminal-command';

        const cursor = document.createElement('span');
        cursor.className = 'terminal-cursor';
        cursor.textContent = '█';

        line.appendChild(prompt);
        line.appendChild(command);
        line.appendChild(cursor);

        return { line, command, cursor };
    }

    function createOutputLine() {
        const outputLine = document.createElement('div');
        outputLine.className = 'terminal-output';
        return outputLine;
    }

    function scrollToBottom() {
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function executeNextCommand() {
        if (currentCommandIndex >= commands.length) {
            // Stop looping - show final prompt with cursor
            setTimeout(() => {
                const { line, command: commandElement, cursor } = createCommandLine();
                commandElement.textContent = '';
                terminalBody.appendChild(line);
                scrollToBottom();
            }, 1000);
            return;
        }

        const command = commands[currentCommandIndex];
        const { line, command: commandElement, cursor } = createCommandLine();

        terminalBody.appendChild(line);
        scrollToBottom();

        // Type the command
        typeText(commandElement, command.text, 50, () => {
            // Remove cursor after typing
            cursor.style.display = 'none';

            setTimeout(() => {
                // Create output line and type the output
                const outputLine = createOutputLine();
                terminalBody.appendChild(outputLine);
                scrollToBottom();

                // Type the output character by character
                typeText(outputLine, command.output, 30, () => {
                    currentCommandIndex++;
                    setTimeout(() => {
                        executeNextCommand();
                    }, command.delay);
                });
            }, 500);
        });
    }

    // Start the animation after a short delay
    setTimeout(executeNextCommand, 1000);
});

// Console message
console.log('%c👋 Hello! Thanks for checking out my portfolio!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%cFeel free to explore the code and reach out if you have any questions!', 'color: #6b7280; font-size: 12px;');

