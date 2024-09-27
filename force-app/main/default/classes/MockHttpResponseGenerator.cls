global class MockHttpResponseGenerator implements HttpCalloutMock {
    global HTTPResponse respond(HTTPRequest request){
        HttpResponse response = new HttpResponse();
        response.setHeader('Content-Type', 'application/json');
        response.setBody('{"cep": "04852-207","logradouro": "Rua René Cassin","bairro": "Jardim Lucélia","regiao": "Sudeste"}');
        response.setStatusCode(200);
        return response;
    }
}