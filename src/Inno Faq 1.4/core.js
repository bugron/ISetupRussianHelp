var m_false = false, m_true = true, html_format = false;

function highlightSyntax(a, b) 
{
    if (!(window.opera && navigator.userAgent.substr(navigator.userAgent.toLowerCase().indexOf("opera") + 6, 5) < "7.10")) 
    {
        if (b.indexOf("test") == 0) 
        {
            b = b.substring(4);
            document.getElementById(a).innerHTML = getkeyWordsOf(b)
        } 
        setup_highlighter = window["setup_" + b];
        if (typeof setup_highlighter != "function") 
            setup_highlighter = "setup_nocolor";
        if (typeof document.getElementById != "undefined") 
        {
            var d = document.getElementById(a);
            HighlightObj = setup_highlighter();
            txt = d.innerHTML.replace(RegExp("^(<!--ec1--\>|([s\t\u00a0]|&nbsp;)*<br(/)?>)+", "i"), "").replace(/(<!--c2--\>|<br(\/)?>)+$/i, "");
            txt = mainProcedure(txt, HighlightObj);
            if (typeof makeFrame == "function" && !(window.opera && navigator.userAgent.substr(navigator.userAgent.toLowerCase().indexOf("opera") + 6, 5) < "7.25")) makeFrame(HighlightObj.Title, d, txt.toLowerCase().split("<br").length, a, txt);
            else
                d.innerHTML = txt
        }
    }
}

function getNumberEnd(a, b, d) 
{
    input_length = a.length;
    if (isDigit(a.charAt(b))) 
    {
        for (j = b + 1; j < input_length && (isDigit(ch = a.charAt(j)) || !d && isNumberNext(ch)); ++j);
        return j
    }
    return m_false
}

function getWordEnd(a, b, d) 
{
    if (isIdFirst(a.charAt(b))) 
    {
        input_length = a.length;
        for (j = b + 1; j < input_length && (isIdFirst(ch = a.charAt(j)) || ch >= "0" && ch <= "9" || d && ch == "-"); ++j);
        return j
    }
    return m_false
}

function createArray() 
{
    var a = [];
    a.addElementToArray = typeof a.push == "undefined" ? ar_push : a.push;
    return a
}

function isIdFirst(a) 
{
    return a >= "A" && a <= "Z" || a >= "a" && a <= "z" || a == "_" || a >= "\u0410" && a <= "\u042f" || a >= "\u0430" && a <= "\u044f"
}
function isDigit(a) 
{
    if (a >= "0" && a <= "9") return m_true; 
    return m_false
}
function isNumberNext(a) 
{
    return a == "x" || a == "h" || a == "L" || a >= "a" && a <= "f" || a >= "A" && a <= "F" || a == "H" || a == "O" || a == "o" || a == "p"
}

var mnems = [];
mnems["&#40;"] = "(";
mnems["&#41;"] = ")";
mnems["&#60;"] = "<";
mnems["&#62;"] = ">";
mnems["&#33;"] = "!";
mnems["&lt;"] = "<";
mnems["&gt;"] = ">";
mnems["&34;"] = '"';
mnems["&quot;"] = '"';
mnems["&92;"] = "'";
mnems["&amp;"] = "&";
mnems["&nbsp;"] = " ";

function classSyn() 
{
    this.PreprocessorChar = this.KeySigns = this.KeyWords = m_false;
    this.PreprocessorNumber = createArray();
    this.StringQuote = m_false; 
    this.EscapeSign = "\\";
    this.ignoreCase = m_false; 
    this.emptyArray = createArray();
    this.undefinedElement = this.emptyArray["nonsensHJKU#GFSF)(*"];
    this.FunctionBeginn = m_false; 
	this.TabWidth = 4;
    this.PreSigns = this.DelphiPreprocessorStyle = this.DelphiPreprocessorChar = this.changeLangAn = m_false;
    this.end = false;
    this.attrColor = this.tagColor = this.inXML = m_false;
    this.Title = false;
    this.XML = m_false;
    this.Comments = [];
    this.prepsignnumber = m_false;
    this.colorize = syn_colorize;
    this.insertLang = syn_insertLang;
    this.setTitle = syn_setTitle;
    this.addKeywords = syn_addKeywords;
    this.addKeySigns = syn_addKeySigns;
    this.setPreprocessorChar = syn_setPreprocessorChar;
    this.setPreprocessorNumber = syn_setPreprocessorNumber;
    this.addString = syn_addString;
    this.setEscapeSign = syn_setEscapeSign;
    this.setTabWidth = syn_setTabWidth;
    this.setNumber = syn_setNumber;
    this.setIgnoreCase = syn_setIgnoreCase;
    this.highlightFunctionNames = syn_highlightFunctionNames;
    this.setDelphiPreprocessor = syn_setDelphiPreprocessor;
    this.addPreSigns = syn_addPreSigns;
    this.setXMLStructure = syn_setXMLStructure;
    this.addSimpleEOLComment = syn_addSimpleEOLComment;
    this.addFoxProEOLComment = syn_addFoxProEOLComment;
    this.addBrockenEOLComment = syn_addBrockenEOLComment;
    this.addSimpleOpencloseComment = syn_addSimpleOpencloseComment;
    this.addFoxProEOLSignComment = syn_addFoxProEOLSignComment;
    this.setXMLAdds = syn_setXMLAdds
}

function syn_setXMLAdds() 
{
    this.end = this.inXML = true
}

function syn_setTitle(a) 
{
    this.Title = a
}

function getComment(a, b, d, c) 
{
    arr = a.Comments[b];
    if (!arr)
        return false;
    for (a = 0; a < arr.length; a++)
        if (arr[a].begin == c.substr(d, arr[a].begin.length))
            return arr[a];
    return false
}

function syn_addKeywords(a, b) 
{
    with (this) 
    {
        KeyWords || (KeyWords = createArray());
        this.colorize(KeyWords, a, b)
    }
}

function syn_setXMLStructure(a, b) 
{
    this.XML = m_true;
    this.tagColor = a;
    this.attrColor = b
}

function getFirstChar(a) 
{
    return syn_zeichen(a, 0)
}

function syn_addPreSigns(a, b) 
{
    if (!this.PreSigns)
        this.PreSigns = createArray();
    this.colorize(this.PreSigns, a, b)
}

function syn_addSimpleOpencloseComment(a, b, d) 
{
    var c = [];
    c.begin = a;
    c.end = b;
    c.style = d;
    c.func = syn_findOpenCloseCommentEnd;
    arr = this.Comments[getFirstChar(a)];
    if (typeof arr == "undefined")
        arr = createArray();
    arr.push(c);
    this.Comments[getFirstChar(a)] = arr
}

function syn_findOpenCloseCommentEnd(a, b, d, c) 
{
    var f = c.end; 
    close_comment1_length = f.length;
	while (true)
	{
    for (d.tmpSpan = a.charAt(b) === d.DelphiPreprocessorChar ? d.DelphiPreprocessorStyle : c.style; b < a.length && a.substring(b, b + close_comment1_length) != f; ++b);
	 if (a.charAt(b + 1) == "}")
	 {
		return b + close_comment1_length+ 1;
	 }
	 else 
		return b + close_comment1_length;
	}	
}

function syn_addSimpleEOLComment(a, b) 
{
    var d = [];
    d.begin = a;
    d.style = b;
    d.func = syn_findEndLine;
    arr = this.Comments[getFirstChar(a)];
    if (typeof arr == "undefined")
        arr = createArray();
    arr.push(d);
    this.Comments[getFirstChar(a)] = arr	
}

function syn_findEndLine(a, b, d, c) 
{
    var f = b + 1, k;
    if (d)
        d.tmpSpan = c.style;
    for (f = b + 1; f < a.length - 3; ++f)
        if (a.charAt(f) == "<")
            if ((k = a.charAt(f + 1)) == "b" || k == "B")
                if ((k = a.charAt(f + 2)) == "r" || k == "R")
                    if (a.charAt(f + 3) == ">")
                        return f;
                    else
                        if ((k = a.charAt(f + 3)) == "/" && a.charAt(f + 4) == ">")
                            return f;
                    return f == a.length - 3 ? a.length : 0
}

function syn_addFoxProEOLComment(a, b, d) 
{
	var c = [];
	c.begin = a;
	c.style = d;
	c.end = b;
	c.func = syn_findEndOfFoxComment;
	arr = this.Comments[getFirstChar(a)];
	if (typeof arr == "undefined")
	arr = createArray();
	arr.push(c);
	this.Comments[getFirstChar(a)] = arr
}

function syn_findEndOfFoxComment(a, b, d, c) 
{
	var f = d.wlen, k = c.end;
	go = m_true;
	j = syn_findEndLine(a, b + f);
	for (an = b; go; ) 
		{
			for (g = j - 1; a.charAt(g) == " " || a.charAt(g) == "\t"; )
				g--;
			if (a.charAt(g) == k)
				j = syn_findEndLine(a, j + f, d, c);
			else
				go = m_false
		} 
		d.tmpSpan = c.style;
        return j
}

function syn_addFoxProEOLSignComment(a, b, d) 
{
	var c = [];
	c.begin = a;
	c.end = b;
    c.style = d;
    c.func = syn_findEndOfFoxSignComment;
    arr = this.Comments[getFirstChar(a)];
    if (typeof arr == "undefined")
        arr = createArray();
    arr.push(c);
    this.Comments[getFirstChar(a)] = arr
}

function syn_findEndOfFoxSignComment(a, b, d, c) 
{
    if (!d.BeginLine)
        return m_false;
    var f = d.wlen, k = c.end;
    go = m_true;
    j = syn_findEndLine(a, b + f);
    for (an = b; go; ) 
	{
        for (g = j - 1; a.charAt(g) == " " || a.charAt(g) == "\t"; )
            g--;
        if (a.charAt(g) == k)
            j = syn_findEndLine(a, j + f, d, c);
        else
            go = m_false
    } 
	d.tmpSpan = c.style;
    return j
}

function syn_addBrockenEOLComment(a, b, d) 
{
    var c = [];
    c.begin = a;
    c.end = b;
    c.style = d;
    c.func = syn_findEndCom;
    arr = this.Comments[getFirstChar(a)];
    if (typeof arr == "undefined")
        arr = createArray();
    arr.push(c);
    this.Comments[getFirstChar(a)] = arr
}

function syn_findEndCom(a, b, d, c) 
{
    var f = c.end, k = syn_findEndLine(a, b), q = -1;
    d.tmpSpan = c.style;
    if ((q = a.substring(b, k).indexOf(f)) > -1)
        return b + q + f.length;
    return k
}

function syn_setDelphiPreprocessor(a, b) 
{
    this.DelphiPreprocessorChar = a;
    this.DelphiPreprocessorStyle = b
}

function syn_insertLang(a, b) 
{
    if (!this.changeLangAn)
        this.changeLangAn = createArray();
    this.changeLangAn[a] = b
}

function syn_setTabWidth(a) 
{
    this.TabWidth = a
}

function syn_highlightFunctionNames(a, b) 
{
    if (!this.FunctionBeginn)
        this.FunctionBeginn = createArray();
    this.FunctionBeginn[a] = b
}

function findQuoteEnd(a, b, d, c, f) 
{
    for (j = b + f;
    j < a.length && a.charAt(j) != c && syn_zeichen(a, j) != c || a.charAt(j - 1) == d && evenEscapes(a, j - 1, d); ++j);
    return j + f
}

function syn_zeichen(a, b) 
{
    an = b;
    if (a.charAt(b) == "&") 
	{
        for (; a.charAt(b) != ";"; )
            b++;
        b++;
        return mnems[a.substr(an, b - an)]
    }
    return a.charAt(b)
}

function syn_colorize(a, b, d) 
{
    b = b.split(" ");
    for (var c = 0; c < b.length; c++)
        if (this.emptyArray[b[c]] == this.undefinedElement)
            a[b[c]] = d;
        else
            a[b[c] + "1"] = d
}

function syn_addKeySigns(a, b) 
{
  with (this) 
  {
	KeySigns || (KeySigns = createArray());
	colorize(KeySigns, a, b)
  }
}

function syn_setPreprocessorChar(a, b) 
{
    with (this) 
    {
        PreprocessorChar || (PreprocessorChar = createArray());
        PreprocessorChar[a] = b
    }
}

function syn_setPreprocessorNumber(a, b) 
{
    with (this) 
    {
        PreprocessorNumber || (PreprocessorNumber = createArray());
        PreprocessorNumber[a] = b
    }
}

function syn_addString(a, b) 
{
    if (!this.StringQuote)
        this.StringQuote = createArray();
    this.StringQuote[a] = b
}

function syn_setEscapeSign(a) 
{
    this.EscapeSign = a
}

function syn_setNumber(a) 
{
    this.AnyNumber = a
}

function syn_setIgnoreCase(a) 
{
    this.ignoreCase = a
}

function mainProcedure(a, b) 
{
    var d = [];
    d.index = 0;
    return proceedCode(a, b, d)
}

function changeSpan(a, b, d, c) 
{
    if (b != d) 
    {
        a.addElementToArray((b ? "</span>" : "") + d);
        b = d
    }
    if (d) 
    {
        arr = c.split(window.opera ? "<BR" : "<br");
        if (arr.length > 1)
            c = arr.join("</span>" + (window.opera ? "<BR/>" : "<br>") + d + "</")
    }
    a.addElementToArray(c);
    return b
}

function proceedCode(a, b, d) 
{
    b.BeginLine = m_true;
    for (var c = "", f = 0; f < b.TabWidth; f++)
        c += "&nbsp;";
    c = b.StringQuote;
    f = b.KeyWords;
    var k = b.KeySigns, q = b.PreprocessorChar, t = b.AnyNumber, D = b.PreprocessorNumber, I = b.ignoreCase, E = b.EscapeSign, F = b.FunctionBeginn, u = b.changeLangAn, e = 0, G = 0, z = a.length;
    e = d.index;
    var l = false, s, h, m = 0, n = h = 0, p = "", v = m_false, H = createArray(), i = createArray(), w = m_false, x = m_false, B = 0, A = m_false, C, y;
    p = m_false;
    var o = 0;
    a: for (; e < z; ) 
    {
        if (G > z)
            return;
        G++;
        h = a.charAt(e);
        if (!html_format)
            switch (h) 
			{
            case "<": h = e;
                for (e++; e < z && a.charAt(e) != ">"; ++e);
                e++;
                if (h == 0 || syn_findEndLine(a, h - 1) == h) 
                {
                    v = m_false;
                    b.BeginLine = m_true;
                    o = 0;
                    i.addElementToArray("</span>")
                }
    i.addElementToArray(a.substr(h, e - h));
    b.BeginLine && l && i.addElementToArray(l); continue a;
            case "&": h = e;
                for (h++; h < z && a.charAt(h) != ";"; h++);
                     m = h - e + 1;
                     s = a.substr(e, m);
                     if (jy = mnems[s]) h = jy;
                     else 
                      {
						e += m;
						i.addElementToArray(jy);
						o++;
						continue a
                      }
                       break;
             default: m = 1;
                      s = h
            }
	if (h == "<" && !(x = b.XML) && b.inXML && a.charAt(e + m) != "!" && (b.cLangEn && b.cLangEn == getTag(a, e + m).toLowerCase() || b.end))
        break a;
    b.wlen = m;
    if (n = getWordEnd(a, e, b.PreSigns)) 
    {
        p = a.substring(e, n);
        var r = I ? p.toLowerCase() : p;
        if (b.PreSigns) 
        {
            l && i.addElementToArray("</span>");
            nSpan = b.PreSigns[v];
            l = v && nSpan ? (i.addElementToArray(nSpan), nSpan) : (i.addElementToArray(""), 0);
            A = m_true;
            C = i.length - 1
        }
        else 
		{
            if (b.cLangEn && b.cLangEn == r)
                break a;
            i.addElementToArray("</span>");
            if (e = f[typeof H[r] != "undefined" ? r += "1" : r]) 
            {
                i.addElementToArray(e);
                l = e
            }
            else 
            {
                if (l)
                    l = m_false;
                if (b.XML) 
                {
                    l = B == 0 ? b.tagColor : b.attrColor;
                    i.addElementToArray(l);
                    B++
                }
                A = m_true;
                C = i.length;
                i.addElementToArray("")
            }
        }
        e = n;
        i.addElementToArray(p);
        o += p.length;
        if (u && typeof (mLang = u[typeof H[r] != "undefined" ? r += "1" : r]) != "undefined")
            if (x)
                w = p;
            else
                if (!b.XML) 
                {
                    e = exchangeLang(i, mLang, d, a, e);
                    o = 0;
                    l = m_false
                }
                x = m_false;
                b.BeginLine = m_false
    }
            else
                switch (h) 
				{
                case " ": i.addElementToArray("&nbsp;");
                    e += m;
                    o++;
                    break;
                case "\t": for (rest_whitespace = b.TabWidth - o % b.TabWidth; rest_whitespace; rest_whitespace--)
                        i.addElementToArray("&nbsp;");
                    o = 0; e += m;
                    break;
                default: if ((y = getComment(b, h, e, a)) && y.begin == a.substr(e, y.begin.length) && (n = y.func(a, e, b, y)) || t && (b.tmpSpan = t, n = getNumberEnd(a, e, b.PreSigns)) || c && (b.tmpSpan = c[h]) && p != E && (n = findQuoteEnd(a, e, E, h, m)) || q && (b.tmpSpan = q[h]) && (n = getWordEnd(a, e + m, b.PreSigns)) || D && (b.tmpSpan = D[h]) && (n = getNumberEnd(a, e + m)) || b.prepsignnumber && h == "#" && a.charAt(e + 1) == "$" && (b.tmpSpan = b.prepsignnumber[h]) && (n = getNumberEnd(a, e + 2))) 
                {
                        o += n - e;
                        l = changeSpan(i, l, b.tmpSpan, a.substring(e, n));
                        e = n
                    }
                    else 
                    {
                        if (s.charCodeAt(0) != 160 && !(!v && h == ","))
                            v = h;
                        if (F && (nspan = F[h]) && A)
                            l = i[C] = nspan;
                        if (k && (prepstil = k[h]))
                            l = changeSpan(i, l, prepstil, s);
                        else 
                        {
                            if (l) 
                            {
                                i.addElementToArray("</span>");
                                l = m_false
                            }
                            i.addElementToArray(s)
                        }
                        o++;
                        e += m
                    }
                    A = b.BeginLine = m_false;
                    if (h != "<")
                        x = m_false;
                    if (b.cLangEn && b.cLangEn == h) 
					{
                        e -= m;
                        break a
                    }
                    if (b.XML && h == ">" && (e = exchangeLang(i, (xy = w && a.charAt(e - m - 1) != "/") ? u[w.toLowerCase()] : "empty", d, a, e, xy ? w : null), m_true) || u && (mLang = u[h]) && (e = exchangeLang(i, mLang, d, a, e), m_true)) 
                    {
                        w = o = B = 0; x = l = m_false
                    }
				}
            p = h
    }
        d.index = e;
        b.cLangEn = m_false;
        l && i.addElementToArray("</span>");
        return i.join("")
}
cppSyn = delphiSyn = vbSyn = vbnetSyn = csharpSyn = asmSyn = perlSyn = phpSyn = aspSyn = javaSyn = javascriptSyn = sqlSyn = cppbSyn = foxproSyn = cssSyn = htmlSyn = emptySyn = propertySyn = asm_delphiSyn = m_false;

function construct(a, b, d) 
{
	var c, f;
	c = (d = d != m_true || d == 0) ? b.split(" ") : a.split(" ");
	for (var k = 0; k < c.length; k++)
		f += (d ? a + c[k] : c[k] + b) + " ";
	return f
}

function makeStyle(a, b, d, c, f, s, back) 
{
	//a=font color
	//b=font weight (normal| bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)
	//d=font style (normal| italic | oblique)
	//c=cursor (auto | crosshair | default | hand | move | e-resize | ne-resize | 
	//nw-resize | n-resize | se-resize | sw-resize | s-resize | w-resize| text | wait | help)
	//f=font family
	//s=font size
	//back=font`s background color
	ret = "<span style='" + (!c ? "" : "cursor:" + c + ";") + (!a ? "" : "color:" + a + ";");
	ret += !b ? "" : "font-weight:" + b + ";";
	ret += !d ? "" : "font-style:" + d + ";";
	ret += !f ? "" : "font-family:" + f + ";";
	ret += !s ? "" : "font-size:" + s + ";";
	ret += !back ? "" : "background:" + back + ";";
	ret += "'" + (!c ? "" : c) + ">";
	return ret
}

function createDictionary(a) 
{
    spravka = "'http://wiki.vingrad.ru/index.php/" + a + ":'+this.innerHTML.replace(/^&amp;nbsp;*|&amp;nbsp;*$/g,'').replace(/^\\s*|\\s*$/g,'')";
    return ' onclick="window.open(' + spravka + ')"'
}

function withDiv(a, b, d, c, f, k, q, t) 
{
    tabelle = createEl("TABLE");
    tabelle.cellSpacing = "0";
    mainbody = createEl("TBODY");
    tabelle.appendChild(mainbody);
    shapka = createEl("TR");
    z1 = createEl("TD");
    z2 = createEl("TD");
    z3 = createEl("TD");
    z1.width = z2.width = z3.width = "30%";
    z3.align = "right";
    z1.align = "left";
    z2.align = "center";
    markAll = createEl("A");
    markAll.href = "javaScript: selectAll('" + c + "')";
    markAllIMG = createEl("IMG");
    markAllIMG.src = imgDir + "/select.gif";
    markAllIMG.title = markAllIMG.alt = "\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0432\u0441\u0451";
    if (!window.opera) 
    {
        markAll.appendChild(markAllIMG);
        z1.appendChild(markAll)
    }
    if (d > 25) 
    {
        rollLink = createEl("A");
        rollLink.href = "javaScript: toggleScroll('" + c + "')";
        rollOut = createEl("IMG");
        rollOut.id = "fullFor" + c;
        rollOut.src = imgDir + "/expand.gif";
        rollOut.style.display = "";
        rollOut.title = rollOut.alt = "\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043a\u043e\u0434";
        rollIn = createEl("IMG");
        rollIn.id = "halfFor" + c;
        rollIn.src = imgDir + "/concat.gif";
        rollIn.style.display = "none";
        rollIn.title = rollIn.alt = "\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043a\u043e\u0434";
        rollLink.appendChild(rollOut);
        rollLink.appendChild(rollIn);
        z1.appendChild(rollLink)
    }
    codeName = createEl("B");
    codeName.innerHTML = a;
    z1.appendChild(codeName);
    shapka.appendChild(z1);
    codeTR = createEl("TR");
    codeTD = createEl("TD");
    codeTR.appendChild(codeTD);
    codeBlock = createEl("TABLE");
    codeBlock.cellSpacing = "0";
    codeBlock.id = "codetable" + c;
    scrollPane = createEl("DIV");
    scrollPane.id = "code" + c;
    codeBlock.className = "codetable";
    if (d > 25) 
    {
        scrollPane.className = "scrollpane";
        tabelle.className = "hltable"
    }
    else 
    {
        tabelle.className = document.all && !document.getSelection ? "hltable_full hltable" : "hltable_full";
        scrollPane.className = document.all && !document.getSelection ? "simplepane_ie" : "simplepane"
    } 
    codeBlockBody = createEl("TBODY");
    codeBlockBodyTR = createEl("TR");
    codeBlock.appendChild(codeBlockBody);
    codeBlockBody.appendChild(codeBlockBodyTR);
    lineNumbers = createEl("TD");
    if (t == null)
        lineNumbers.innerHTML = k;
    else
        lineNumbers.appendChild(t);
    codeCell = createEl("TD");
    codeCell.id = "codeCell" + c;
    lineNumbers.className = "code1";
    if (q == null)
        codeCell.innerHTML = f;
    else
        codeCell.appendChild(q);
    codeBlockBodyTR.appendChild(lineNumbers);
    codeBlockBodyTR.appendChild(codeCell);
    scrollPane.appendChild(codeBlock);
    codeTD.appendChild(scrollPane);
    codeCell.className = "code2";
    mainbody.appendChild(shapka);
    mainbody.appendChild(codeTR);
    tabelleOld = b.parentNode.parentNode.parentNode.parentNode;
    scrollPane.papa = tabelle;
    tabelleOld.parentNode.replaceChild(tabelle, tabelleOld)
}

function createEl(a) 
{
	return document.createElement(a)
};