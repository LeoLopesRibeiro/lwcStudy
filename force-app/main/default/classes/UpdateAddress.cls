public with sharing class UpdateAddress {
    @AuraEnabled
    public static void updateData(Map<String, Object> data, Id contactId){
        System.debug(data);
        String bairro = (String) data.get('bairro');
        System.debug(bairro);
        if(Schema.sObjectType.Contact.fields.MailingStreet.isUpdateable()){
            Contact contactToUpdate = [SELECT MailingCity, MailingStreet, MailingState FROM Contact WHERE Id=:contactId LIMIT 1];
             contactToUpdate.MailingStreet = (String) data.get('logradouro');
             contactToUpdate.MailingCity = (String) data.get('localidade');
             contactToUpdate.MailingState = (String) data.get('estado');
             update contactToUpdate;
        }
    }
}