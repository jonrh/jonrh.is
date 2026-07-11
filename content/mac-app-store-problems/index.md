import Image from "next/image";
import Post from "../../components/Post";

<Post
  title="Mac App Store problems"
  path="mac-app-store-problems"
  date="March 21, 2011"
  metaDescription="Two workarounds to solve problems logging into the macOS App Store."
>

If you're here because the Mac App Store is giving you troubles then you've
come to the right place. In my search I found two distinct problems and
solutions.

If you're having troubles signing in (the login window doesn't appear or you
can't type anything in the input boxes) then it might be because you're running
FruitMenu or Application Enhancer. Apple has acknowledged that problem here
http://support.apple.com/kb/TS3638. If you don't want to disable FruitMenu then
fcarroll suggests a workaround:

<blockquote>There is a relatively easy workaround for this problem. When an
attempt is made to log in to the App store with Fruit Menus running, the log in
window appears behind the main window instead of in front. If the main window
is moved out of the way, the log in window will be visible. You can't type into
it but, using the contextual menu, the password can be pasted and the log in
button can be clicked.</blockquote>

If you get a never ending loading screen that reads "One moment please.
Connecting to the Mac App Store. Loading..." then you'll need to delete two
files and restart.

<Image
  src="/images/mac-app-store-problems/mac_app_store_one_moment_please.png"
  alt="The One moment please loading screen for the Mac App Store"
  width={409}
  height={201}
/>

To delete the files paste the two lines below into Terminal and press enter:

```
rm ~/Library/Preferences/com.apple.appstore.plist
rm ~/Library/Preferences/com.apple.storeagent.plist
```

I did stumble upon another very similar solution by Paul Bagwell but it deletes
some extra folder. If deletion of the two files plus a restart didn't help I'd
definitely give that solution a try. If you find some other problems/solutions
please post in the comments and I'll update the post.

{/*

Comments:

2012.09.12 AT 20:31, Roger:
Thanks jonrh, perfect. I was on the phone with Apple tech and he had no clue what my problem was.
Went to terminal, deleted the two files from terminal and wala!! Thanks for the info and help. Now
I can download FCP X and Mountain Lion finally!!

*/}

</Post>