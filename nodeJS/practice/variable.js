function addContact(name, mobile, home="없음") {
    console.log(name + " " + mobile + " " + home);
}

addContact("홍길동", "010");
addContact("이길동", "011", "삼성동");

function food(name, mobile, ...foods) {
    console.log(name + " " + mobile + " " + foods);
    console.log(typeof foods);
}

food("홍길동", "011", "짜장면", "냉면", "불고기");
food("홍길동", "011", "초밥");