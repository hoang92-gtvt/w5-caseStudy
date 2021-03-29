class Quizz{
    constructor (image_str,correct_str,note_array){
        // this.id=_id;
        this.image=image_str;
        this.answer=correct_str;
        this.note=note_array;
        this.number_answer=3;
    }
    onNote(index){
        alert(this.note[index])
    }

}
