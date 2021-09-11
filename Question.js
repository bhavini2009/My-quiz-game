class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(750, 0);

    this.question.html("Question:- What is Harry Potter's Hogwarts House? " );
    this.question.position(450, 80);
    this.option1.html("1: Gryfinndor " );
    this.option1.position(450, 100);
    this.option2.html("2: hufflepuff" );
    this.option2.position(450, 120);
    this.option3.html("3: Ravenclaw " );
    this.option3.position(450, 140);
    this.option4.html("4: Slytherin" );
    this.option4.position(450, 160);

    this.input1.position(650, 230);
    this.input2.position(450, 230);
    this.button.position(580, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
      this.message.html("Thank You, Your Answer Has Been Submitted");
 this.message.position(350, 350);

  });
}  
}
