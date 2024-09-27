@isTest
public class CalloutClassTest {
    @isTest
    public static void TestClass(){
        Contact cont = new Contact();
        cont.LastName='Leozin';
        cont.MailingPostalCode = '04852207';
        insert cont;
 
        Test.setMock(HttpCalloutMock.class, new MockHttpResponseGenerator());
        
        //calloutClass.makeCallout('04852207', cont.Id);
    }
}