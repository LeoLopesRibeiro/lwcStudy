import { LightningElement, api, wire } from "lwc";
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
// import FirstName from "@salesforce/schema/Contact.FirstName";
import LastName from "@salesforce/schema/Contact.LastName";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import updateData from '@salesforce/apex/UpdateAddress.updateData' 
export default class UpdateAddress extends LightningElement {
  cep;
  isVisible = false;
  @api recordId;
  data;
  @wire(getRecord, { recordId: "$recordId", fields: [LastName] }) contactRecord;
  get contactName() {
    return getFieldValue(this.contactRecord.data, LastName);
  }
  get visible() {
    return !this.isVisible;
  }

  handleChange(e) {
    this.cep = e.target.value;
    //console.log(e.target.value)
  }
  submitHandler() {
    if (this.cep.length === 8 && this.isVisible === true){
      updateData({data:this.data, contactId: this.recordId});
      window.location.reload();
     
    }
  }
  searchHandler(){
    if (this.cep.length === 8) {
      this.getItems(this.cep);
    }else{
      const evt = new ShowToastEvent({
        title: "Error",
        message: "Zip/postal code for correspondence is not in the correct standards.",
        variant: "warning"
      });
      this.dispatchEvent(evt);
    
    }
  }
 
  async getItems(cep) {
    await fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }).then((data) => {
        console.log(data);
        console.log(data.bairro);
        this.data = data
        
        this.isVisible = true
        this.visible()
      
        
      }).catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
}