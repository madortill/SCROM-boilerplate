in imsmanifest.xml:
 - replace TITLE with the e-learning name
 - Add all code files (and maybe assets) in <\resources> -> <\resource> -> <\file> 
    if you used vite+vue:
        - delete the base option in vite.config.js (the whole line)
        - run in the terminal `npm run build`
        - copy the contents of dist folder to web folder
        - change the href in imsmanifest <\resource> to index.html and connet the apropriate css and js (they are in dist/assets)