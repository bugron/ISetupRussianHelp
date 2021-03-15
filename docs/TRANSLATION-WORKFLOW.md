# Translation workflow
## 1. Generate HTML documents and compile chm file from the source
**First**, make sure Microsoft MSXML is installed on your system (see [Contribution Guidelines](../CONTRIBUTING.md) for details).
`git checkout` to the required branch or tag or [download a zip archive](https://github.com/bugron/ISetupRussianHelp/archive/main.zip) from GitHub. Now we are interested in `issrc\ISHelp` folder. Create a `.bat` file named `compilesettings` in that folder with following contents:
```
set HHCEXE=%ProgramFiles(x86)%\HTML Help Workshop\hhc.exe
```

Make sure to replace the path to `hhc.exe` if it is different in your case.

Run `compile.bat` file. Take a look at the `issrc\ISHelp\Staging` folder. You should see a bunch of `.htm` files there, a compiled `isetup.chm` file and some other files too.

This same process can be also applied to `Projects/ISPP/Help` to create an ISPP release if needed.

## 2. Compare previous release with the new one
I decompile `isetup.chm` files of previous and current releases and compare their files. A software like `SyncToy`, `KDiff3` or similar can be used for making this comparison process easier.

## 3. Making changes to source files
Once differences are identified I go through all of them and manually translate and apply differences to the files in this repo. All the source file changes go to a specific `release/${INNO_SETUP_VERSION}` branch.

## 4. Releasing a new version of the translated help file
Once the process above is finished and there is nothing more to translate a new `.chm` help file is generated (see [Contribution Guidelines](../CONTRIBUTING.md) for details) and [krinkels.org](http://krinkels.org/resources/russkaja-spravka-po-inno-setup.132/) forum resource is updated.

Usually a new translation release is made after a new version of Inno Setup comes out but if it is necessary to make a translation release earlier it is possible thanks to [issrc](https://github.com/jrsoftware/issrc) repository (where Inno Setup source code lives).

## Useful resources
  * [Microsoft Terminology Search VSCode Extension](https://github.com/bugron/microsoft-terminology-search)
  * [Microsoft Terminology Search](https://www.microsoft.com/en-us/language/Search?&searchTerm=Resizable&langID=Russian&Source=true&productid=All%20Products)
  * [Russian translation of ISPP's help file](https://wylek.ru/index.php?topic=173.0)
