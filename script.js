window.onload = function () {
    const bootingOutput = document.getElementById('booting-output');
    const bootingText = `
Booting up...
Initializing system...
Loading kernel...
Mounting root file system...
Starting services...
Logging in...
`;

    let bootIndex = 0;

    // Type out the booting text
    let bootingInterval = setInterval(() => {
        if (bootIndex < bootingText.length) {
            bootingOutput.textContent += bootingText.charAt(bootIndex);
            bootIndex++;
        } else {
            clearInterval(bootingInterval);
            // After booting finishes, hide the overlay and show the desktop
            setTimeout(() => {
                document.getElementById('booting-overlay').style.display = 'none';
                const desktop = document.querySelector('.desktop');
                desktop.classList.add('visible');
            }, 1000);
        }
    }, 30);
};

// Terminal functionality
const terminal = document.getElementById('terminal');
const terminalOutput = document.getElementById('terminal-output');
let typingInterval;

document.getElementById('terminal-icon').addEventListener('click', function () {
    terminal.style.display = 'block';
    terminal.classList.remove('fullscreen');
    setTimeout(() => {
        terminal.classList.add('open'); // Add the open class for animation
    }, 10);
    terminalOutput.textContent = '';
    clearInterval(typingInterval);
    simulateTyping();
});

document.getElementById('close-terminal').addEventListener('click', function () {
    terminal.classList.remove('open');
    setTimeout(() => {
        terminal.style.display = 'none';
    }, 400);
    clearInterval(typingInterval);
    terminalOutput.textContent = '';
});

document.getElementById('minimize-terminal').addEventListener('click', function () {
    terminal.classList.remove('open');
    setTimeout(() => {
        terminal.style.display = 'none';
    }, 400);
});

document.getElementById('fullscreen-terminal').addEventListener('click', function () {
    terminal.classList.toggle('fullscreen');
});

function simulateTyping() {
    const text = `$ Highly motivated and detail-oriented aspiring Penetration Tester 
and Cyber Security Enthusiast targeting a challenging position 
in Red teaming or Ethical Hacking.

$ Possess a strong working knowledge of industry tools and 
techniques, with a commitment to continuous learning and 
staying current with evolving cyber threats. 

$ Enthusiastic about collaborating with cross-functional 
teams to contribute to an organization’s overall security 
posture.\n\n`;
    let index = 0;

    typingInterval = setInterval(() => {
        if (index < text.length) {
            terminalOutput.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 21);
}

// Date and time functionality
function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();

    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const date = now.toLocaleDateString(undefined, options);
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    dateTimeElement.textContent = `${date} | ${time}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();

// Certifications functionality
const certificationsWindow = document.getElementById('certifications-window');
document.getElementById('folder-icon').addEventListener('click', function () {
    certificationsWindow.style.display = 'block';
    setTimeout(() => {
        certificationsWindow.classList.add('open'); // Add the open class for animation
    }, 10);
});

document.getElementById('close-certifications').addEventListener('click', function () {
    certificationsWindow.classList.remove('open'); // Remove open class for closing animation
    setTimeout(() => {
        certificationsWindow.style.display = 'none';
    }, 400);
});

// Projects functionality
const projectsWindow = document.getElementById('projects-window');
document.getElementById('projects-icon').addEventListener('click', function () {
    projectsWindow.style.display = 'block';
    setTimeout(() => {
        projectsWindow.classList.add('open'); // Add the open class for animation
    }, 10);
});

document.getElementById('close-projects').addEventListener('click', function () {
    projectsWindow.classList.remove('open'); // Remove open class for closing animation
    setTimeout(() => {
        projectsWindow.style.display = 'none';
    }, 400);
});
// Open all links in new tabs
document.querySelectorAll('.icons a').forEach(link => link.setAttribute('target', '_blank'));
document.querySelectorAll('.certifications-content a').forEach(link => link.setAttribute('target', '_blank'));
document.querySelectorAll('.projects-content a').forEach(link => link.setAttribute('target', '_blank'));

