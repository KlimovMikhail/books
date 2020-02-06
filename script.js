// // const btnOk = document.querySelector(".success");
// // const btnCancel = document.querySelector(".cancel");

// // console.log("btn", btnOk);
// // console.log("btncancel", btnCancel);

// // // let handler = (event) => {
// // //     btnCancel.removeEventListener("click",)
// // // };

// // let cancelHandler = () => {
// //     console.log("Click on cancel");
// // };

// // let addHendler =  (event) => {
// //     // btnCancel.removeEventListener("click", cancelHandler)
// // };

// // btnOk.addEventListener("click", addHendler);

// // btnCancel.addEventListener("click", cancelHandler);


// // const div = document.createElement("div");

// // div.innerHTML = "<p>Hello</p>" + "<div>" + "<h3>Inner h3</h3>" + "</div>";

// // console.log(div);

// // const h1 = document.querySelector("h1");

// // const newEl = document.createElement("p");
// // newEl.innerHTML = "<b>Replace<b>";

// // h1.parentNode.replaceChild(newEl, h1);

// // newEl.innerHTML = "";

// // newEl.parentNode.removeChild(newEl);

// // const customDiv = document.querySelector(".custom");
// // const cloneDivDeep = customDiv.cloneNode(true);
// // const cloneDiv = customDiv.cloneNode(false);

// // console.log(cloneDivDeep);
// // console.log(cloneDiv);

// // customDiv.innerHTML += "<span>Test</span>";

// // customDiv.innerHTML = "<p>Hello World!</p>" + customDiv.innerHTML;

// // let customP = document.createElement("p");
// // customP.innerHTML = "Test appendChild";
// // customDiv.appendChild(customP);
// // const insertDiv = document.querySelector(".custom div");

// // const customH3 = document.createElement("h3");
// // customH3.innerHTML = "test insertBefore";
// // customDiv.insertBefore(customH3, insertDiv);


// // const anotherP = document.querySelector(".custom p");
// // const text = anotherP.textContent || anotherP.innerText;
// // console.log(text);

// // console.log(customDiv.classList);

// // customDiv.classList.add("test-class");
// // customDiv.classList.remove("js");
// // customDiv.classList.replace("test", "new-class");
// // const isContains = customDiv.classList.contains("new");
// // console.log(customDiv.classList);

// const URL = "http://jsonplaceholder.typicode.com/posts";

// const createMarkup = (data) => {
//     console.log("data", data);
//     const body = document.querySelector("body");

//     const header = document.createElement("header");
//     const text = document.createTextNode("Hello");
//     header.appendChild(text);
//     body.appendChild(header);

//     const main = document.createElement("main");
//     data.forEach((item) => {
//         const div = document.createElement("div");
//         div.innerHTML = `<h2>${item.title}</h2><p>${item.body}</p>`;
//         main.appendChild(div);
//     });
//     body.appendChild(main);
// };



// fetch(URL)
//     .then((response) => response.json())
//     .then((data) => createMarkup(data));
