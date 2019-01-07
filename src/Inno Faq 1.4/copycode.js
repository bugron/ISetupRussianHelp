function copyToClipboard(taCode, theCode)
{
  // Copies currently displayed code to empty textarea
  taCode.innerText = theCode.innerText;

  // Remove formatting from code in textarea
  textRange = taCode.createTextRange();
  textRange.execCommand("RemoveFormat");

  // Copies code from textarea to user's clipboard
  textRange.execCommand("Copy");
}