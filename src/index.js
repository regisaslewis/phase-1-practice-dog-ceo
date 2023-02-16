console.log('%c HI', 'color: firebrick')



document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then((response) => response.json())
        .then((object) => {
            object.message.forEach((e) => {
                let img = document.createElement("img");
                img.src = e;
                document.getElementById("dog-image-container").appendChild(img);
            });
        })
    fillList();
})

function fillList() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((liObj) => {
        for (let ele in liObj.message) {
            let li = document.createElement("li");
            li.textContent = ele;
            document.getElementById("dog-breeds").appendChild(li);
            let list = document.querySelectorAll("li");
            let arr = Array.from(list);
            arr.forEach((e) => [
                e.addEventListener("click", () => e.style.color = "salmon")
            ])
        }
    })
    document.getElementById("breed-dropdown").addEventListener("change", chooseInitial);
}


function chooseInitial() {
    let dropdown = document.getElementById("breed-dropdown");
    let list = document.querySelectorAll("li");
    let arr = Array.from(list);
    arr.forEach((e) => {
        if (e.textContent[0] === dropdown.value) {
            e.style.display = "block";
        } else if (e.textContent[0] !== dropdown.value) {
            e.style.display = "none";
        }
    })
}