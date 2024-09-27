import { LightningElement } from "lwc";

export default class QuizApp extends LightningElement {
  selected = {}; //para guardar as respostas
  correctAnswers = 0; //para mostrar o resultado
  visible = false;
  myQuestions = [
    {
      id: 0,
      question: "Qual destes não é um 'template loop'?",
      answers: {
        a: "for:each",
        b: "iterator",
        c: "map loop"
      },
      correctAnswer: "c"
    },
    {
      id: 1,
      question: "Qual destes arquivos é invalido em um componente do LWC?",
      answers: {
        a: ".svg",
        b: ".apex",
        c: ".css"
      },
      correctAnswer: "b"
    },
    {
      id: 2,
      question: "Qual destes não é uma diretriz de modelo?",
      answers: {
        a: "for:each",
        b: "lwc:if",
        c: "@track"
      },
      correctAnswer: "c"
    }
  ];

  get fullScore(){
    return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers? 'slds-text-color_success' : 'slds-text-color_error'}`
  }
  get allNotSelected() {
    return !(Object.keys(this.selected).length === this.myQuestions.length);
  }
 
  changeHandler(e) {
    // console.log("id" , e.target.name)
    // console.log("value", e.target.value)
    const { name, value } = e.target; // == const name = e.target.value.name
    this.selected = { ...this.selected, [name]: value }; //name = id é tipo: 1:'a', o name é o id
    // console.log(Object.keys(this.selected).length);
    // console.log(Object.keys(this.selected).values);
  }
  submitHandler(e) {
    e.preventDefault();
    //this.selected = {1: b};
    let correct = this.myQuestions.filter(
      (item) => this.selected[item.id] === item.correctAnswer
    );
    // console.log("corret", correct.length);
    this.correctAnswers = correct.length;
    // console.log("Aeeeee " + this.correctAnswers);
    this.visible = true;
  }
  resetHandler() {
    this.selected = {};
    this.correctAnswers = 0;
    this.visible = false;
  }
}