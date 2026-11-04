:root { /*colors*/
    --white: #ffffff;
    --black: #000000;
    --light-gray: #f5f5f5;
    --dark-purple: #2d1b3d;
    --soft-purple: #6b4f7c;
    --red-accent: #c0392b;
    --yellow-light: #f9e79f;
    --blue-dark: #1a3c4a;
    --bg: #faf8f3;
    --paper: #ffffff;
    --ink: #1c1c1c;
    --ink-soft: #4a4a46;
    --red: #b7282d;
    --teal: #3e7c82;
    --yellow: #e3b23c;
    --line: #1c1c1c;
    --font-display: 'Permanent Marker', cursive;
    --font-body: 'Work Sans', sans-serif;
    --handwritten: 'Segoe Script';
    /**/
    --headspace-lime: #93f0e4;
    --headspace-blue: #101dc6;
    --headspace-pink: #fec2fc;
    --headspace-green: #20fcef;
    --headspace-shadow: #101dc6;
    --headspace-purple: #6c0fff;
}
/*General*/
*, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.geralHeader {
    display: flex;
    flex-direction: column;
    background-image: url(/headspaceBG.jpg);
}
.geralHeader a{line-height: 0;}
.geralNav {
    display: flex;
    justify-content: center;
    font-size: 0.95rem;
    gap: 0.95rem;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0.8rem 1.25rem;
    background-color: rgba(0, 0, 0, 0.75); 
    backdrop-filter: blur(2px); 
    margin-top: -30px;
}
.geralNav a {
    text-decoration: none;
    font-weight: bold;
    color: var(--white);
}
.geralNav a:hover { color: var(--headspace-purple); }
body {
    background: var(--bg);
}
.btnContainer::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -4rem;
    transform: translateY(-50%);
    width: 5rem;
    height: 5rem;
    background-image: url(/Images/hoverHand.gif);
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 0.15s cubic-bezier(0.25, 1, 0.5, 1), transform 0.15s cubic-bezier(0.25, 1, 0.5, 1);
}
.btnContainer:hover::before {
    opacity: 1;
    transform: translateY(-10%) translateX(-4px);
}
.btn {
    background-color: var(--ink);
    color: var(--white);
    border: none;
    padding: 0.4rem 0.8rem;
    font-size: 1.05rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}
/*General*/
