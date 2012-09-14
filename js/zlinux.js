function load_syntaxhighlighter () {
    SyntaxHighlighter.autoloader(
        'cpp  /jackzzh/js/alexgorbatchev/scripts/shBrushCpp.js',
        'python  /jackzzh/js/alexgorbatchev/scripts/shBrushPython.js',
        'applescript            /jackzzh//js/alexgorbatchev/shBrushAppleScript.js'
    );

    SyntaxHighlighter.config.tagName = 'code';
    SyntaxHighlighter.defaults['toolbar'] = false;

    function path()
    {
        var args = arguments,
        result = []
        ;

        for(var i = 0; i < args.length; i++)
            result.push(args[i].replace('@', '/jackzzh/js/alexgorbatchev/'));

        return result
    };

    SyntaxHighlighter.autoloader.apply(null, path(
        'applescript            @shBrushAppleScript.js',
        'actionscript3 as3      @shBrushAS3.js',
        'bash shell             @shBrushBash.js',
        'coldfusion cf          @shBrushColdFusion.js',
        'cpp c                  @shBrushCpp.js',
        'c# c-sharp csharp      @shBrushCSharp.js',
        'css                    @shBrushCss.js',
        'delphi pascal          @shBrushDelphi.js',
        'diff patch pas         @shBrushDiff.js',
        'erl erlang             @shBrushErlang.js',
        'groovy                 @shBrushGroovy.js',
        'java                   @shBrushJava.js',
        'jfx javafx             @shBrushJavaFX.js',
        'js jscript javascript  @shBrushJScript.js',
        'perl pl                @shBrushPerl.js',
        'php                    @shBrushPhp.js',
        'text plain             @shBrushPlain.js',
        'py python              @shBrushPython.js',
        'ruby rails ror rb      @shBrushRuby.js',
        'sass scss              @shBrushSass.js',
        'scala                  @shBrushScala.js',
        'sql                    @shBrushSql.js',
        'vb vbnet               @shBrushVb.js',
        'xml xhtml xslt html    @shBrushXml.js'
    ));

    SyntaxHighlighter.all();

}
