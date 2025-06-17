Vincent's STADS Fixer
=====================

What it does
------------
Fixes the bug where you can't log into STADS if your AAU ID contains 
the domain.

How?
----
Reprogrammed the login button, so that before it submits all your 
login details, it snips off the login's domain. It's scuffed but it 
works.

Why is this even necessary?
---------------------------
`-\_(._.)_/-`

Installation on Firefox
-----------------------
Just install it from the [Firefox Add-on Store](https://addons.mozilla.org/en-GB/firefox/addon/aau-stads-fixer/).

Installation on other browsers
------------------------------
Not yet possible. 

It should be relatively trivial to port to Chrome et cetera, but I don't have the browsers (so I can't test it), and publishing to the Chrome add-on store apparently costs money.
If it's something you want, try to figure it out yourself, and then submit a PR once you get it working. Let me know if you hit any roadblocks.
