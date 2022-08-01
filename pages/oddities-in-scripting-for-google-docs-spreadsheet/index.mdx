import Image from "next/image";
import Post from "../../components/Post";

<Post
  title="Oddities in Google docs spreadsheet"
  path="oddities-in-scripting-for-google-docs-spreadsheet"
  date="April 24, 2010"
  metaDescription="A record of issues I had with custom functions, data
  validation, and sorting in Google docs spreadhseet."
>

## Custom Functions

If a custom JavaScript function in Google docs spreadsheet is put into a cell it cannot write in
other cells than its own. I find this quite odd but a workaround I used was to create a custom Menu
item that just fetches the values it needed and wrote the outputs in the cell.

What I initially had in mind was something like this:

<Image
  src="/images/oddities-in-scripting-for-google-docs-spreadsheet/1.png"
  alt="Screenshot from a Google Drive spreadsheet"
  width={344}
  height={103}
/>

Where myCustomFunction() is:

<Image
  src="/images/oddities-in-scripting-for-google-docs-spreadsheet/2.png"
  alt="Screenshot of a custom JavaScript function"
  width={399}
  height={97}
/>

But as stated above this doesn’t work. The following error message is displayed: **You do not have
permission to call setValue**. The reason as to why it’s not allowed is beyond me but the same
question was asked on the [Google support forums](http://www.google.com/support/forum/p/apps-script/thread?tid=753b695833c8d905&hl=en)
where a [Google employee](http://www.google.com/support/forum/p/apps-script/user?userid=08739274722215801838&hl=en)
simply stated it wasn’t possible. The workarounds that he suggested were “*…running your script
inside the editor, or from a drawing…*“.

I didn’t really find that to be neat enough so my workaround as stated before was to modify the
function to retrieve the values itself and do its thing with the output cells. Google provides
excellent tutorials on how to accomplish both things.

Google tutorial: [Modifying cells](http://www.google.com/google-d-s/scripts/yourfirstscript.html)
Google tutorial: [Creating menu items](http://www.google.com/google-d-s/scripts/defining_menus.html)


## Data validation bug?
When you want to know the last index that contains data you can do it like so:
`sheet.getDataRange().getLastRow()`. However if you have a *Data validation* on a column, it seems
as if that defines that every cell has a value, even if the cells are all empty. This makes the
above function call return the number 101 (the default number of rows). When I removed the data
validation from the column it returned the right index.


## Sorting
You can’t sort individual columns apart from others. You can freeze up to the first 5 rows and
columns, meaning they won’t be affected by the sorting. Beyond that I guess the only solution is to
spread to multiple sheets.

</Post>