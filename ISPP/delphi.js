var 
_flags="preventpinning iscustom external checkablealone dontinheritcheck exclusive fixed restart \
 disablenouninstallwarning checkedonce unchecked deleteafterinstall setntfscompression\
 uninsalwaysuninstall uninsneveruninstall unsetntfscompression 32bit 64bit allowunsafefiles\
 comparetimestamp confirmoverwrite createallsubdirs dontcopy dontverifychecksum fontisnttruetype\
 gacinstall ignoreversion isreadme nocompression noencryption noregerror onlyifdestfileexists\
 onlyifdoesntexist overwritereadonly promptifolder recursesubdirs regserver regtypelib replacesameversion\
 restartreplace setntfscompression sharedfile skipifsourcedoesntexist solidbreak sortfilesbyextension\
 sortfilesbyname touch uninsnosharedfileprompt uninsremovereadonly uninsrestartdelete closeonexit\
 createonlyiffileexists dontcloseonexit foldershortcut runmaximized runminimized useapppaths createkeyifdoesntexist\
 uninsdeleteentry uninsdeletesection uninsdeletesectionifempty createvalueifdoesntexist deletekey deletevalue\
 dontcreatekey noerror preservestringtype uninsclearvalue uninsdeletekey uninsdeletekeyifempty uninsdeletevalue\
 hidewizard nowait postinstall runascurrentuser runasoriginaluser runhidden skipifdoesntexist skipifnotsilent\
 skipifsilent unchecked waituntilidle waituntilterminated filesandordirs dirifempty hklm hkcu hklm hku hkcc hkcr\
 hkcr32 hklm32 hkcu32 hklm32 hku32 hkcc32 hkcr64 hklm64 hkcu64 hklm64 hku64 hkcc64 none string expandsz multisz dword qword binary";
_delphi="and xor or not shl shr mod div cdecl stdcall register pascal export far near forward asm assembler begin end virtual property\
 dynamic abstract override constructor destructor private protected public published finalization uses var const type label initialization\
 unit library implementation  raise for do while repeat until on to downto is as on in of if then else exports class except finally try\
 interface file array object packed record set string function external procedure absolute message case goto inherited inline nil out with"; 
_Parameter="app afterinstall attribs beforeinstall check comment components copymode description destdir destname\
 excludes extradiskspacerequired filename flags fontinstall groupdescription hotkey infoafterfile infobeforefile\
 iconfilename iconindex key languages licensefile messagesfile minversion name onlybelowversion parameters permissions\
 root runonceid section source statusmsg string subkey tasks type types valuedata valuename valuetype workingdir";
_KeywordOther="allownetworkdrive restartapplications closeapplicationsfilter closeapplications allowcancelduringinstall allownoicons allowrootdirectory allowuncpath alwaysrestart\
 alwaysshowcomponentslist alwaysshowdironreadypage alwaysshowgrouponreadypage alwaysusepersonalgroup appcomments appcontact\
 appcopyright appenddefaultdirname appenddefaultgroupname appid appmodifypath appmutex appname apppublisher apppublisherurl\
 appreadmefile appsupportphone appsupporturl appupdatesurl appvername appversion architecturesallowed architecturesinstallin64bitmode\
 backcolor backcolor2 backcolordirection backsolid changesassociations changesenvironment compression compressionthreads\
 createappdir createuninstallregkey defaultdialogfontname defaultdirname defaultgroupname\
 defaultuserinfoname defaultuserinfoorg defaultuserinfoserial direxistswarning disabledirpage\
 disablefinishedpage disableprogramgrouppage disablereadymemo disablereadypage disablestartupprompt disablewelcomepage diskclustersize\
 diskslicesize diskspanning dontmergeduplicatefiles enablesdirdoesntexistwarning encryption extradiskspacerequired flatcomponentslist\
 infoafterfile infobeforefile internalcompresslevel languagedetectionmethod licensefile\
 lzmaalgorithm lzmablocksize lzmadictionarysize lzmamatchfinder lzmanumblockthreads lzmanumfastbytes lzmausedeparateprocess\
 mergeduplicatefiles minversion messagesfile onlybelowversion outputbasefilename outputdir outputmanifestfile password privilegesrequired\
 reservebytes restartifneededbyrun setupiconfile setupLogging showcomponentsizes showlanguagedialog showtaskstreelines slicesperdisk\
 showundisplayablelanguages signeduninstaller signeduninstallerdir signtool solidcompression sourcedir terminalservicesaware\
 timestamprounding timestampsinutc titlefontname touchdate touchtime uninstallable uninstalldisplayicon uninstalldisplayname\
 uninstalldisplaysize uninstallfilesdir uninstalliconfile uninstalllogmode uninstallrestartcomputer\
 updateuninstalllogappname uninstallstyle usepreviousappdir usepreviousgroup usepreviouslanguage useprevioussetuptype useprevioustasks\
 useprevioususerinfo userinfopage usesetupldr versioninfocompany versioninfocopyright versioninfodescription versioninfoproductname\
 versioninfoproductversion versioninfotextversion versioninfoversion windowresizable windowshowcaption\
 windowstartmaximized windowresizable windowvisible wizardimagebackcolor wizardimagefile wizardimagestretch wizardstyle wizardsmallimagefile\
 wizardsmallimagebackcolor";
_funcs="rmsessionstarted initializesetup initializewizard deinitializesetup curstepchanged nextbuttonclick backbuttonclick cancelbuttonclick\
 shouldskippage curpagechanged checkpassword needrestart updatereadymemo registerpreviousdata checkserial getcustomsetupexitcode\
 preparetoinstall initializeuninstall initializeuninstallprogressform deinitializeuninstall curuninstallstepchanged uninstallneedrestart",
_consts = ["{code:", "{drive:", "{param:", "{ini:", "{reg:", "{ini:", "{cm:", "{%", "{\\", "{app", "{win", "{sys", "{syswow64", "{src", "{sd", "{pf", "{pf32", "{pf64", "{cf", "{cf32", "{cf64", "{tmp", "{fonts",
 "{dao", "{dotnet11", "{dotnet20", "{dotnet2032", "{dotnet2064", "{dotnet40", "{dotnet4032", "{dotne4064", "{group", "{localappdata",
 "{sendto", "{userappdata", "{commonappdata", "{userdesktop", "{commondesktop", "{userdocs", "{commondocs", "{userfavorites",
 "{commonfavorites", "{userprograms", "{commonprograms", "{userstartmenu", "{commonstartmenu", "{userstartup", "{commonstartup",
 "{usertemplates", "{commontemplates", "{cmd", "{cm:", "{computername", "{groupname", "{hwnd", "{wizardhwnd", "{language", "{srcexe",
 "{uninstallexe", "{sysuserinfoname", "{sysuserinfoorg", "{userinfoname", "{userinfoorg", "{userinfoserial", "{username", "{log"];
_sections = ["[PostCompile", "[PreCompile", "[_ISToolDownload", "[_ISToolPreCompile", "[_ISToolPostCompile", "[ISFormDesigner", "[Setup", "[Types", "[Components",
 "[Icons", "[INI", "[InstallDelete", "[Languages", "[Messages", "[CustomMessages", "[LangOptions", "[Run", "[UninstallRun", "[Registry",
 "[UninstallDelete", "[Code", "[Tasks", "[Dirs", "[Files"];
_defPrep = ["#define", "#dim", "#undef", "#include", "#file", "#emit", "#expr", "#insert", "#append", "#if",
 "#elif", "#else", "#endif", "#ifdef", "#ifndef", "#ifexsists", "#ifnexsists", "#for", "#sub", "#endsub", "#pragma", "#error"];
function setup_delphi() 
{
    if (delphiSyn) return delphiSyn;
    with (delphiSyn = new classSyn) 
    {
		addSimpleEOLComment("///", makeStyle("#008001"));
		addSimpleEOLComment(";;", makeStyle("#008001"));
		addSimpleOpencloseComment("(*", "*)", makeStyle("#008001"));
		addKeywords(_funcs, makeStyle("black", "bold"));
        addKeywords(_flags, makeStyle("#a04000"));
        addKeywords(_Parameter, makeStyle("red"));
        addKeywords(_delphi, makeStyle("blue"));
        addKeywords(_KeywordOther, makeStyle("blue"));
		for (var i = 0; i < _defPrep.length; i++)
            addSimpleEOLComment(_defPrep[i], makeStyle("red"));
        for (var i = 0; i < _consts.length; i++)
            addSimpleOpencloseComment(_consts[i], "}", makeStyle("#ff40a0"));
		for (var i = 0; i < _sections.length; i++)
			addSimpleOpencloseComment(_sections[i], "]", makeStyle("#000000", "bold"));
		addSimpleOpencloseComment("{#", "}", makeStyle("red"));
		addSimpleOpencloseComment("'{#", "}'", makeStyle("red"));
		addSimpleOpencloseComment("'{", "}", makeStyle("black"));
		addSimpleOpencloseComment("@{", "}", makeStyle("black"));
		setIgnoreCase(true);
        setEscapeSign(null); 
		setTabWidth(2)
    } return delphiSyn
};