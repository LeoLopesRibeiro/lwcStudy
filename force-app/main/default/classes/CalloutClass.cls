public class CalloutClass {
   @future(callout=true)
    public static void makeCallout(String cep,Id triggerId){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        String endpoint = 'https://viacep.com.br/ws/' + cep +'/json/';
        request.setEndPoint(endpoint);
		request.setMethod('GET');
		HttpResponse response = http.send(request);
        
        if(response.getStatusCode() == 200){
            Map<String, Object> results = (Map<String, object>)JSON.deserializeUntyped(response.getBody());
            //podemos dizer que cada map acessa um index do JSON da response
             // data = results;
            //data = String.valueOf(results.get('bairro'));
			System.debug(results);     
            Contact cont = new Contact(id=triggerId);
            
           // cont.MailingAddress = String.valueOf(results.get('logradouro'));
            cont.MailingCity = String.valueOf(results.get('localidade'));
            //cont.MailingCountry=  String.valueOf(results.get('localidade'));
            cont.MailingStreet =  String.valueOf(results.get('logradouro'));
            cont.MailingState =  String.valueOf(results.get('estado'));
            System.debug(cont);
            try{
                update cont;
            }catch(DMLException e){
                System.debug(e);
            }
        }
    }
}