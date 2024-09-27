import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisible = false

    handleClick(){
        this.isVisible = !this.isVisible
    }
    handleChange(e){
        if(e.target.value === 'hello'){
             this.hello = true
        }else{
             this.hello = false
        }
    }
    

}