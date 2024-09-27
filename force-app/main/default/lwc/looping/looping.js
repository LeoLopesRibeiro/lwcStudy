import { LightningElement } from "lwc";

export default class Looping extends LightningElement {
  carList = [
    "Sedan",
    "Celta",
    "Clio",
    "Range Rover",
    "Ferrari",
    "Gol",
    "Punto"
  ];

  ceoList = [
    {
      id: 1,
      company: "Google",
      name: "John",
      age: "30"
    },
    {
      id: 2,
      company: "Facebook",
      name: "Jane",
      age: "25"
    },
    {
      id: 3,
      company: "Apple",
      name: "Jack",
      age: "35"
    },
    {
      id: 4,
      company: "Microsoft",
      name: "Jill",
      age: "28"
    }
  ];
}