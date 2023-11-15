
const colortext = document.getElementById("color");
const wrap = document.getElementById("wrap");


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener("change", bgcolor);

function bgcolor() {
    let hash = "#";
    for (let i = 1; i <= 6; i++) {
        hash += hexValue();
    }
    wrap.style.backgroundColor = hash;
    colortext.innerHTML = hash;
    
}

function hexValue() {
    let randomIndex = Math.floor(Math.random() * 16);
    return hex[randomIndex];
}

btn.addEventListener("change", updateSpanContent);

function updateSpanContent() {
    const selectedValue = btn.options[btn.selectedIndex].value;

    if (selectedValue === "HTML") {
        p.innerHTML = "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.";
        img.src = "HTML5_logo_and_wordmark.svg.png";    
        
    } else if (selectedValue === "CSS") {
        p.innerHTML = "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript";
        img.src = "css.png";
    } else if (selectedValue === "JavaScript") {
        p.innerHTML = "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.";
        img.src = "javascript.png"
    } else if (selectedValue === "React") {
        p.innerHTML = "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.";
        img.src = "React.png"
    } else {
        p.innerHTML = "";
    }
}