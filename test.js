const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("container");
element.appendChild(para);
para["style"]["color"] = "red";

const header3 = document.createElement("h3");
const headerNode = document.createTextNode("I'm a blue H3");
header3.appendChild(headerNode);

container.appendChild(header3);
header3['style']['color'] = 'blue'
