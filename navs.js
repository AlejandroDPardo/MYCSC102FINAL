window.onload = function() {
    alert("Hey There!");

    // Define the navigation links and corresponding page names
    const navLinks = [
        { href: './home.html', text: 'Home' },
        { href: './boards.html', text: 'Boards' },
        { href: './game.html', text: 'Game' },
        { href: './palindrome.html', text: 'Palindrome' },
        { href: './user_input.html', text: 'User Input' },
        { href: './table.html', text: 'Table' }
    ];

    // Get the <nav> element where the links will be added
    const nav = document.querySelector('nav');

    // Clear any existing links inside the nav (optional)
    nav.innerHTML = '<h2>Navigation</h2>';

    // Loop through each link and add it to the navigation
    navLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.textContent = link.text;
        nav.appendChild(anchor);
        nav.appendChild(document.createElement('br')); // Add line break after each link
    });
};
