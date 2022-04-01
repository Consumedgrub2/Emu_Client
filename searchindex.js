// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "Untitled Document", "Ver 1.1.1 - Grub   This will reload the page, be sure to save any unsaved progress before you do so!  Cores    ", "");
   this[database_length++] = new SearchPage("lighttheme.html", "Untitled Document", "Ver 1.1.1 - Grub   This will reload the page, be sure to save any unsaved progress before you do so!  Cores    ", "");
   this[database_length++] = new SearchPage("darktheme.html", "Untitled Document", "Ver 1.1.1 - Grub   This will reload the page, be sure to save any unsaved progress before you do so!  Cores    ", "");
   this[database_length++] = new SearchPage("darkthemeorange.html", "Untitled Document", "Ver 1.1.1 - Grub   This will reload the page, be sure to save any unsaved progress before you do so!  Cores    ", "");
   this[database_length++] = new SearchPage("darkthemered.html", "Untitled Document", "Ver 1.1.1 - Grub   This will reload the page, be sure to save any unsaved progress before you do so!  Cores    ", "");
   this[database_length++] = new SearchPage("nostalgiatheme.html", "Untitled Document", "Ver 1.1.1 - Grub   This will reload the page, be sure to save any unsaved progress before you do so!  Cores    ", "");
   this[database_length++] = new SearchPage("GBAvbFullscreen.html", "Untitled Document", " ", "");
   this[database_length++] = new SearchPage("GBAgtFullscreen.html", "Untitled Document", " ", "");
   this[database_length++] = new SearchPage("romlibrary.html", "Untitled Document1", "ROM Library  Suggest a ROM to be added by sending a request here  romsuggestions@romlib.grubssoftware.net  It is always recommended to download the latest client to get the latest functionality and info for the client!  Client Version 1.1.1   ", "");
   return this;
}
