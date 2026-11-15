# Table Timer

A turn timer for board games, for up to six players around a table. Open it on an iPhone and add it to the home screen.

**Open it:** https://sinkjaer.github.io/table-timer/

## Put it on your iPhone

1. Open the address above in Safari.
2. Tap Share, then **Add to Home Screen**.
3. Open **Table Timer** from the home screen. It runs full screen and works offline after the first visit.

Player names and photos are saved only on the phone.

## Updating

Installed copies check for a new version when they are opened or brought back to the front, and reload
by themselves once no clock is running.

`index.html` is generated from `tabletop-timer.html` by `build-iphone-app.sh` (kept outside this repository),
which also stamps the build id the update check compares. Change `VERSION` in `sw.js` when the cached files change.
