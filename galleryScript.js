let postArray = [];
let smallPostArray = [];

class Post {
    constructor(masterName, tag = "div", imgId, style = {}, description = "", type = "") {
        this.masterName = masterName;
        this.tag = tag;
        this.imgId = imgId;
        this.description = description;
        this.type = type;

        let defaultStyle = {
            padding: "20px",
            margin: "10px",
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
            boxShadow: "0 0 30px 5px rgba(0, 0, 0, 0.15)",
            color: "#333",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "200px",
            width: "27%",
            border: "7px solid white",
            borderBottom: "40px solid white",
            transition: "0.25s",
            height: "470px",
            cursor: "pointer"
        };

        this.style = {};
        for (let key in defaultStyle) {
            this.style[key] = defaultStyle[key];
        }
        for (let key in style) {
            this.style[key] = style[key];
        }

        if (this.imgId) {
            this.style.backgroundImage = `url('../img/galleryImages/image${this.imgId}.jpg')`;
        }

        this.element = document.createElement(this.tag);
        this.element.innerHTML = `<div></div>`;

        for (let key in this.style) {
            this.element.style[key] = this.style[key];
        }

        postArray.push(this);
    }
}

class SmallPost extends Post {
    constructor(masterName, tag = "div", imgId, style = {}, description = "", type = "") {
        super(masterName, tag, imgId, style, description, type);
        this.element.style.width = "100%";
        this.element.style.height = "100%";
        smallPostArray.push(this);
    }

    static sortPosts(criteria) {
        let sorted = [];

        for (let i = 0; i < smallPostArray.length; i++) {
            sorted.push(smallPostArray[i]);
        }

        if (criteria === "master") {
            sorted.sort((a, b) => a.masterName.localeCompare(b.masterName));
        } else if (criteria === "type") {
            sorted.sort((a, b) => a.type.localeCompare(b.type));
        }

        const container = document.getElementById("galleryMainContainer");
        container.innerHTML = "";

        for (let i = 0; i < sorted.length; i++) {
            container.appendChild(sorted[i].element);
            sorted[i].element.onclick = () => openModal(i + postArray.length);
        }

        allImages = [];
        for (let i = 0; i < postArray.length; i++) {
            allImages.push(postArray[i]);
        }
        for (let i = 0; i < sorted.length; i++) {
            allImages.push(sorted[i]);
        }
    }
}

let currentIndex = 0;
let modal = document.getElementById("modalSlider");
let modalImg = document.getElementById("modalImage");
let modalCaption = document.getElementById("modalCaption");
let close = document.querySelector(".close");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

function openModal(index) {
    currentIndex = index;
    let currentPost = allImages[index];
    modal.style.display = "flex";
    modalImg.src = `../img/galleryImages/image${currentPost.imgId}.jpg`;
    modalCaption.textContent = currentPost.description || "";
}

function closeModal() {
    modal.style.display = "none";
}

function showNext() {
    currentIndex = (currentIndex + 1) % allImages.length;
    openModal(currentIndex);
}

function showPrev() {
    currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    openModal(currentIndex);
}

close.addEventListener("click", closeModal);
next.addEventListener("click", showNext);
prev.addEventListener("click", showPrev);

modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.style.display === "flex") {
        closeModal();
    }
});

new Post("Анна", "div", 23, {}, "Маникюр с цветочным дизайном", "Ламинирование");
new Post("Елена", "div", 10, {}, "Классический френч", "Маникюр");
new Post("Мария", "div", 13, {}, "Летний яркий маникюр", "Прическа");

new SmallPost("Ирина", "div", 4, {}, "Акцент на минимализме", "Маникюр");
new SmallPost("Светлана", "div", 5, {}, "Яркие акценты", "Маникюр");
new SmallPost("Михаил", "div", 1, {}, "Ламинирование ресниц и ламинирование бровей", "Ламинирование");
new SmallPost("Ольга", "div", 18, {}, "Элегантный стиль", "Прическа");
new SmallPost("Юлия", "div", 15, {}, "Классическая укладка для вечернего выхода", "Прическа");
new SmallPost("Дарья", "div", 12, {}, "Высокий хвост с выпрямленными волосами", "Прическа");
new SmallPost("Ольга", "div", 2, {}, "Элегантный стиль", "Маникюр");
new SmallPost("Михаил", "div", 22, {}, "Ламинирование ресниц", "Ламинирование");
new SmallPost("Алексей", "div", 16, {}, "Классическая мужская стрижка с боковым пробором", "Прическа");
new SmallPost("Наталья", "div", 3, {}, "Романтическая прическа с косой", "Прическа");
new SmallPost("Светлана", "div", 6, {}, "Яркие акценты", "Маникюр");
new SmallPost("Ольга", "div", 21, {}, "Ламинирование ресниц", "Маникюр");
new SmallPost("Оксана", "div", 14, {}, "Современное каре с объёмом", "Прическа");
new SmallPost("Игорь", "div", 17, {}, "Фейд с текстурированной верхушкой", "Прическа");
new SmallPost("Ольга", "div", 9, {}, "Элегантный стиль", "Маникюр");
new SmallPost("Ирина", "div", 7, {}, "Акцент на минимализме", "Маникюр");
new SmallPost("Виктория", "div", 11, {}, "Элегантная укладка с локонами", "Маникюр");
new SmallPost("Владимир", "div", 19, {}, "Короткая спортивная стрижка", "Прическа");
new SmallPost("Денис", "div", 8, {}, "Мужской андеркат с чёлкой", "Маникюр");
new SmallPost("Михаил", "div", 20, {}, "Модная стрижка с выбритым узором", "Прическа");
new SmallPost("Анна", "div", 23, {}, "Маникюр с цветочным дизайном", "Ламинирование");
new SmallPost("Елена", "div", 10, {}, "Классический френч", "Маникюр");
new SmallPost("Мария", "div", 13, {}, "Летний яркий маникюр", "Прическа");
new SmallPost("Михаил", "div", 24, {}, "Ламинирование бровей", "Ламинирование");

let container = document.getElementById("galleryContainer");
postArray.forEach(post => {
    container.appendChild(post.element);
});

let smallContainer = document.getElementById("galleryMainContainer");
smallPostArray.forEach(smallPost => {
    smallContainer.appendChild(smallPost.element);
});

let allImages = [];
for (let i = 0; i < postArray.length; i++) {
    allImages.push(postArray[i]);
}
for (let i = 0; i < smallPostArray.length; i++) {
    allImages.push(smallPostArray[i]);
}

for (let i = 0; i < allImages.length; i++) {
    allImages[i].element.addEventListener("click", function () {
        openModal(i);
    });
}

document.getElementById("sortSelect").addEventListener("change", function () {
    const value = this.value;
    if (value) {
        SmallPost.sortPosts(value);
    }
});