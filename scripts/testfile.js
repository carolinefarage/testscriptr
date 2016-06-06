/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"<HTML>\n\n<HEAD>\n\n<TITLE>Your Title Here</TITLE>\n\n</HEAD>\n\n<BODY BGCOLOR=\"FFFFFF\">\n\n<CENTER><IMG SRC=\"clouds.jpg\" ALIGN=\"BOTTOM\"> </CENTER>\n\n<HR>\n\n<a href=\"http://somegreatsite.com\">Link Name</a>\n\nis a link to another nifty site\n\n<H1>This is a Header</H1>\n\n<H2>This is a Medium Header</H2>\n\nSend me mail at <a href=\"mailto:support@yourcompany.com\">\n\nsupport@yourcompany.com</a>.\n\n<P> This is a new paragraph!\n\n<P> <B>This is a new paragraph!</B>\n\n<BR> <B><I>This is a new sentence without a paragraph break, in bold italics.</I></B>\n\n<HR>\n\n</BODY>\n\n</HTML> "},"scriptrdata":[]}}*#*#*/
var content= '<HTML>\n\
\n\
<HEAD>\n\
\n\
<TITLE>Your Title Here</TITLE>\n\
\n\
</HEAD>\n\
\n\
<BODY BGCOLOR=\"FFFFFF\">\n\
\n\
<CENTER><IMG SRC=\"clouds.jpg\" ALIGN=\"BOTTOM\"> </CENTER>\n\
\n\
<HR>\n\
\n\
<a href=\"http://somegreatsite.com\">Link Name</a>\n\
\n\
is a link to another nifty site\n\
\n\
<H1>This is a Header</H1>\n\
\n\
<H2>This is a Medium Header</H2>\n\
\n\
Send me mail at <a href=\"mailto:support@yourcompany.com\">\n\
\n\
support@yourcompany.com</a>.\n\
\n\
<P> This is a new paragraph!\n\
\n\
<P> <B>This is a new paragraph!</B>\n\
\n\
<BR> <B><I>This is a new sentence without a paragraph break, in bold italics.</I></B>\n\
\n\
<HR>\n\
\n\
</BODY>\n\
\n\
</HTML> ';  response.write(content);response.close();			