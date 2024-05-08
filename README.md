in imsmanifest.xml:
 - replace TITLE with the e-learning name
 - Add all code files (and maybe assets) in <\resources> -> <\resource> -> <\file> 
    if you used vite+vue:
        - change the base option in vite.config.js to "./"
        - run in the terminal `npm run build`
        - copy the contents of dist folder to web folder
        - change the href in imsmanifest <\resource> to index.html and connet the apropriate css and js (they are in dist/assets)

in your html
- add script tag with the link to SCROMfunctions.js
- call the function `finishTestSCROM` at the end of your test

#Using scores: 
- unless the lesson was completed before, at the start of the attampt the status of the lesson is set to "incomplete"
- to report completion, call the function `reportComplete()`;
- to report grade call the function `finishTestSCROM(score, thershold)`.
        - score is a number between 0 and 100  
        - threshold is optional and determines the minumun thershold to pass the lesson (deafult: 50)
            all scores equal to or above the threshold are considered "passed" 