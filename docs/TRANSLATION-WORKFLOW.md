# Translation Workflow
Here is my workflow for translating Inno Setup documentation when a new version is released.

## 1. Compare previous release with the new one
I decompile `isetup.chm` files of previous and current releases and compare their files. A software like `SyncToy` or `KDiff3` can be used for making this comparison process simpler.

## 2. Making changes to source files
One the differences are identified I go through all of them and manually translate and apply differences to the files in this repo. All the source files changes go to a specific `release/${INNO_SETUP_VERSION}` branch.

## 3. Releasing a new version of the translated help file
Once the process above is finished and there is nothing more to translate a new `.chm` help file is generated (see [Contribution Guidelines](../CONTRIBUTING.md) for details) and [krinkels.org](http://krinkels.org/resources/russkaja-spravka-po-inno-setup.132/) forum resource is updated.

Usually a new translation release is made after a new version of Inno Setup comes out but if it is necessary to make a translation release earlier it is possible thanks to [issrc](https://github.com/jrsoftware/issrc) repository (where Inno Setup source code lives). Continue reading to find out how.

## 4. Creating an early translation release
**First**, make sure Microsoft MSXML is installed on your system (see [Contribution Guidelines](../CONTRIBUTING.md) for details).

Then, we need to find out based on which GitHub branch we'd like to make a translation release. Once the branch is identified we need to `git checkout` it or download a ZIP archive of it from GitHub. Now we are interested in `issrc\ISHelp` folder. Create a bat file named `compilesettings` in the folder with the following contents:
```
set HHCEXE=%ProgramFiles(x86)%\HTML Help Workshop\hhc.exe
```

Make sure to replace the path to `hhc.exe` if it is different in your case.

Take a look at the `issrc\ISHelp\Staging` folder. You should see a bunch of `.htm` files there, a compiled `isetup.chm` file and some other files too. Finally, compare all `.htm` files in this folder with the source files of a previous release to identify the differences and simply repeat steps 1-3.

This same process can be also applied to `Projects/ISPP/Help` to create an ISPP release if needed.

## Useful resources
  * [Microsoft Terminology Search](https://www.microsoft.com/en-us/language/Search?&searchTerm=Resizable&langID=Russian&Source=true&productid=All%20Products)
  * [Russian translation of ISPP's help file](https://wylek.ru/forum_be/showtopic-173)