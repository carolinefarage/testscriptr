/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"return \"hello\";"},"scriptrdata":[]}}*#*#*/
var content= 'return \"hello\";';  response.write(content);response.close();			