class manageQuizz{
    constructor(_number) {
       // this.playerName =playerName_str
       this.Quizzs=[];//bộ câu hỏi

       this.limit=_number;
       this.currentOfQuizzs = 0;

       this.time =15;
       this.point=0;
    }
    addQuizz(quiz_obj){
        this.Quizzs.push(quiz_obj);
    }
    deleQuizz(index){
        this.Quizzs.splice(index,1)
    }

    // getQuizzs(){
    //
    //     let array=[];
    //     for (let i = 0; i <this.limit ; i++) {
    //         let pick= Math.floor(Math.random() * this.Quizzs.length)+1;
    //         array[i]= this.Quizzs[pick];
    //     }
    //     return array;
    // }

}
