trigger ContactTrigger on Contact (after insert) {
   Id id;
   String cep;
    if(Trigger.isInsert){
        for(Contact c: Trigger.new){
        if(c.MailingPostalCode.length() == 8){
            id = c.Id;
            cep = (String) c.MailingPostalCode;
        }else{
            c.addError('Zip/postal code for correspondence is not in the correct standards.');
        }
     }
  }
    CalloutClass.makeCallout(cep, id);
    
}