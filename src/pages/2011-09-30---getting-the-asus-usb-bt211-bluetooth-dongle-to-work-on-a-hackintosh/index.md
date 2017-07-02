---
title: Getting the Asus USB-BT211 Bluetooth dongle to work on a Hackintosh
date: "2011-09-30T00:00:00Z"
path: "/getting-the-asus-usb-bt211-bluetooth-dongle-to-work-on-a-hackintosh/"
---

I just received my Asus USB-BT211 Bluetooth dongle in the mail today and was excited to finally get
to use my trusty Apple Wireless keyboard again. I ordered it from Amazon after I read [this][0]
tonymacx86 blogpost about recommended hardware for SandyBridge Hackintosh builds. Supposedly it
should have worked right out of the box, just plug-and-play. However the dongle (<[BT21][1]) that
the link pointed to wasn't for sale anymore so carelessly I found a dongle with a similar name
([BT211][2]). Long story short, the previous version (BT21) works out of the box but the newest one
that I got (BT211) does not. The remainder of this post are instructions that I found after some
digging on how to make it work (with some limits).

Credit goes to *drcrack* at the [tonymacx86 forum][3]. You should probably check out [his post][4]
first, he seems to be updating it quite regularly and it contains some additional information.

<!-- Todo: the name of the file gets banged up:  96e6a871b21dc0c63e89e1868cc5ce7f.gz -->
1. Download [this file](./ath3k-firmware-uploader-V2.tar.gz) (it's extracted Windows 7 drivers
courtesy of the user *ajg0r* at the tonymacx86 forum)

2. Run Terminal and change dir to your Downloads directory:

    ```
    $ cd ~/Downloads
    ```

    (No, you can't just click "install" script in Finder -- it requires to be run with sudo. If you click it, it will just exit.)

3. Unpack
    ```
    $ tar zxf ath3k-firmware-uploader-V2.tar.gz
    ```

4. Go to unpacked directory
    ```
    $ cd ath3k-firmware-uploader-V2
    ```

5. Install (will require admin rights)
    ```
    $ sudo ./install
    ```

6. Shutdown, do power-off, power-on, and enjoy native bluetooth right from the start

7. Once back in OSX there will be a window stating that there is a new network adapter available.
Go to *Network* in *System Preferences* and click the plus on the left and select *Bluetooth DUN*.
All done, now just pair your device/s as usual.


Now the limits? People are reporting that the Magic Mouse and Magic Trackpad do not work, only
"... wireless keyboard[s], audio and phones." As I just wanted to use my Wireless Apple keyboard,
I got what I wanted -_-. Thanks *drcrack* and *ajg0r* for the help!

<!--

Comments:

2011-11-24 17:14, Anonymous:
Thanks for the info and for working this all out. I have a hackintosh and am using a BT211 right as
I type with Apple BT keyboard and Mighty Mouse. However, when I reboot,I have no BT services. I
have to go back in with a wired setup and re run the ./install script. And then of course it says
that the file is already there. Then I have BT services and can pair my mouse and keyboard. Short
of some major trick I haven’t been able to find, is there a way to write a startup script that will
do this on reboot?

Thanks for your work and help


2011.11.24 17:28, jonrh:
Hey, glad it helped someone. But yeah I’ve been running into the exact same problem when I reboot.
I’ve been meaning to write some script that’d take care of this (and update this post) but haven’t
got around to it yet. If you’ll send me a message on twitter (my username is jonrh) I’ll let you
know personally once I’ve finished it. It could be a while though, I was upgrading my OSX few days
ago and somehow managed to mess it up so now I can’t get passed the grey loading screen with the
Apple logo, ooops :p


2012.11.21 17:34, Altonymous:
The download links no longer work, and the post you’re pointing to has been archived. Just wanted
to give you and other readers of this an update as I continue my search to get this working.


2013.05.22 AT 20:39, JC:
Hi, the link for downloading the file does not work anymore. Is there another link? Thanks!


2013.05.23 AT 15:31, Lukas:
I have bo Problems with the Reboot, but the Magic Mouse works for aprox. 5 Minutes, than it lacks
until connection is lost. But thanks for the Skript and driver you’ve provided here. Helped me a
lot. I RTS the Dongle and get a new one which hopefully works fine.

Best Regards
Lukas


2013.06.01 AT 02:04, jonsi:
I updated the link so the download should work now. Thanx for pointing it out!


2013.10.22 AT 10:36, NicoX:
I ahve the same bluetooth and I have Win 7 as well as OSX 10.8. I have a Haswell build.
I see if I boot to Win 7 and come back to OSX 10.8 it works well I say really well.
I think when I go to Win7 , Win 7 somehow starts BT211. Can you script that way so that when OSX
10.8 boots it starts BT211 too.

I am a developer can you help me how you are making the script a bit step by step way so that I can
also try with you. I have no idea of DSDT so …………. A bit step by step way will only help me.

Any way it was a awesome post :)
NicoX


2013.10.26 AT 14:15, John:
But what if i’am using not chimera boot loader but the clover one? I don’t have extra folder and in
case of that I get “/Extra: No such file or directory” :((( What i have to do then?


2014.03.05 AT 22:12, Alex:
Trying to install on old ibook g4 and getting error “bad cpu type in executable” i guess it is
built for intel not for ppc.can anybody help me?!


2014.03.10 AT 01:12, jonrh:
Alex: I think you’re right. The dongle will probably not work because the drivers were written for
a different CPU architecture. I’m really sorry for not being able to be of more help.

-->


[0]: http://tonymacx86.blogspot.com/2011/06/building-sandy-bridge-customac.html
[1]: http://www.amazon.com/gp/product/B0032EYZ34/ref=as_li_ss_tl?ie=UTF8&tag=tonymacx86com-20
[2]: http://www.amazon.com/Asus-Mini-Bluetooth-Dongle-USB-BT211/dp/B0041UJVI2/ref=sr_1_1?s=electronics&ie=UTF8&qid=1317344674&sr=1-1
[3]: http://tonymacx86.com/index.php
[4]: http://www.tonymacx86.com/viewtopic.php?f=79&t=18410