console.log(document);
let ch = document.body.children;
document.body.removeChild(ch[0])

let h1 =  document.createElement("h1");
h1.innerHTML = "Lab12 Assignment";
h1.style.color = "blue";

let hr = document.createElement("HR");
document.body.appendChild(h1);
document.body.appendChild(hr1);

var h2 = document.createElement("h2");
h2.innerHTML = "Task";
h2.style.color = "red";
document.body.appendChild(h2);

var p1 = document.createElement("p");
p1.innerHTML = "In this task you have to reproduce this HTML page as is using" + "<b> only </b>" + "JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(p1);

let text1 = [
    "find elements in the DOM (<b>5 points</b>);",
    "create/add/remove elements (<b>5 points</b>);",
    "change content of the elements (<b>5 points</b>);",
    "change styles of the elements (<b>5 points</b>);",
    "change attributes of the elements (<b>5 points</b>);",
    "change classes of the elements (<b>5 points</b>)."
]
document.body.appendChild(ul1)

let p2 = document.createElement("div");
p2.innerHTML = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this "+ "<a href='https://github.com/yessen/nu_web_programming/tree/main/week12'> link. </a>"
document.body.appendChild(p2);
let hr = document.createElement("hr")
document.body.appendChild(hr);

let h22 = document.createElement("h2")
h22.innerHTML = "Submission"
h22.style.color = "red"

document.body.appendChild(h22)

let p3 = document.createElement("p")
p3.innerHTML = "To submit your work, follow these instructions:"

document.body.appendChild(p3)

text2 = [    "Create a new repository on Github, named <b>lab12</b> (<b>1 point</b>).",
    "Clone this repository to your local machine and work inside it.",
    "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with \"Hello, World!\" message (<b>1 point</b>).",
    "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).",
    "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).",
    "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).",
    "After you finish your work, submit it to the Github (<b>2 points</b>)."]
var ul2 = document.createElement("ul")

createCont(text2, ul2)
document.body.appendChild(ul2)

var hr2 = document.createElement("hr")
document.body.appendChild(hr2)
console.log(document)
