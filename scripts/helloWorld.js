/** Script ACLs do not delete 
 read=caroline 
write=nobody
execute=anonymous 
  **/ 
 // This sample script displays how simple it is to issue an HTTP request using scriptr.io
// Require the "http" module.
var http = require("http");
var name = "World";
// Optionally pass the name as a parameter to the script.
if (request.parameters.name != null)
    name=request.parameters.name;
// Build the request object, note that the "url" property only is mandatory.
var requestObject = {
    "url": "http://scriptr.io/hello",
    "params": {"name": name},
    "method": "POST" // the method is optional, it defaults to GET.
}
// Issue the request.
var response = http.request(requestObject);
// Return the body of the response.
return response.body;			