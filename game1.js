//thiet lap bộ câu hỏi
let quizz1= new Quizz('img/dudu.png',"đu đủ", ['đầy đủ','Một loaij trái cây']);
let quizz2= new Quizz('img/hama.png',"hà mã", ['Sơn Hà','Một loại động vật']);
let quizz3= new Quizz('img/changio.png','chân giò',['con lợn','Tên một loại thịt']);
let quizz4= new Quizz('img/baoke.png','bảo kê',['Một hành động','Hành động trái pháp luật']);
let quizz5= new Quizz('img/cuabien.png','cửa biển',['Nút giao của dòng chảy','Nơi sông đổ ra biển']);
let quizz6= new Quizz('img/cuathientradia.png','của thiên trả địa',['Thành ngữ việt nam','Chỉ những sư việc không phải của mình']);
let quizz7= new Quizz('img/dungbong.png','đứng bóng',['là một tính từ','sự phản chiếu của vật thể dưới ánh nắng']);
let quizz8= new Quizz('img/gahoamo.png','gà hoa mơ',['Một loại gà','Chỉ các con gà mái có màu hoa']);
let quizz9= new Quizz('img/ghenty.png','ghen tỵ',['Hành vi của con người','Đồng nghĩa với từ đố kỵ']);
let quizz10= new Quizz('img/giacmac.png','giác mạc',['Bộ phẩn cơ thể người','Nằm ở vị trí mắt']);
let quizz11= new Quizz('img/giayquytim.png','giấy quỳ tím',['là vật thử trong hóa học','chuyển sang màu đỏ khi tiếp xúc vs axit']);
let quizz12= new Quizz('img/haoquang.png','hào quang',['Điều khiến người nhạc nhiên','Cảm nhận bằng thị giác']);
let quizz13= new Quizz('img/khongquan.png','không quân',['Một loại binh chủng trong quân đội','Chiến đấu trên vùng trời']);
let quizz14= new Quizz('img/khucmac.png','khúc mắc',['Suy nghĩ của con người về một sự việc','Đi kèm với lo lắng, chưa thể giải đáp']);
let quizz15= new Quizz('img/lubu.png',"lu bu", ['Trạng thái của con người','Thể hiện sự rối rắm, không được nhanh nhẹn']);
let quizz16= new Quizz('img/notruoison.png',"nốt ruồi son", ['Một dấu hiệu trên cơ thể người','mang ý nghĩa may mắn, tài lộc']);
let quizz17= new Quizz('img/phaodai.png',"pháo đài", ['tòa thành thời trung cổ','Chống quân giặc tấn công']);
let quizz18= new Quizz('img/taynao.png',"tẩy não", ['hành vi liên quan tới não bộ ','xóa đi ký ức']);
let quizz19= new Quizz('img/thieunhi.png',"thiếu nhi", ['Độ tuổi của người','ngày quốc tế 1/6']);
let quizz20= new Quizz('img/thuoctrusau.png',"thuốc trừ sâu", ['thuốc bảo vệ thực vật','tiêu diệt côn trùng']);
let quizz21= new Quizz('img/tienloi.png',"tiền lời", ['phần thưởng của hoạt động kinh doanh','Được tính ra từ khoản thu và mức chi tiêu']);
let quizz22= new Quizz('img/tucach.png',"tư cách", ['yếu tố đánh giá con người','Thể hiện nhân phẩm']);
let quizz23= new Quizz('img/xuathanh.png',"xuất hành", ['Hành vi ra khỏi nhà','Từ ngữ hán việt']);
let quizzs=[];
// function creatBocauhoi(){
//
//     for (let i = 1; i <=5 ; i++) {
//         eval('quizz'+i);
//         quizzs.push(eval);
//     }
//
// }
// console.log(quizzs);
// thiết lập câu hỏi dùng trong 1 game;

let game1= new manageQuizz(10);
game1.addQuizzss(quizz1);
game1.addQuizzss(quizz2);
game1.addQuizzss(quizz3);
game1.addQuizzss(quizz4);
game1.addQuizzss(quizz5);
game1.addQuizzss(quizz6);
game1.addQuizzss(quizz7);
game1.addQuizzss(quizz8);
game1.addQuizzss(quizz9);
game1.addQuizzss(quizz10);
game1.addQuizzss(quizz11);
game1.addQuizzss(quizz12);
game1.addQuizzss(quizz13);
game1.addQuizzss(quizz14);
game1.addQuizzss(quizz15);
game1.addQuizzss(quizz16);
game1.addQuizzss(quizz17);
game1.addQuizzss(quizz18);
game1.addQuizzss(quizz19);
game1.addQuizzss(quizz20);
game1.addQuizzss(quizz21);
game1.addQuizzss(quizz22);
game1.addQuizzss(quizz23);
console.log(game1.Quizzss);
game1.getQuizzs();
console.log(game1.Quizzs);

//giao dien voi DOM
function Display(index){
    document.getElementById('answer').value ='';
    document.getElementById('point').value =game1.point;
    document.getElementById('Note').innerHTML ='';
    document.getElementById('newgame').innerHTML ='Chơi Lại';

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
    }else alert ('Bạn đã đến câu hỏi cuối')
    Display(game1.currentOfQuizzs);
}
function checkAnswer(answer){
    // alert('vào hàm')
    console.log(answer.toLowerCase()) ;
    console.log(game1.currentOfQuizzs );
    if (answer.toLowerCase()===game1.Quizzs[getCurrent()].answer){
        game1.point+=10;
        if(game1.currentOfQuizzs < game1.limit-1){
            nextQuiz();
        }else {
            Display(game1.currentOfQuizzs);
            alert('Bạn đã chiến thắng');
            endGame();
        }

    }
    else {
        game1.Quizzs[getCurrent()].number_answer--;
        game1.point-=2;
        alert('Đáp án chưa đúng'+ ' Bạn còn '+ game1.Quizzs[getCurrent()].number_answer+ 'lần trả lời');
        document.getElementById('answer').value =''
        if(game1.Quizzs[getCurrent()].number_answer==0){
            endGame();
        }
    }


}

function startGame(){
    let name=document.getElementById('player');
    do{
        name.value=prompt('Nhập tên người chơi')

    }while(name.value =='')

    game1.playerName=name.value;
    Display(0);
}
function onNote(){
    let note=document.getElementById('Note');
    if(note.innerHTML ==''){
        note.innerHTML =game1.Quizzs[getCurrent()].note[0];
    }else note.innerHTML =game1.Quizzs[getCurrent()].note[1]   ;
}

function endGame(){
    document.getElementById('show').innerHTML=
        "<div style='background-color: white'>" +
            "<img src='img/anhnen.png'/> " +
            "<h2 style='position: relative ; top: -220px; left: 200px '>Người chơi : " + document.getElementById('player').value + "</h2>"+
            "<h2 style='position: relative ; top: -220px; left: 200px '>Số Điểm: "+ document.getElementById('point').value + "</h2>" +
            "<button onclick='location.reload();' " +
                "style='position: relative ; top: -220px; left: 200px '" +
                " >Chơi lại" +
            "</button>" +

            " <a href='start.html'>" +
                "<button style='position: relative ; top: -220px; left: 200px '>" +
                "Quay trở lại trang chính" +
                "</button>" +
            "</a> "+
        "</div>"

    setLocalStorage();
}
function setLocalStorage(){

    let name_player= localStorage.getItem('name');
    let point_player= localStorage.getItem('point');
    let arrName = name_player.split(',');
    let arrPoint = point_player.split(',');
    arrName.push(game1.playerName);
    arrPoint.push( game1.point);
    localStorage.setItem('name',arrName);
    localStorage.setItem('point',arrPoint);
}
function getLocalStorage(){
    let arrName=(localStorage.getItem('name')).split(',');
    let arrPoint=(localStorage.getItem('point')).split(',');
    let rankTable="<table border='1px'> <tr><th>Tên người chơi</th><th>Điểm số</th> </tr>";
    for (let i = 0; i <arrName.length ; i++) {
        rankTable += "<tr><td>"+arrName[i]+"</td><td>"+arrPoint[i]+"</td> </tr>"
    }
    rankTable +="</table>"
    return rankTable;
}

