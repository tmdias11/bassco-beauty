class Post {
    constructor(){
        
    }
    addPostSlider(postId) {
        let butNext = document.createElement('button');
        let butPrev = document.createElement('button');
        let post = document.createElement('div');
        let container = document.getElementById('galleryContainer');
        let main = document.getElementById('galleryMain');
        let postImage = document.createElement('img');

        container.appendChild(post);
        post.classList = "post" + postId;

        post.style.width = "25%";
        post.style.borderRadius = "25px";
        post.style.backgroundImage = "url(../img/manik" + postId + ".jpg)";
        post.style.backgroundSize = "cover";
        post.style.boxShadow = "0px 0px 40px 10px rgb(192, 192, 192)";
        post.style.transition = "0.3s";
        post.onmouseenter = function () {
            post.style.transform = "scale(1.05)";
            post.style.transition = "transform 0.3s ease";
        };
        post.onmouseleave = function () {
            post.style.transform = "scale(1)";
        };

        butNext.classList.add("sliderButtons");
        butPrev.classList.add("sliderButtons");

        let buttons = document.getElementsByClassName('sliderButtons');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.display = "block";
            buttons[i].style.border = "none";
            buttons[i].style.borderRadius = "100%";
            buttons[i].style.width = "50px";
            buttons[i].style.height = "50px";
            buttons[i].style.fontSize = "22px";
            buttons[i].style.color = "rgb(126,126,126)";
            buttons[i].style.backgroundColor = "rgb(241,241,241)";
            main.appendChild(buttons[i]);

            if (i == 0) {
                buttons[i].innerHTML = "&larr;";
                buttons[i].onclick = function buttonNext() {
                    postId++;
                    post.style.backgroundImage = "url(../img/manik)" + postId + ".jpg";
                }

            }
            else {
                uttons[i].innerHTML = "&rarr;";
                buttons[i].onclick = function buttonPrev() {
                    postId--;
                    post.style.backgroundImage = "url(../img/manik)" + postId + ".jpg";
                }
            }
        }
    }

    showMoreInfo(postId) {
        
    }
}
let post1 = new Post("Анна", "2023-04-05", 2000, "Добрый нюдовый маникюр", 4.9);
console.log(post1);

post1.addPostSlider(2);
let post2 = new Post("Мария", "2024-04-05", 2000, "Нюдовый маникюр", 3.9);
post1.addPostSlider(3);
let post3 = new Post("Злыдня", "2025-04-05", 2000, "Злой нюдовый маникюр", 1.9);
post1.addPostSlider(4);

document.querySelector('.post2').onclick=()=>{
    alert('test')
}

document.querySelector('#next').onclick=()=>{
    document.querySelector('.post2').style.position="relative"
    document.querySelector('.post2').style.left="-50px"
}