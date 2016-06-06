/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 
 //First, we'll require the 'http' library to use later for calling a 3rd party webservice
var http = require("http");

//Let's say your script is expecting an http request parameter called 'myName',
//this is how you can retrieve it
var params = request.parameters

var payload = params.payload


//payload='0100e5021804028f060295070deb'

var i=0;
while(i<payload.length) {

   byte_string = payload.substring(i,i+2);
   byte = parseInt(byte_string,16);


   switch(byte) {
     case 1:

       data_string = payload.substring(i+2,i+6);
       data = parseInt(data_string,16);
       temperature = data / 10;
       i=i+6;
                break;

     case 2:

       data_string = payload.substring(i+2,i+4);
       data = parseInt(data_string,16);
       humidity = data;
       i=i+4;
                break;

     case 4:

       data_string = payload.substring(i+2,i+6);
       data = parseInt(data_string,16);
       light_level = data;
       i=i+6;
                break;

     case 6:

       data_string = payload.substring(i+2,i+6);
       data = parseInt(data_string,16);
       co2_level = data;
       i=i+6;
                break;

     case 7:
       data_string = payload.substring(i+2,i+6);
       data = parseInt(data_string,16);
       battery_level = data/1000;
       i=i+6;
                break;

     default:
       i=i+2;
   }

}



var time = new Date();
var mailBody = "Here is your Atmo Data from <b>"+params.sensor_nam+ "</b> at "+ time + "<br>";
mailBody += "Temperature = " + temperature + " °C <br>" ;
mailBody += "Humidity = " + humidity + " % <br>" ;
mailBody += "CO<sub>2</sub> = " + co2_level + " ppm <br>" ;
mailBody += "Battery Level = " + battery_level + " V <br>" ;

console.log( mailBody);

var emailConfig = {

};

if (temperature > 25 ) {
  sendMail(emailConfig.to, emailConfig.fromName, emailConfig.subject, emailConfig.body);
  sendMail("Michele.Colombi@innowatio.com".to, emailConfig.fromName, emailConfig.subject, emailConfig.body);
  sendMail("Tiziano.Zani@clevergy.it".to, emailConfig.fromName, emailConfig.subject, emailConfig.body);
}
                     
