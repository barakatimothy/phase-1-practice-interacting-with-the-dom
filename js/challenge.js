document.addEventListener('DOMContentLoaded',(e) => {
 counter.addEventListener('submit', () => {
    newComment(e,comment)
 })
});
let counter = document.getElementById('counter');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart')
let pause = document.getElementById('pause')
let likes = document.getElementsByClassName('likes')
let list = document.getElementById('list')
let comment = document.getElementById('comment-input')
let submit = document.getElementById('submit')

let newComment = (e,comment) => {
    e.preventDefault();
    comment = document.createElement('li');
    comment.innerText = comment.value;
    addComment(comment);
}

let addComment = (comment)  => {
    document.getElementById('comment-input').appendChild(comment);
}

function counter (){
    counter = 0;
    alert(`count ${counter}`);
    counter.innerText(localStorage.setItem(counter++));    
}