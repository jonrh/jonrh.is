---
title: Gitignore for LaTeX projects
date: "2016-03-12T00:00:00Z"
path: "/gitignore-for-latex-projects/"
---

I use [LaTeX][0] and [Git][1] for schoolwork. It took me a bit of trial and error to figure out the
proper [`.gitignore`][2] configuration to exclude the auto generated "byproduct" files LaTeX
produces.

Here is what I'm currently using in my `.gitignore` files:

```
# Ignore all files in "LaTeX" folders
**/LaTeX/

# Except .tex files and files in the /images/ folder
!**/LateX/*.tex
!**/LateX/images/
```

Here is an example of the folder structure I use:

```
Course/
   ├─ Assignment1/
   |   ├─ assignment files
   |   └─ LateX/
   |      ├─ Report.tex  <- include
   |      ├─ Report.pdf  <- ignore
   |      ├─ Report.gz   <- ignore
   |      ├─ Report.out  <- ignore
   |      ├─ Report.log  <- ignore
   |      ├─ Report.aux  <- ignore
   |      └─ images/
   |         └─ figure1.png  <- include
   ├─ Assignment2/
   |   ├─ assignment files
   |   └─ LateX/
   |      ├─ ...
   |
  ...
```

Notice that I exclude the generated PDF file. As with code you generally don't want to include
files in Git that can be created / generated from a source file, it can create a lot of noise.
However I make an exception to that in my workflow for convenience. After I'm done writing I copy
`Report.pdf` to the `Assignment1` folder and commit it. That way I track in Git the version I
submitted.


[0]: https://en.wikipedia.org/wiki/LaTeX
[1]: https://en.wikipedia.org/wiki/Git_%28software%29
[2]: http://git-scm.com/docs/gitignore