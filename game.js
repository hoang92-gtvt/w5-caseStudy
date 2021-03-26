//thiet lap bộ câu hỏi
let quizz1= new Quizz('img/dudu.png',"đu đủ", ['đủ rồi','Một loaij trái cây']);
let quizz2= new Quizz('img/hama.png',"hà mã", ['Sơn Hà','Một loại động vật']);
let quizz3= new Quizz('2','Thần Tài',['HTML','Tên một vị thần']);
let quizz4= new Quizz('2','Thần Tài',['Tài năng','Tên một vị thần']);
let quizz5= new Quizz('2','Thần Tài',['Tài năng','Tên một vị thần']);
let quizz6= new Quizz('2','Thần Tài',['Tài năng','Tên một vị thần']);
let quizzs=[];
// function creatBocauhoi(){
//
//     for (let i = 0; i <15 ; i++) {
//         quizzs.push("quizz"+i)
//     }
//
// }

// thiết lập câu hỏi dùng trong 1 game;
let game1= new manageQuizz(3);
game1.addQuizz(quizz1);
game1.addQuizz(quizz2);
game1.addQuizz(quizz3);
console.log(game1);
console.log(quizz1)


//giao dien voi DOM
function Display(index){
    document.getElementById('answer').value ='';
    document.getElementById('point').value =game1.point;
    document.getElementById('Note').innerHTML ='';
    let anhthe = document.getElementById('src_image');
    anhthe.setAttribute('src',game1.Quizzs[index].image);
    return index;
}
function getCurrent(){
    return game1.currentOfQuizzs
}
function nextQuiz(){

    if (game1.currentOfQuizzs<game1.limit){
        game1.currentOfQuizzs++;
    }else ('Bạn đã đến câu hỏi cuối')
    Display(game1.currentOfQuizzs);
}
function checkAnswer(answer){
    // alert('vào hàm')
    console.log(answer.toLowerCase()) ;
    if (answer.toLowerCase()===game1.Quizzs[getCurrent()].answer){
        game1.point++;
        nextQuiz();

    }else alert('Đáp án chưa đúng')

}


function startGame(){
    let name=document.getElementById('player');
    do{
        name.value=prompt('Nhập tên người chơi')

    }while(name.value =='')
    Display(0);
}
function onNote(){
    let note=document.getElementById('Note');
    if(note.innerHTML ==''){
        note.innerHTML =game1.Quizzs[getCurrent()].note[0];
    }else note.innerHTML =game1.Quizzs[getCurrent()].note[1]   ;
}

startGame();

