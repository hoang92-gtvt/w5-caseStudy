class manageQuizz{
    constructor(_number) {
       this.playerName ="" ;
       this.Quizzss=[];//bộ câu hỏi

       this.Quizzs=[]; //cau hoi lua chon
       this.limit=_number;
       this.currentOfQuizzs = 0;
       this.point=0;
    }
    addQuizzss(quiz_obj){
        this.Quizzss.push(quiz_obj);
    }
    deleQuizzss(index){
        this.Quizzss.splice(index,1)
    }

    getQuizzs(){

        let arrayIndex=[];
        arrayIndex[0]=Math.floor(Math.random() * this.Quizzss.length);
        for (let i = 1; i<this.limit ;i++ ) {
            let k=Math.floor(Math.random() * this.Quizzss.length)
            let check=true
            for (const indexElement of arrayIndex) {
                if(k==indexElement){
                    check=false;
                    break;
                }
            }
            if (check){
                arrayIndex.push(k);
            }else i--;
        }
        console.log(arrayIndex);
        for (let i = 0; i <this.limit ; i++) {

            this.Quizzs[i] = this.Quizzss[arrayIndex[i]];

        }
        return this.Quizzs;
    }
    endGame(){

    }

}
