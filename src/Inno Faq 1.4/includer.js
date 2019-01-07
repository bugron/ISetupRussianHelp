function includeSyntax(a) 
{
    typeof window.highlightSyntax!="function"&&document.write('<script src="core.js"><\/script>');
    typeof window["setup_" + a] != "function" && document.write('<script src="' + a + '.js"><\/script>')
}