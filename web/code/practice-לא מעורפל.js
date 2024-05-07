const DATA = { 
    // נוגדי אלרגיה
    "antiallergic": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: `מהו היסטמין?`,
                ans1: `חומר במעורר תגובה חיסונית`,
                ans2: `שם של תרופה `,
                ans3: `שם של נגיף`,
                ans4: `ויטמין חיוני לגוף`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מה מנגנון הפעולה של תרופות אנטי-היסטמינים?`,
                ans1: `חסימת קולטני היסטמין`,
                ans2: `הרס היסטמין בגוף `,
                ans3: `אותו מנגנון פעולה של היסטמין בגוף רק שמופק בצורה מלאכותית `,
                ans4: `שכפול של ההסטמין בגוף`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מה התופעת לוואי העיקרית של אלרג'יקס - אריוס במינונים גבוהים`,
                ans1: `סחרחורות `,
                ans2: `כאבי ראש`,
                ans3: `ישנוניות `,
                ans4: `תשובות א + ג נכונות `,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מה ההתוויה למתן אלרג'יקס - אריוס?`,
                ans1: `קוצר נשימה`,
                ans2: `כאבי ראש`,
                ans3: `דלקת עיניים`,
                ans4: `אורטיקריה (פריחה)`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מה ההתוויה למתן אופטילסט - אסטלין?`,
                ans1: `אורטיקרה (פריחה)`,
                ans2: `דלקת עיניים אלרגית`,
                ans3: `סחרחורת `,
                ans4: `כאבי שרירים`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מה הינה תופעת לוואי עיקרית אך נדירה של אופטילסט - אסטלין?`,
                ans1: `פזילה `,
                ans2: `התקף אסטמה `,
                ans3: `נזלת כרונית `,
                ans4: `צריבה בעיניים `,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מה ההתוויה למתן פרדניזון?`,
                ans1: `דלקת חמורה `,
                ans2: `הפרעות הורמונליות `,
                ans3: `נזלת אלרגית `,
                ans4: `תשובות א + ב נכונות`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מה הינה תופעת לוואי עיקרית של פרדניזון?`,
                ans1: `תופעות נירולוגיות כגון פרכוסים
                `,
                ans2: `דלקת חמורה `,
                ans3: `נזלת אלרגית `,
                ans4: `תשובות א + ג נכונות`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `באיזו צורת מתן יש לתת פליקסונס?`,
                ans1: `כדור בליעה `,
                ans2: `אינהלציה `,
                ans3: `ספריי לאף `,
                ans4: `משחה `,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מה אינה תופעת לוואי עיקרית של פרדניזון?`,
                ans1: `עלייה ברמות סוכר`,
                ans2: `עליית לחץ דם`,
                ans3: `הפרעות במאזן מלחים `,
                ans4: `ירידה ברמות החלבון בגוף `,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מהן ההדרכות לטיפול במתן פרדניזון?`,
                ans1: `לא להפסיק את הטיפול בפתאומיות`,
                ans2: `לא לקחת את התרופה ביחד עם אלכוהול `,
                ans3: `לקחת על בטן ריקה `,
                ans4: `תשובות א + ג נכונות `,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מה ההתוויה למתן בטאקרוטן?`,
                ans1: `נזלת כרונית`,
                ans2: `פסוריאזיס (נגעים קשקשיים בעור)`,
                ans3: `הפרעות הורמונליות `,
                ans4: `תשובות ב + ג נכונות`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מה הינה תופעת לוואי עיקרית של מתן סינופד?`,
                ans1: `קשיי שינה`,
                ans2: `עצבנות `,
                ans3: `פלפיטציות (דפיקות לב)`,
                ans4: `כל התשובות נכונות`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מה התופעת לוואי העיקרית של סינולן?`,
                ans1: `יובש/צריבה בריריות האף והלוע`,
                ans2: `החמרת גודש באף`,
                ans3: `עליית לחץ דם `,
                ans4: `כל התשובות נכונות`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `כמה טיפות יש לשים בכל נחיר ובאיזו תדירות?`,
                ans1: `עד 2 טיפות לכל נחיר, 3 פעמים ביום`,
                ans2: `עד טיפה אחת לכל נחיר, 3 פעמים ביום`,
                ans3: `עד 2 טיפות לכל נחיר, פעמיים ביום`,
                ans4: `עד טיפה אחת לכל נחיר, פעמיים ביום`,
                correctAns: `ans1`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: `מה החומר הפעיל בתרופה Atrofen?`,
                ans1: `Etodolac`,
                ans2: `Ibuprofen`,
                ans3: `Paracetamol`,
                ans4: `Diclofenac`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `חולה שסובל מכאבי בטן, הקאות ושלשולים קיבל מרשם ל Papavernine. מה מטרת התרופה?`,
                ans1: `נגד הקאות`,
                ans2: `מניעת כאב ראש `,
                ans3: `שיכוך כאבים שמקורם בדרכי השתן באמצעות כיווץ שרירים`,
                ans4: `שיכוך כאבים שמקורם בדרכי העיכול באמצעות הרפיית שרירים`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מהן תרופת הבחירה במצב של כאב ראש?`,
                ans1: `Acamol Focus`,
                ans2: `Laxadin`,
                ans3: `Pramin`,
                ans4: `Etopan`,
                correctAns: `ans1`
            },
        ],
        "amountOfQuestions": 1,
    },
    // אנטיביוטיקה
    "antibiotics": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: `באיזה מנגנונים יכולה לעבוד אנטיביוטיקה?`,
                ans1: `הרס גרעין התא של החיידק.`,
                ans2: `פגיעה בדופן התא של החיידק.`,
                ans3: `פגיעה בכניסת חומרי מזון לתא החיידק.`,
                ans4: `פגיעה בוויסות החום בגוף`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `איזו מהתרופות הבאות אינה אנטיביוטיקה?`,
                ans1: `Ceforal`,
                ans2: `Papaverine`,
                ans3: `Moxypen`,
                ans4: `Synthomycin`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `חייל שקיבל אנטיביוטיקה עקב דלקת גרון חיידקית פנה אליכם אחרי 3 ימים (מתוך 10) בטענה שהוא מרגיש טוב יותר ומעוניין להפסיק לקחת את התרופה. כיצד תדריכו אותו?`,
                ans1: `במידה ומרגיש טוב, רשאי להפסיק את הטיפול.`,
                ans2: `עליו להשלים חצי מהטיפול (5 מתוך 10 ימים) ואז יוכל להפסיק.`,
                ans3: `עליו להשלים את הטיפול כפי שנרשם בהתחלה, למרות שמרגיש טוב יותר.`,
                ans4: `החייל יופנה לרופא, יכול להיות שצריך להחליף תרופה.`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `איזה תופעת לוואי של אנטיביוטיקה עלולה להמשיך גם אחרי סיום הטיפול ודורשת פניה לרופא?`,
                ans1: `כאב ברום הבטן`,
                ans2: `הפרעות בקצב לב`,
                ans3: `הפרעות במאזן מלחים בדם`,
                ans4: `שלשול ממושך`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מרבית האנטיביוטיקות שניתנו P.O. מומלץ לקחת.....?`,
                ans1: `לפני האוכל על בטן ריקה.`,
                ans2: `מבלי לקיים יחסי מין שבוע אחרי הטיפול.`,
                ans3: `אחרי אוכל על בטן מלאה.`,
                ans4: `לפני שינה.`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מהן תופעות לוואי נפוצות משותפות להרבה מהאנטיביוטיקות שניתנות P.O.?`,
                ans1: `כאבי בטן ושלשולים`,
                ans2: `הפרעות בקצב הלב`,
                ans3: `תגובה אנאפילקטית`,
                ans4: `שיעול`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `איזה אנטיביוטיקות עלולות להוביל להפרעות בקצב לב?`,
                ans1: `משחות כמו synthomycin`,
                ans2: `קבוצת הפניצילינים (למשל moxypen )`,
                ans3: `רק אנטיביוטיקות בהזרקה יכולות להוביל להפרעות בקצב הלב במצבים נדירים`,
                ans4: `קבוצת המקרולידים (למשל roxythromycim-rulid )`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `כיצד נדריך חיילת שנוטלת ofloxacin (oflodex) (מקבוצת fluoroquinolones )?`,
                ans1: `להיזהר בפעולות הדורשות רגיעה כמו שינה`,
                ans2: `מותר להפסיק את הטיפול באמצע אם מרגישים יותר טוב`,
                ans3: `יש להמנע מחשיפה ממושכת לשמש, להשתמש בקרם הגנה`,
                ans4: `כאבי בטן הם לא חלק מתופעות הלוואי של תרופה זו`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `כיצד נדריך חייל שקיבל מרשם ל mupirocin (bactroban)?`,
                ans1: `לבלוע אחרי האוכל`,
                ans2: `להמנע ממגע עם אזורים אינטימיים.`,
                ans3: `אין להשתמש בתכשירים קוסמטיים על איזור המריחה.`,
                ans4: `התרופה לא מטפלת בזיהומים של העור אלא רק של ריריות`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `דגשים נכונים למריחת משחת synthomycin בעין?`,
                ans1: `המשחה נועדה לשימוש חיצוני על העפעפיים בלבד`,
                ans2: `בהכרח יש צורך לחבוש את העין לאחר השימוש במשחה`,
                ans3: `יש לשטוף ידיים לפני ואחרי השימוש במשחה`,
                ans4: `אסור לעצום את העין במשך דקה לאחר השימוש`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מה מטרת התרופה acyclovir?`,
                ans1: `אנטיביוטיקה`,
                ans2: `תרופה שהיא גם אנטיביוטיקה וגם סטירואיד (מדכאת מערכת חיסונית)`,
                ans3: `אנטי פטרייתית`,
                ans4: `אנטי ויראלית`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `חיילת קיבלה מרשם ל VAG TAB clotrimazole , מהי דרך המתן?`,
                ans1: `נר לשימוש רקטלי`,
                ans2: `משחה`,
                ans3: `וגינלי`,
                ans4: `כמוסה לבליעה`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מה נדריך חיילת בנוגע לשימוש ב VAG TAB clotrimazole?`,
                ans1: `להימנע מקיום יחסי מין במהלך הטיפול `,
                ans2: `מותר להפסיק את הטיפול באמצע אם התסמינים פוחתים`,
                ans3: `אין להתמיד בטיפול גם בזמן דימום וסת (מחזור)`,
                ans4: `ליטול אחרי ארוחה בלבד על בטן מלאה`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מתי אסור למרוח mupirocin (bactroban)?`,
                ans1: `אלרגיה לתרופה`,
                ans2: `מתחת לגיל 18`,
                ans3: `תשובות א + ד נכונות`,
                ans4: `פצעים פתוחים נרחבים \ כוויות נרחבות.`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מה מטרת התרופה undecyl?`,
                ans1: `משחה לטיפול \ מניעה של פטרת בכפות הרגליים`,
                ans2: `אבקה לטיפול \ מניעה של פטרת בכפות הרגליים`,
                ans3: `אבקה לטיפול \ מניעה של פטריות במפשעה ובקרקפת`,
                ans4: `טיפול "בפטריית שמש"`,
                correctAns: `ans2`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: `מה היא ההשפעה של התרופה Sedural?`,
                ans1: `אנטי פטרייטי בדרכי השתן `,
                ans2: `אנטיביוטיקה נגד דלקת בדרכי השתן`,
                ans3: `אלחוש איזור דרכי השתן`,
                ans4: `מרפה את שרירי איזור דרכי השתן `,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מה הוא מנגנון הפעולה של Ahiston?`,
                ans1: `דילול ליחה`,
                ans2: `אנטי היסטמין `,
                ans3: `אנטוביוטיקה `,
                ans4: `אנטי פטרייתי`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מהו דגש למתן ?Ibuprofen`,
                ans1: `אין ליטול לפני פעילות הדורשת ערנות`,
                ans2: `יש ליטול לפני השינה`,
                ans3: `יש לקחת על קיבה מלאה`,
                ans4: `יש להרבות בשתיה לאחר נטילה `,
                correctAns: `ans3`
            },
        ],
        "amountOfQuestions": 1,
    },
    // מחלות כרוניות
    "chronicDiseases": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: `מהי תפוקת הלב?`,
                ans1: `קצב לב X נפח פעימה`,
                ans2: `קצב לב X קוטר כלי דם`,
                ans3: `נפח פעימה X לחץ דם`,
                ans4: `קוטר כלי הדם X נפח פעימה`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מהם שלושת הגורמים העיקריים המשפיעים על לחץ דם?`,
                ans1: `נפח כלי הדם, תפוקת הלב, קוטר כלי הדם`,
                ans2: `נפח הדם, קוטר כלי הדם, עוצמת ההתכווצות של הלב`,
                ans3: `קצב הלב, עוצמת ההתכווצות של הלב, קוטר כלי הדם`,
                ans4: `קצב הלב, תפוקת הלב, נפח דם`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `איזה סוג תרופת הורדת לחץ דם תוריד את נפח הדם?`,
                ans1: `תרופות משתנות`,
                ans2: `תרופות מאטות קצב לב`,
                ans3: `תרופות שמחלישות את פעילות הלב`,
                ans4: `תרופות מרחיבות קוטר כלי דם`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מה מהבאים יוריד את תפוקת הלב?`,
                ans1: `תרופה משתנת`,
                ans2: `החלשת עוצמת הפעימה`,
                ans3: `הרחבת כלי הדם`,
                ans4: `הרחבת סמפונות`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `איזה סוג תרופה מורידה את תפוקת הלב?`,
                ans1: `תרופה משתנת`,
                ans2: `תרופה שמאטה את קצב הלב`,
                ans3: `תרופה שמרחיבה את כלי הדם`,
                ans4: `תרופה שמרפה שרירים`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מהן ההתוויות ל amlodipine?`,
                ans1: `ייתר לחץ דם, תעוקת חזה`,
                ans2: `ירידת לחץ דם, בצקת ריאות`,
                ans3: `קושי בנשימה, אסטמה`,
                ans4: `הקאות ובחילות`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מהן תופעות הלוואי העיקריות של התרופות amlodipine teva  ו- Norvasc?`,
                ans1: `ירידה בלחץ דם המתבטאת בסחרחורת, טכיקרדיה ועוד`,
                ans2: `קוצר נשימה הנובע מהתכווצות סמפונות`,
                ans3: `תחושת פלפיטציות (הרגשה של דפיקות לב חזקות במנוחה)`,
                ans4: `ידירה בספיגת הסידן במערכת העיכול`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מהו מנגנון הפעולה של enaladex (enalapril)?`,
                ans1: `מרחיב כלי דם ומגביר הפרשת נוזלים ומלחים בשתן.`,
                ans2: `מוריד את קצב הלב ועוצמת הפעימה`,
                ans3: `משתן ומוריד את תפוקת הלב`,
                ans4: `הרחבת כלי דם וסמפונות`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מהן ההתוויות למתן enaladex (enalapril)?`,
                ans1: `אנמיה חרמשית`,
                ans2: `סוכרת מסוג ll`,
                ans3: `יתר שומנים בדם`,
                ans4: `אי ספיקת לב`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מהן התוויות הנגד של התרופה hydrochlorothiazide?`,
                ans1: `אלרגיה לתרופה והיעדר מתן שתן (פחות מ50 מ"ל ליממה)`,
                ans2: `לחץ דם גבוה ואי ספיקת כליות`,
                ans3: `אלרגיה לבוטנים ואגוזים, בצקות פריפריות`,
                ans4: `מטופל נוטל תרופות אנטי אפילפטיות`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מהן התוויות הנגד לתרופה enaladex (enalapril)?`,
                ans1: `אלרגיה לתרופה ואי ספיקת כליות`,
                ans2: `לחץ דם גבוה`,
                ans3: `כיב קיבה או חסימת מעיים`,
                ans4: `מחסור בהורמון G6PD `,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `כיצד תנחה מטופל ליטול disothiazide?`,
                ans1: `לשתות לפחות 12 כוסות מים ביום כדי למנוע התייבשות`,
                ans2: `להמנע מחשיפה ממושכת לשמש ללא אמצעי הגנה`,
                ans3: `להפסיק את השימוש במידה ומתחילות סחרחורות`,
                ans4: `להמנע מאכילה או שתייה מתוקים`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מהן תופעות הלוואי של simvastatin?`,
                ans1: `פירוק רקמת שריר ופגיעה בכליות וכבד`,
                ans2: `ירידה בראיה או ראיה כפולה`,
                ans3: `סחרחורות כאב ראש ונטייה להתעלף`,
                ans4: `כאבי שרירים ורגישות מוגברת לאור`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `כיצד תדריך מטופל לפני נטילת התרופה simvacor?`,
                ans1: `בבוקר לפני הארוחה על קיבה ריקה`,
                ans2: `יחד עם הארוחה הגדולה ביותר ביום כי כולסטרול מיותר ביותר אחרי אכילה`,
                ans3: `לקחת בערב, בגלל שכולסטרול מיותר ביותר במהלך הלילה`,
                ans4: `הפרש של שעתיים מכל תרופה אחרת`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מהן התוויות הנגד לנטילת כדורי ברזל מסוג ferrocal?`,
                ans1: `כיב קיבה או חסימת מעיים`,
                ans2: `מחסור באנזים G6PD `,
                ans3: `תפקוד כבד או כליות לקוי`,
                ans4: `דרמטיטיס כרוני`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `כיצד תדריך מטופל ליטול ferrous calcium citrate?`,
                ans1: `מומלץ ליטול יחד עם מיצי פירות העשירים בוויטמין C`,
                ans2: `ליטול בנפרד מתרופות להורדת לחץ דם`,
                ans3: `ליטול רבע שעה טרם ארוחת הבוקר`,
                ans4: `ליטול אחרי ארוחת הערב ולפני שינה`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מה מהבאים אסור בעת נטילת ferrous calcium citrate?`,
                ans1: `אסור ליטול את התרופה יחד עם ארוחה`,
                ans2: `אסור לאכול יחד עם מוצרי חלב (שעתיים בין לבין לפחות)`,
                ans3: `אסור לבצע פעילות ספורטיבית שעה טרם הנטילה לפחות`,
                ans4: `אין לאכול תרד לאורך כל תקופת הנטילה`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מהו המוגלובין?`,
                ans1: `החלבון אשר נושא חמצן בדם`,
                ans2: `החלבון אשר נושא את הגלוקוז (סוכר) בדם`,
                ans3: `החלבון אשר אחראי על חומציות בדם`,
                ans4: `החלבון אשר אחראי על הפעלת המערכת החיסונית בדם`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `איזה סוג תרופה יש להדריך מטופל לא ליטול יחד עם folic acid`,
                ans1: `תרופות נוגדות חומצה`,
                ans2: `תרופות להורדת לחץ דם`,
                ans3: `תרופות להורדת שומנים בדם`,
                ans4: `תרופות משככות כאב`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מהו השם המסחרי של התרופה acetylsalicylic acid?`,
                ans1: `אקמול`,
                ans2: `אדוויל`,
                ans3: `אופטלגין`,
                ans4: `אספירין`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מה מהבאות היא התווית נגד למתן acetylsalicylic acid?`,
                ans1: `כיב קיבה פעיל`,
                ans2: `דלקות פרקים כרוניות`,
                ans3: `רגישות לגלוטן`,
                ans4: `חסך בהורמון TSH`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `למי לא תנפק אספירין?`,
                ans1: `למטופל הסובל מצואה דמית `,
                ans2: `מטופל עם כשל כלייתי כרוני`,
                ans3: `מטופל עם בעיות בבלוטת התריס`,
                ans4: `מטופל עם חשד לפריצת דיסק`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מה מהבאות הינן תופעות לוואי של התרופה אספירין?`,
                ans1: `אי ספיקת כליות כרונית`,
                ans2: `ירידה זמנית בחוש הטעם והריח`,
                ans3: `הפרעות בקצב הלב ומאזן המלחים`,
                ans4: `סחרחורות ובחילות`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מתי על המטופל להפסיק את הטיפול ב acetylsalicylic acid?`,
                ans1: `חודש לכול היותר מתחילת הטיפול`,
                ans2: `ככלל, אין להפסיק את הטיפול ללא הנחייה רפואית`,
                ans3: `לאחר כשלושה חודשים ובהתאם למעכב`,
                ans4: `הטיפול באספירין אינו חובה ולכן נתון להחלטת המטופל`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מהי צורת הנטילה של simvastatin?`,
                ans1: `בבליעה בלבד`,
                ans2: `בלעיסה`,
                ans3: `אבקה במים`,
                ans4: `במציצה`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מה יש להדריך מטופל לעשות במהלך הטיפול בתרופה Norvasc?`,
                ans1: `לבצע מעקב עצמי אחר לחץ הדם`,
                ans2: `לצרוך אוכל עתיר במלחים`,
                ans3: `להקפיד על שתייה של לפחות 12 כוסות מים ביום`,
                ans4: `להגיע למעקב אצל רופא כל חודש`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מתי תנחה את המטופל ליטול hydrochlorothiazide (disothiazide)`,
                ans1: `בבוקר או צהריים על מנת להמנע מצורך לרוקן שתן בלילה`,
                ans2: `על בטן ריקה לחלוטין בבוקר על מנת למנוע היווצרות כיב קיבה`,
                ans3: `ליטול לפני שינה`,
                ans4: `אין הנחייה ספציפית לנטילת התרופה`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מה מהבאות היא תופעת לוואי עיקרית בנטילת disothiazide?`,
                ans1: `פגיעה בכבד שדורשת איזון תרופתי`,
                ans2: `כאביי ראש מגרנתיים וסחרחורות`,
                ans3: `עצירות ושינויים בצבע הצואה`,
                ans4: `אי ספיקת כליות והפרעה במאזן המלחים`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מהי מהבאים הינה התווית נגד למתן simvastatin?`,
                ans1: `תפקוד כליות לקוי`,
                ans2: `אנמיה המטופלת ב ferrocal`,
                ans3: `הפרעה בתפקודי כבד`,
                ans4: `לחץ דם נמוך כרוני`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מהי מטרת הטיפול ב folic acid?`,
                ans1: `תוסף תזונתי`,
                ans2: `מניעת מומים מולדים (טיפול בזמן הריון)`,
                ans3: `טיפול באנמיה`,
                ans4: `כל התשובות נכונות`,
                correctAns: `ans4`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: `מה תגיד לחייל לפני ניפוק התרופה Allergyx?`,
                ans1: `אין ליטול לפני פעילות הדורשת ערנות כמו נהיגה`,
                ans2: `יש ליטול לפני השינה `,
                ans3: `יש לקחת על קיבה מלאה `,
                ans4: `יש להרבות בשתיה לאחר נטילה`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מתי מטרת התרופה Lyteers?`,
                ans1: `מניעת שלשולים`,
                ans2: `משחה לטיפול בזיהומי עור`,
                ans3: `אלחוש בדרכי השתן`,
                ans4: `טיפות לסיכוך, במקרה של יובש בעיניים`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `כיצד יש לתת את התרופה Abitren?`,
                ans1: `נר`,
                ans2: `אינהלציה`,
                ans3: `זריקה IM בישבן `,
                ans4: `לעיסה`,
                correctAns: `ans3`
            },
        ],
        "amountOfQuestions": 1
    },
    // עיכול
    "digestion": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: `מה עלול להגרם כתוצאה מצרבת?`,
                ans1: `נזק לושט`,
                ans2: `נזר למעי`,
                ans3: `נזר לקיבה`,
                ans4: `נזק ללבלב`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `באיזה מהמקרים הבאים לא ידרש מתן סותרי חומצה`,
                ans1: `צרבת`,
                ans2: `חומציות יתר בקיבה`,
                ans3: `שתן חומצי`,
                ans4: `כיבים ודלקות בקיבה ובתריסריון`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מהו מנגנון הפעולה של התרופה omepra?`,
                ans1: `חומר סותר חומציות ההופך את תוכן הקיבה לבסיסי`,
                ans2: `עיכוב הפרשת חומצה בקיבה`,
                ans3: `עידוד פעולת העיכול של תוכן הקיבה`,
                ans4: `שיכוך כאבים במערכת העיכול`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `לאיזה קבוצה שייכת התרופה omepradex?`,
                ans1: `נוגדי הקאות`,
                ans2: `משלשלים`,
                ans3: `נוגדי שלשול`,
                ans4: `סותרי חומצה`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מהן ההנחיות לנטילת התרופה omepra?`,
                ans1: `אין ללעוס או לרסק את הטבליות`,
                ans2: `יש ללעוס את הטבליה`,
                ans3: `יש לקחת כחצי שעה עד שעה לאחר ארוחה`,
                ans4: `יש לקחת לאחר צום של שעתיים לפחות`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מה מהבאים בסמכות חובש?`,
                ans1: `Omepra`,
                ans2: `Rennie`,
                ans3: `Metoclopramide`,
                ans4: `Laxadin`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מהם החומרים הפעילים בתרופה rennie?`,
                ans1: `Calcium`,
                ans2: `Potassium`,
                ans3: `Natran`,
                ans4: `Sodum`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `לאיזה קבוצה שייכת התרופה rennie?`,
                ans1: `נוגדי הקאות`,
                ans2: `משלשלים`,
                ans3: `נוגדי שלשול`,
                ans4: `סותרי חומצה`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מהו מנגנון הפעולה של התרופה rennie?`,
                ans1: `סותר חומציות בקיבה`,
                ans2: `מעודד פעולת עיכול`,
                ans3: `מוריד פרסטלטיקה`,
                ans4: `משכך כאבים בושט`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `כיצד יש ליטול rennie?`,
                ans1: `בבליעה`,
                ans2: `בלעיסה`,
                ans3: `בריסוס`,
                ans4: `במציצה`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מה מהבאים אינו מנגנון פעולה של נוגדי הקאה?`,
                ans1: `הגברת התנועתיות וריקון מהיר של הקיבה`,
                ans2: `הגברת הפרשת הורמונים מהלבלב `,
                ans3: `כיווץ השסתום התחתון בוושט (בין הוושט לקיבה)`,
                ans4: `חסימת קולטנים במרכז ההקאה במוח`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מהו החומר הפעיל בתרופה pramin?`,
                ans1: `Metoclopramide`,
                ans2: `Omeprazole`,
                ans3: `Bisacodyl`,
                ans4: `Loperamide`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מה מהבאים אסור ליטול במקביל לשתיית אלכוהול?`,
                ans1: `Omepra`,
                ans2: `Laxadin`,
                ans3: `Pramin`,
                ans4: `Paraffin`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מתי יש לקחת את התרופה pramin?`,
                ans1: `חצי שעה לפני ארוחה`,
                ans2: `חצי שעה אחרי ארוחה`,
                ans3: `בבוקר`,
                ans4: `לפני פעילות`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `באיזה מהבאים לא ניתן pramin?`,
                ans1: `מטופל אשר סבל בעבר מעצירות`,
                ans2: `מטופל הסובל מאצירת שתן`,
                ans3: `מטופל עם הקאות דמיות`,
                ans4: `מטופל עם הקאות כרוניות`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מהם מנגנוני הפעולה של תרופות משלשלות?`,
                ans1: `עידוד פעילות כבד`,
                ans2: `האצת ריקון מערכת העיכול התחתונה`,
                ans3: `האצת ריקון הקיבה`,
                ans4: `האצת פעילות לבלב`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מה החומר הפעיל בתרופה laxadin`,
                ans1: `Bisacodyl`,
                ans2: `Laxadin`,
                ans3: `Omepra`,
                ans4: `Metoclopramide`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מהו מנגנון הפעולה של התרופה laxadin?`,
                ans1: `האצת פרסטלטיקה בקיבה`,
                ans2: `האצת ספיגה בקיבה`,
                ans3: `האצת תנועתיות במעי דק`,
                ans4: `האצת תנועתיות במעי גס`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מה מהבאים אין לקחת סמוך לנטילת התרופה laxadin?`,
                ans1: `אלכוהול`,
                ans2: `תרופות בליעה אחרות`,
                ans3: `חלב`,
                ans4: `תרופות המשפיעות על מערכת העיכול`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `לאיזה קבוצה שייכת התרופה bisacodyl?`,
                ans1: `נוגדי חומצה`,
                ans2: `משלשלים`,
                ans3: `נוגדי שלשול`,
                ans4: `נוגדי הקאה`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מהו מנגנון הפעולה שת התרופה paraffin?`,
                ans1: `מעודד ספיחת נוזלים מהמעי`,
                ans2: `מונע ספיחת נוזלים מהמעי הגס לזרם הדם`,
                ans3: `מעודד פרסטלטיקה במעיים`,
                ans4: `מעודד ספיחת נוזלים בקיבה`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `כמה זמן ברצף מותר ליטול paraffin  (זמן מקסימלי)?`,
                ans1: `4 ימים`,
                ans2: `5 ימים`,
                ans3: `שבוע`,
                ans4: `שבועיים`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `כמה מנות של התרופה paraffin ניתן לקחת ביום?`,
                ans1: `3 `,
                ans2: `4`,
                ans3: `2`,
                ans4: `5`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `כמה זמן יש לחכות לפני מתן צואה לאחר החדרת fleet enema?`,
                ans1: `10-20 דקות`,
                ans2: `20-30 דקות`,
                ans3: `כשעה`,
                ans4: `5-10 דקות`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מה החומר הפעיל בתרופה stopit?`,
                ans1: `Loperamide`,
                ans2: `Laxadin`,
                ans3: `Metoclopramide`,
                ans4: `Bisacodyl`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מה יש להדגיש למטופל לפני נטילת התרופה Stopit ?`,
                ans1: `אין ליטול לפני שינה`,
                ans2: `אין ליטול לפני פעילויות הדורשות ערנות`,
                ans3: `יש ליטול על בטן ריקה`,
                ans4: `יש ליטול 2 כדורים בהתחלה, ועוד אחד לאחר שלשול נוסף`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מהו מנגנון התרופה papaverine?`,
                ans1: `כיווץ שריר חלק ברקטום`,
                ans2: `עידוד ספיחת נוזלים במעי`,
                ans3: `הרפיית שרירים במערכת העיכול`,
                ans4: `מניעת חומציות במעי`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מה מנגנון הפעולה של התרופה rectozorin?`,
                ans1: `שיכוך כאבים מקומי`,
                ans2: `הגברת תנועתיות במעיים`,
                ans3: `הרפיית המעיים`,
                ans4: `שיכוך כאבים בדרכי העיכול`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `תי יש למרוח את התרופה rectozorin?`,
                ans1: `כל בוקר`,
                ans2: `כל ערב`,
                ans3: `כל בוקר וערב `,
                ans4: `לפני כל מתן צואה`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מתי יש להפסיק למרוח את התרופה rectozorin ולפנות לרופא?`,
                ans1: `במידה ואין שיפור לאחר 10 ימים`,
                ans2: `המידה ומתחיל גרד`,
                ans3: `במידה ומתחיל דימום`,
                ans4: `במידה ואין שיפור לאחר 5 ימים`,
                correctAns: `ans3`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: `מה נכון לגבי Papaverine?`,
                ans1: `יש לקחת על בטן מלאה`,
                ans2: `עלולה לגרום לירידת לחץ דם וסחרחורות`,
                ans3: `יש ליטול לפני השינה כיוון שעלולה לגרום לישנוניות`,
                ans4: `יש ליטול את התרופה בבוקר`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `כיצד יש לתת את התרופה Pink-Bismut?`,
                ans1: `נר `,
                ans2: `לעיסה `,
                ans3: `אינהלציה `,
                ans4: `זריקה ישיבה`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מה ההבדל בין Synthomycine 5% לבין Synthomycine 3%?`,
                ans1: `5% נועד לדלקות עיניים, 3% נועד לזיהומים בעור`,
                ans2: `5% מגיע בצורת משחה, 3% מגיע בצורת כדורים לבליעה`,
                ans3: `5% מגיע בצורת משחה, 3% מגיע בצורך סירופ`,
                ans4: `אין הבדלים`,
                correctAns: `ans1`
            },
        ],
        "amountOfQuestions": 1
    },
    // משככי כאבים
    "painkillers": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: `מה אין לעשות בעת נטילת התרופה exidol?`,
                ans1: `לעשן `,
                ans2: `לשתות אלכוהול`,
                ans3: `לבצע פעילות ספורטיבית`,
                ans4: `לאכול`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מהו החומר הפעיל של התרופה dexamol`,
                ans1: `dipyrone`,
                ans2: `acamol`,
                ans3: `paracetamol`,
                ans4: `nurofen`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `איזה מהתרופות הבאות לא ניתן למטופל עם בעיות בתפקודי כבד?`,
                ans1: `Optalgin`,
                ans2: `Acamol`,
                ans3: `Ibuprofen`,
                ans4: `Artofen`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מה החומר הפעיל בתרופה ששמה optalgin ?`,
                ans1: ` Paracetamol`,
                ans2: `Exidol`,
                ans3: `Dipyrone`,
                ans4: `Ibuprofen`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `איזה מהתרופות הבאות לא ניתן למטופל עם דיכוי מח עצם?`,
                ans1: ` Optalgin`,
                ans2: ` Acamol`,
                ans3: ` Ibuprofen`,
                ans4: ` Atofen`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `לתרופות ממשפחת ה NSAIDs כמו Ibufen בנוסף לשיכוך כאב תהיה השפעה של_____`,
                ans1: `הרפיית שרירים`,
                ans2: `הרגעה`,
                ans3: `נוגד דלקת`,
                ans4: `עידוד מע' חיסונית`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מהו מנגנון הפעולה של תרופות ממשפחת ה NSAIDs ?`,
                ans1: `עיכוב תהליכיי דלקת`,
                ans2: `הרפיית שרירים`,
                ans3: `הרגעה של המטופל`,
                ans4: `מנגנון לא ידוע`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `לאיזה משפחה שייכת התרופה  ibuprofen?`,
                ans1: `שיכוך כאבים כללי`,
                ans2: `שיכוך כאבים אנטי דלקתי`,
                ans3: `שיכוך כאבים מרפה שרירים`,
                ans4: `שיכוך כאבים ממנגנון לא ידוע`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מה הוא שמו של החומר הפעיל בתרופה artofen?`,
                ans1: `Paracetamol`,
                ans2: `Dipyrone`,
                ans3: `Ibufen`,
                ans4: `ibuprofen`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מתי אסור לתת את התרופה ibufen ?`,
                ans1: `לאחר עישון`,
                ans2: `לפני עישון`,
                ans3: `בעיות בתפקודי כבד`,
                ans4: `כיב קיבה פעיל`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מה מהבאים אינו בסמכות חובש?`,
                ans1: `optalgin`,
                ans2: `ibufen`,
                ans3: `lemosin`,
                ans4: `deep heat`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מתי מומלץ לקחת כדור ibufen ?`,
                ans1: `לפני ארוחה`,
                ans2: `אחרי ארוחה`,
                ans3: `לאחר צום של שעתיים`,
                ans4: `לא משנה`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מה מהבאים הינה תופעת לוואי של ibufen ?`,
                ans1: `כאב ראש`,
                ans2: `חולשה כללית`,
                ans3: `בחילות והקאות`,
                ans4: `כאבי בטן`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מהו מנגנון הפעולה של התרופה muscol ? `,
                ans1: `אנטי דלקתי`,
                ans2: `הרגעה`,
                ans3: `לא ידוע`,
                ans4: `הרפיית שרירים`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מה מהבאים אסור לעשות בעת נטילת התרופה muscol ?`,
                ans1: `שתיית אלכוהול`,
                ans2: `עישון`,
                ans3: `נטילת תרופות P.O. אחרות`,
                ans4: `ללכת לישון`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `איזה תרופות אסור ליטול עם התרופה muscol ?`,
                ans1: `תרופות המכילות ibuprofen`,
                ans2: `תרופות המכילות paracetamol`,
                ans3: `תרופות המכילות dipyrone`,
                ans4: `תרופות המכילות phenazopyridine`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מתי אסור לקחת את התרופה muscol?`,
                ans1: `לפני שינה`,
                ans2: `לפני אוכל`,
                ans3: `אחרי אוכל`,
                ans4: `לפני פעילות הדורשת ערנות`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `כמה פעמים ביום ניתן למרוח deep heat / radian b?`,
                ans1: `2-3 פעמים`,
                ans2: `3-4 פעמים`,
                ans3: `4-5 פעמים`,
                ans4: `5-6 פעמים`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מה החומר הפעיל בתרופה sedural?`,
                ans1: `Ibuprofen`,
                ans2: `Dipyrone`,
                ans3: `Phenazopyridine`,
                ans4: `Benzocaine`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מה היא מטרתה של התרופה sedural?`,
                ans1: `שיכוך כאבי ראש`,
                ans2: `שיכוך כאבים בבטן`,
                ans3: `שיכוך כאבי פרקים`,
                ans4: `שיכוך כאבים בדרכי שתן`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מהי תופעת הלוואי העיקרית של התרופה sedural ?`,
                ans1: `צביעת נוזלי הגוף בגוון כתום`,
                ans2: `עייפות `,
                ans3: `בחילות והקאות`,
                ans4: `חוסר מתן שתן`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מהי הנחיה שיש לתת למטופל בעת ניפוק sedural?`,
                ans1: `להיות קרוב לשירותים`,
                ans2: `לא לאכול מאכלים המכילים קיטניות`,
                ans3: `להרבות בשתיית מים`,
                ans4: `ליטות את התרופה לפני שינה`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מה מטרת התרופה lemosin?`,
                ans1: `שיכוך כאבי גרון`,
                ans2: `שיכוך כאבי ראש`,
                ans3: `שיכוך כאבים בדרכי השתן`,
                ans4: `שיכוך כאבי בטן`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מה יש לומר למטופל לפני ניפוק התרופה lemosin?`,
                ans1: `יש ליטול על בטן מלאה`,
                ans2: `יש למצוץ אץ הכדור`,
                ans3: `יש לרסס פעמיים לפה `,
                ans4: `יש ללעוס את הטבליה`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מה החומר הפעיל בתרופה kalbeten?`,
                ans1: `Phenazopyridine`,
                ans2: `Benzocaine`,
                ans3: `Bismuth subsalicylate`,
                ans4: `Phenazone`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מה מטרת התרופה kalbeten?`,
                ans1: `הפחתת כאבי בטן ושלשולים`,
                ans2: `הפחתת צרבות`,
                ans3: `כאבי עצירות`,
                ans4: `הפחתת הקאות`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `כל כמה שעות (לכל היותר) מותר ליטול Kalbeten?`,
                ans1: `שעתיים `,
                ans2: `שלוש שעות`,
                ans3: `ארבע שעות`,
                ans4: `חמש שעות`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מה מטרת התרופה otidin?`,
                ans1: `שיכוך כאבי גרון`,
                ans2: `שיכוך כאבי בטן`,
                ans3: `שיכוך כאבי עניים`,
                ans4: `שיכוך כאבי אוזניים`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `כל כמה זמן ניתן לטפטף טיפת otidin?`,
                ans1: `שעה`,
                ans2: `שעתיים`,
                ans3: `שלוש שעות`,
                ans4: `ארבע שעות`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `אין ליטול את התרופה otidin ברצף יותר מ_____ ימים.`,
                ans1: `1-2`,
                ans2: `2-3`,
                ans3: `3-4`,
                ans4: `4-5`,
                correctAns: `ans2`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: `כיצד יש להדריך חייל עם מרשם לתרופה Tevacutan?`,
                ans1: `יש ליטול את התרופה במרווחי זמן שווים `,
                ans2: `אין למרוח את המשחה על פצע פתוח`,
                ans3: `אין למרוח את המשחה באיזור עם עור רגיש, כמו בית שחי `,
                ans4: `יש ליטול את התרופה עד אשר הפצע או הנגע מחלימים`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `איפה יש למרוח משחת Rectozorin?`,
                ans1: `שפתיים`,
                ans2: `כפות ידיים`,
                ans3: `על פצעונים `,
                ans4: `פי הטבעת `,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `כיצד יש להדריך חייל עם מרשם לתרופה Ceforal? `,
                ans1: `יש ליטול על קיבה ריקה `,
                ans2: `אין ליטול לפני פעילות הדורשת ערנות `,
                ans3: `אין ליטול במידה וידועה אלרגיה לסויה `,
                ans4: `בשילוב עם גלולות למניעת הריון מומלץ להשתמש באמצעי מניעה נוסף`,
                correctAns: `ans4`
            },
        ],
        "amountOfQuestions": 1
    },
    // נשימה
    "breathing": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: `השם המסחרי של Salbutamol הוא:`,
                ans1: `Penicilin`,
                ans2: `Ibuprofin`,
                ans3: `Dactarin`,
                ans4: `Ventolin`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `השם המסחרי של Ipratropium Bromide הוא:`,
                ans1: `Antipyridine`,
                ans2: `Benzocaine`,
                ans3: `Aerovent`,
                ans4: `Ofloxacin`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `השם המסחרי של Budesonide הוא:`,
                ans1: `Mupirocin`,
                ans2: `Budicort`,
                ans3: `Omeprazole`,
                ans4: `Simvastatin`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `השם המסחרי של Bromhexine הוא:`,
                ans1: `Movex`,
                ans2: `Bactorban`,
                ans3: `Doxylin`,
                ans4: `Agisten`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `פעילות התרופה Bromhexine הוא:`,
                ans1: `הרחבת סימפונות`,
                ans2: `דילול הפרשות בדרכי נשימה`,
                ans3: `הגדלת נפח נשימה`,
                ans4: `הגברת קצב נשימה`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `פעילות התרופה Salbutamol הוא:`,
                ans1: `הרחבת סימפונות`,
                ans2: `דילול הפרשות בדרכי נשימה`,
                ans3: `טיפול ומניעה להתקפי אסטמה`,
                ans4: `הגברת קצב נשימה`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `פעילות התרופה Budesonide הוא:`,
                ans1: `הרחבת סימפונות`,
                ans2: `דילול הפרשות בדרכי נשימה`,
                ans3: `הגדלת נפח נשימה`,
                ans4: `טיפול מניעתי (כרוני) לחולי אסטמה`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `התווית נגד ל-Salbutamol  הינו:`,
                ans1: `טאכיקרדיה`,
                ans2: `רעד בידיים`,
                ans3: `אלרגיה לתרופה`,
                ans4: `ברנכוספאזם פרדוקסלי`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `אחת ההתווית נגד ל-Budesonide  הינו:`,
                ans1: `טאכיקרדיה`,
                ans2: `יובש וזיהום פטרייתי בפה`,
                ans3: `אלרגיה לחלבוני חלב`,
                ans4: `ברנכוספאזם פרדוקסלי`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `התווית נגד ל-Bromhexine  הינו:`,
                ans1: `בחילות וכאבי בטן`,
                ans2: `רעד בידיים`,
                ans3: `אלרגיה לתרופה`,
                ans4: `ברנכוספאזם פרדוקסלי`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מה מהבאים אינו מטרת הטיפול תקן 15 בבעיות נשימה:`,
                ans1: `הרחבת דרכי נשימה`,
                ans2: `דיכוי דלקת בדרכי נשימה`,
                ans3: `הגברת קצב הנשימה`,
                ans4: `טיפול בתסמינים נשימתיים`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מהו מנגנון הפעולה של תרופות המרחיבות את דרכי הנשימה?`,
                ans1: `מגביר כניסת אוויר לדרכי הנשימה ובכך מרחיב אותם`,
                ans2: `גורם להתרחבות הריאות בזמן נשימה`,
                ans3: `מרחיב את דרכי האוויר על ידי הרפיית השרירים סביבם`,
                ans4: `מרפה את הסרעפת ובכך מרפה את כל מערכת הנשימה`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מהו מנגנון הפעולה של תרופות מקבוצת הסטרואידים בטיפול בבעיות נשימה?`,
                ans1: `זירוז תהליכים בגוף`,
                ans2: `דיכוי פעילות מערכת החיסון`,
                ans3: `הגברת נשימה`,
                ans4: `דיכוי נשימה`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מהם סטרואידים?`,
                ans1: `אנזים המופרש מבלוטת יותרת הכליה`,
                ans2: `הורמון המופרש מבלוטת יותרת הכליה`,
                ans3: `אנזים המופרש מבלוטת יותרת המוח`,
                ans4: `הורמון המופרש מבלוטת יותרת המוח`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `באיזה עוד מצבים נותנים סטרואידים?`,
                ans1: `החייאה`,
                ans2: `תגובה אלרגית`,
                ans3: `הלם המורגי`,
                ans4: `פרכוסים`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מה מהבאים הוא הדרכה למטופל ב-Salbutamol?`,
                ans1: `אם המטופל משתמש במספר משאפים-להמתין 2 דקות בין משאף למשאף`,
                ans2: `להימנע ממגע עם העניים`,
                ans3: `שטיפת פה אחרי שימוש במשאף`,
                ans4: `התרופה לא נועדה לשימוש ממושך`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מה מהבאים הוא הדרכה למטופל ב-Ipratropium Bromide?`,
                ans1: `שיפור משמעותי נצפה רק אחרי  1-2 שבועות מתחילת הטיפול`,
                ans2: `להימנע ממגע עם העניים`,
                ans3: `שטיפת פה אחרי שימוש במשאף`,
                ans4: `התרופה לא נועדה לשימוש ממושך`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מה מהבאים הוא הדרכה למטופל ב-Budesonide?`,
                ans1: `אם המטופל משתמש במספר משאפים-להמתין 2 דקות בין משאף למשאף`,
                ans2: `להימנע ממגע עם העניים`,
                ans3: `שטיפת פה אחרי שימוש במשאף`,
                ans4: `התרופה לא נועדה לשימוש ממושך`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מה מהבאים הוא הדרכה למטופל ב-Bromhexine?`,
                ans1: `אם המטופל משתמש במספר משאפים-להמתין 2 דקות בין משאף למשאף`,
                ans2: `להימנע ממגע עם העניים`,
                ans3: `שטיפת פה אחרי שימוש במשאף`,
                ans4: `התרופה לא נועדה לשימוש ממושך`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `באיזו דרך מתן יש לתת Salbutamol?`,
                ans1: `משחה`,
                ans2: `אינהלציה/משאף`,
                ans3: `דרך השריר `,
                ans4: `מתן פומי`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מה אינה התוויה למתן Ipratropium Bromide?`,
                ans1: `שיעולים`,
                ans2: `אסטמה `,
                ans3: `COPD (מחלת ריאות כרונית)`,
                ans4: `נזלת `,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מה מהבאים הוא תופעת לוואי עיקרית ל-Budesonide?`,
                ans1: `רעד בידיים`,
                ans2: `טשטוש ראיה (במגע עם העיניים)`,
                ans3: `יובש וזיהום פטרייתי בפה`,
                ans4: `בחילות וכאבי בטן`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מה מהבאים הוא תופעת לוואי עיקרית ל-Bromhexine?`,
                ans1: `פריחה מפושטת `,
                ans2: `טאכיקרדיה (העלאה בקצב הלב)`,
                ans3: `יובש וזיהום פטרייתי בפה`,
                ans4: `בחילות וכאבי בטן`,
                correctAns: `ans4`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: `מתי יש לנפק את התרופה Laxadin?`,
                ans1: `עצירות `,
                ans2: `שלשולים`,
                ans3: `כאבי בטן`,
                ans4: `זיהום חיידקי בבטן `,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מהי התוויה נפוצה למתן Rectozorin?`,
                ans1: `צריבות בעת מתן צואה `,
                ans2: `צואה דמית `,
                ans3: `טחורים `,
                ans4: `גירוד בפי הטבעת`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מטופל שקיבל מרשם ל- Pramin ככל הנראה סובל מ?`,
                ans1: `שלשולים`,
                ans2: `עצירות`,
                ans3: `נזלת וליחה `,
                ans4: `בחילות והקאות `,
                correctAns: `ans4`
            },
        ],
        "amountOfQuestions": 1
    },
    // תרופות אחרות
    "otherMeds": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: `מהו השם המסחרי של התרופה petroleum?`,
                ans1: `וזלין`,
                ans2: `אקמול`,
                ans3: `אופטלגין`,
                ans4: `קלגרון`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מהו מנגנון הפעולה של התרופה petroleum?`,
                ans1: `שימון ואנטי חיידקי`,
                ans2: `שימון והעלאת קצב לב`,
                ans3: `העלאת קצב לב ועצירת דימום פנימי`,
                ans4: `שימון וסיכוך`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מהן ההתוויות למתן petroleum?`,
                ans1: `יובש בעור ובשפתיים + שפשפת`,
                ans2: `יובש באיבר המין`,
                ans3: `כאבי ראש`,
                ans4: `בחילות והקאות`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מהן התוויות הנגד למתן petroleum?`,
                ans1: `שימוש במרחיבי סימפונות`,
                ans2: `שימוש בסטרואידים`,
                ans3: `אלרגיה`,
                ans4: `נשים בהריון`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מהן תופעות הלוואי העיקריות של petroleum?`,
                ans1: `פלפיטציות (הרגשה של דפיקות לב)`,
                ans2: `תגובה אנאפילקטית`,
                ans3: `גירוי מקומי`,
                ans4: `כאבי ראש`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מהם הוראות המתן לתרופה petroleum?`,
                ans1: `למרוח 8 פעמים ביום`,
                ans2: `למרוח כל 20 דקות`,
                ans3: `למרוח פעם אחת ביום`,
                ans4: `למרוח 4 פעמים ביום`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מה שמה המסחרי של התרופה המכילה zinc oxide + iron oxide?`,
                ans1: `קלגרון`,
                ans2: `וזלין`,
                ans3: `פאפאוורין`,
                ans4: `קלמין`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מהו מנגנון הפעולה של התרופה zinc oxide + iron oxide ?`,
                ans1: `הרחבה של כלי דם`,
                ans2: `הפרשה של חלבונים`,
                ans3: `ייבוש והפחתת גרד, הרגעת עור מגורה`,
                ans4: `קילוף מקומי של האפידרמיס (השכבה העליונה של העור)`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מהן ההתוויות למתן zinc oxide + iron oxide?`,
                ans1: `בחילות והקאות `,
                ans2: `שבר פתוח `,
                ans3: `גירוי ואגינלי`,
                ans4: `גירוי העור על ידיי עקיצות ואלרגיה קלה`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מה מהבאים אינה התווית נגד לתרופה zinc oxide + iron oxide?`,
                ans1: `פצע מזוהם ופתוח`,
                ans2: `חתכים`,
                ans3: `כוויות`,
                ans4: `אלרגיה לדבורים`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `מהו השם המסחרי של התרופה benzocaine + salicylic acid?`,
                ans1: `Noxacorn`,
                ans2: `Lemisil`,
                ans3: `Rafathricin`,
                ans4: `Adenosine`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `מהן תופעות הלוואי העיקריות של  benzocaine + salicylic acid?`,
                ans1: `דימום רטקאלי`,
                ans2: `דימום מהקרנית`,
                ans3: `גרוי מקומי של העור`,
                ans4: `גרוי של ריריות דרכי הנשימה`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `מהן התוויות הנגד ל benzocaine + salicylic acid?`,
                ans1: `נשים בהריון או מניקות`,
                ans2: `בעיות בייצור מח עצם`,
                ans3: `אלרגיה`,
                ans4: `נטילת צרבת X`,
                correctAns: `ans4`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `binary`,
                question: `אין לשלב את התרופה Muscol עם התרופה Acamol`,
                correctAns: true
            },
            {
                type: `binary`,
                question: `אין לשלב נטילת Etopan יחד אלכוהול`,
                correctAns: false
            },
            {
                type: `binary`,
                question: `מומלץ ליטול את התרופה Laxadin לפני השינה`,
                correctAns: true
            },
            {
                type: `binary`,
                question: `יש לקחת Moxypen על בטן ריקה בלבד`,
                correctAns: false
            },
            {
                type: `multiple`,
                question: `מה המנגנונים האפשריים של תרופות להורדת לחץ דם?`,
                ans1: `הגברת קצב לב`,
                ans2: `הגברת ריכוז נתרן בדם`,
                ans3: `הרחבת כלי דם`,
                ans4: `כיווץ כלי דם`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `חייל חולה אסטמה ככל הנראה משתמש בזמן התקף בתרופה:`,
                ans1: `Prednisone`,
                ans2: `Ventolin`,
                ans3: `סינטומצין 5%`,
                ans4: `Movex`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `מה נדריך מטופל שמקבל משאף Budesonide?`,
                ans1: `יש לקחת רק כשיש התקף אסתמה ולא באופן קבוע.`,
                ans2: `התרופה נועדה לטיפול כרוני ממושך.`,
                ans3: `להימנע ממג עם העיניים.`,
                ans4: `לשטוף ידיים אחרי שימוש במשאף.`,
                correctAns: `ans2`
            },
        ],
        "amountOfQuestions": 1
    },
};

// varubals
let currentQuestion = 0;
let nPracticeCorrectAnswer = 0;
let currentTestQuestion = 0;
let nExamCorrectAnswer = 0;
let strClickedPracticeQuestion;
let arrExamQuestions = [];
let arrExamChosenAnswer = [];
let strUserName;
let formerTestQuestion;
let bTimerListener = true;
// timer
let examTimer;
let timerMinutes;
let timerSecondes;
let sec = 0;
// const
const AMOUNT_OF_QUESTION_PRACTICE = 10;
const AMOUNT_OF_QUESTION_EXAM = 15;
const PASSING_GRADE = 50;

/* onClickPractice
--------------------------------------------------------------
Description: */
const onClickPractice  = () => {
    if (currentQuestion === AMOUNT_OF_QUESTION_PRACTICE) {
        endofPractice();
    } else {
        document.querySelector(`.practiceBottomButton`).removeEventListener("click", onClickPracticeCheck);
        strcurrentPage = "practicePage";
        // מעלים מדפים, סמלים בכותרת וכפתורים למטה
        document.querySelector(`.${strCurrentMedType}Shelf`).classList.add("hidden");
        document.querySelector(`.medTypeSymbol`).classList.add("hidden");
        document.querySelector(`.shelfsButtons`).classList.add("hidden");
        // משנה מאפיינים של כותרת
        document.querySelector(`.title`).classList.remove("titleMedShelfs");
        document.querySelector(`.titleConeiner`).classList.add("titleContainerPractice");
        document.querySelector(`.title`).innerHTML = "תרגול";
        // משנה גל וכפתור עליון
        document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/practice/practice-wave.svg");
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
        document.querySelector('.topButton').classList.add("topButtonPractice");
        // מראה דמות ושאלה
        document.querySelector('.practicePage').classList.remove("hidden");
        document.querySelector('.question').innerHTML = QUESTIONS[currentQuestion]["question"];
        // הופך כפתור בדיקה לאפור
        document.querySelector(`.practiceBottomButton`).classList.add("gray");
        // משנה צבע של הריבועי תשובות, מכניס תשובות ושם עליהם מאזין
        for (let i = 1; i <= 4; i++) {
            document.querySelector(`.ans${i} img`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
            document.querySelector(`.ans${i} div`).innerHTML = QUESTIONS[currentQuestion][`ans${i}`];
            document.querySelector(`.ans${i}`).addEventListener("click", onClickAnswer);
        }
    }
}

/* onClickAnswer
--------------------------------------------------------------
Description: */
const onClickAnswer = (event) => {
    // שומר תשובה שנלחצה
    strClickedPracticeQuestion = event.currentTarget.classList[1];
    if (strcurrentPage === "practicePage") {
        // מוריד סימונים קודמים
        for (let i = 1; i <= 4; i++) {
            document.querySelector(`.ans${i} img`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
        }
        // משנה תמונה של תשובה למסומנת
        document.querySelector(`.practiceQuestionSqure${strClickedPracticeQuestion.slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-marked.svg");
        // משנה צבע של כפתור בדיקה ושם עליו מאזין
        document.querySelector(`.practiceBottomButton`).classList.remove("gray");
        document.querySelector(`.practiceBottomButton`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
        document.querySelector(`.practiceBottomButton`).addEventListener("click", onClickPracticeCheck);
    } else if (strcurrentPage !== "reviewTest") {
        // מסמן שענו כבר על השאלה
        document.querySelector(`.answerPill${currentTestQuestion + 1}`).style.backgroundColor = "white";
        if (arrExamQuestions[currentTestQuestion].type === "binary") {
            // מוריד סימנים קודמים
            if (strClickedPracticeQuestion === "true") {
                document.querySelector(`.false`).style.backgroundColor = "white";
            } else {
                document.querySelector(`.true`).style.backgroundColor = "white";
            }
            document.querySelector(`.${strClickedPracticeQuestion}`).style.backgroundColor = "#79bee0bb";
        } else {
            // מוריד סימונים קודמים
            for (let i = 1; i <= 4; i++) {
                document.querySelector(`.examQuestionContainer .ans${i} img`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
            }
            // משנה תמונה של תשובה למסומנת
            document.querySelector(`.examQuestionSqure${strClickedPracticeQuestion.slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-marked.svg");
        }
        arrExamChosenAnswer[currentTestQuestion] = strClickedPracticeQuestion;
       
        // בודק אם כול השאלות נענו
        let bTestComplete = true;
        for (let j = 0; j < AMOUNT_OF_QUESTION_EXAM; j++){
            if (arrExamChosenAnswer[j] === undefined) {
                bTestComplete = false;
            }
        }
        // אם כול השאלות נענו מאפשר כפתור הגש
        if (bTestComplete) {
            // מוריד פילטר מכפתור הגש ושם עליו מאזין
            document.querySelector(`.examSubmit`).classList.remove("gray");
            document.querySelector(`.examSubmit`).addEventListener("click", submitionPopUp);
        } else {
            // שם פילטר מכפתור הגש ומוריד מאזין
            document.querySelector(`.examSubmit`).classList.add("gray");
            document.querySelector(`.examSubmit`).removeEventListener("click", submitionPopUp);
        }
    }
}

/* onClickPracticeCheck
--------------------------------------------------------------
Description: */
const onClickPracticeCheck = () => {
    // בלחיצה על המשך
    if (document.querySelector(`.practiceBottomButton`).getAttribute("src") === "../assets/images/grapics/practice/practice_continue_button.svg") {
        // משנה צבע של כפתור בדיקה
        document.querySelector(`.practiceBottomButton`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        for (let i = 1; i <= 4; i++) {
            document.querySelector(`.ans${i} img`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        }
        // מוריד סימונים מהשאלות
        if (QUESTIONS[currentQuestion][`correctAns`] !== strClickedPracticeQuestion) {
            document.querySelector(`.${strClickedPracticeQuestion} div`).classList.remove("wrongAnswer");
        }
        document.querySelector(`.${QUESTIONS[currentQuestion][`correctAns`]} div`).classList.remove("correctAnswer");
        document.querySelector(`.practiceQuestionSqure${strClickedPracticeQuestion.slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
        // משנה חזרה כפתור בדיקה
        document.querySelector(`.practiceBottomButton`).setAttribute("src", "../assets/images/grapics/practice/check_button.svg");
        // משנה שאלה נוכחית ושולח לפונקציה שיוצרת שאלה
        currentQuestion++;
        onClickPractice();
    } else if (document.querySelector(`.practiceBottomButton`).getAttribute("src") === "../assets/images/grapics/practice/check_button.svg") { //בלחיצה על בדיקה
        // מוריד מאזינים מהתשובות
        // משנה צבע של הריבועי תשובות, מכניס תשובות ושם עליהם מאזין
        for (let i = 1; i <= 4; i++) {
            document.querySelector(`.ans${i}`).removeEventListener("click", onClickAnswer);
        }
        // בודק אם נלחצה תשובה לא נכונה ואם כן מסמן שהיא לא נכונה
        if (QUESTIONS[currentQuestion][`correctAns`] !== strClickedPracticeQuestion) {
            document.querySelector(`.${strClickedPracticeQuestion} div`).classList.add("wrongAnswer");
        } else {
            nPracticeCorrectAnswer++;
        }
        // מסמן תשובה נכונה בירוק
        document.querySelector(`.${QUESTIONS[currentQuestion][`correctAns`]} div`).classList.add("correctAnswer");
        // משנה כפתור בדיקה להמשך 
        document.querySelector(`.practiceBottomButton`).setAttribute("src", "../assets/images/grapics/practice/practice_continue_button.svg");
    } else {
        nPracticeCorrectAnswer = 0;
        currentQuestion = 0;
        creatMedShelfs();
    }
}

/* endofPractice
--------------------------------------------------------------
Description: change hyphen to space */
const endofPractice = () => {
    // מעלים שאלות ומראה תשובות נכונות
    document.querySelector(`.practiceRightAnswersConteiner`).classList.remove("hidden");
    document.querySelector(`.answersContainer`).classList.add("hidden");
    // מכניס טקסט סיום
    document.querySelector('.question').innerHTML ="השלמתם את התרגול בנושא זה. מוזמנים להמשיך לתרגל עם שאלות נוספות או להמשיך למבחן. בהצלחה";
    document.querySelector(`.practiceRightAnswers`).innerHTML = `${nPracticeCorrectAnswer}/${AMOUNT_OF_QUESTION_PRACTICE}`;
    // משנה צבע של חלונית תשובות ושל כפתור סיום
    document.querySelector(`.practiceBottomButton`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    document.querySelector(`.practiceRightAnswersConteiner`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    // מחליף תמונה של כפתור בדיקה לכפתור סיום
    document.querySelector(`.practiceBottomButton`).setAttribute("src", "../assets/images/grapics/practice/endPracticeButton.svg");
}

/* onClickExam
--------------------------------------------------------------
Description: */
const onClickExam = () => {
    // מאפס משתנים
    currentTestQuestion = 0;
    nExamCorrectAnswer = 0;
    arrExamQuestions = [];
    arrExamChosenAnswer = [];
    sec = 0;
    // שומר עמוד נוכחי
    strcurrentPage = "examPrePage";
    document.querySelector(`.examQuestionContainer`).classList.add("hidden"); 
    // מעלים דף פתיחה וכפתור אודות
    document.querySelector(`.homePageButtons`).classList.add("hidden");
    document.querySelector(`.aboutButton`).classList.add("hidden");
    // משנה מאפיינים של כותרת
    document.querySelector(`.title`).innerHTML = "מבחן";
    // כפתור עליון
    document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
    // מראה דף לפני מבחן
    document.querySelector(`.examPage`).classList.remove("hidden");
    document.querySelector(`.beforeExamPage`).classList.remove("hidden");  
    // הופך כפתור התחלה לאפור 
    document.querySelector(`.stratTest`).classList.add("gray");
    // שומר של משתמש ומוודא שהוא יותר מתו אחד 
    strUserName = document.querySelector('.examNameInput').value;
    if (strUserName.length > 1) {
        document.querySelector(`.stratTest`).classList.remove("gray");
    }
    document.querySelector('.examNameInput').addEventListener("input", () => {
        strUserName = document.querySelector('.examNameInput').value;
        if (strUserName.length > 1) {
            document.querySelector(`.stratTest`).classList.remove("gray");
            document.querySelector(`.stratTest`).addEventListener("click", startExam);
            if (bTimerListener) {// קורה רק פעם אחת
                bTimerListener = false;
                document.querySelector(`.stratTest`).addEventListener("click", () => {
                        // מתחיל טיימר
                        examTimer = setInterval(startTimerExam, 1000);
                        let arrAnswerPill = document.querySelectorAll('.answerPill');
                        for (let i = 0; i < arrAnswerPill.length; i++) {
                            // מסמן שלא ענו על השאלה
                            document.querySelector(`.answerPill${i + 1}`).style.backgroundColor = "#f4f4f4b8";
                            arrAnswerPill[i].addEventListener('click', () => {
                                currentTestQuestion = i;
                                startExam();
                        });
                    };
                });
            }
        }
    });
    // שומר שאלות למבחן
    for(key of Object.keys(DATA)) {
        // שומר את השאלות מהנושא הנוכחי במערך ומכניס למערך של השאלות למבחן
        let arrPracticeQuestion = shuffle(DATA[key]["questionsPractice"]);
        for (let i = 0; i < DATA[key].amountOfQuestions; i++) {
            arrExamQuestions.push(arrPracticeQuestion[i]);
        }
        // שומר את השאלות למבחן מהנושא הנוכחי במערך ומכניס למערך של השאלות למבחן
        let arrSubjExamQuestion = shuffle(DATA[key]["questionsExam"]);
        for (let j = 0; j < DATA[key]["questionsExam"].length; j++) {
            arrExamQuestions.push(arrSubjExamQuestion[j]);
        }
    }
    arrExamQuestions = shuffle(arrExamQuestions);
}

/* startExam
--------------------------------------------------------------
Description: */
const startExam = (event) => {
    if (strcurrentPage === "examPrePage") {
        // מעלים דף של לפני מבחן
        document.querySelector(`.beforeExamPage`).classList.add("hidden"); 
        // מראה מבחן
        document.querySelector(`.examQuestionContainer`).classList.remove("hidden"); 
        // משנה גל, מעלים כפתור עליון
        document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/test/test-wave.svg");
        document.querySelector('.topButton').classList.add("hidden");
        strcurrentPage = "examQuestion";
        formerTestQuestion = currentTestQuestion;
        // מוריד סימונים קודמים
        document.querySelector(`.false`).style.backgroundColor = "white";
        document.querySelector(`.true`).style.backgroundColor = "white";
        for (let i = 1; i <= 4; i++) {
            document.querySelector(`.examQuestionContainer .ans${i} img`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
        }
    } else {
        if (arrExamChosenAnswer[formerTestQuestion] === undefined) {
            // מסמן שלא ענו על השאלה
            document.querySelector(`.answerPill${formerTestQuestion + 1}`).style.backgroundColor = "#f4f4f4b8";
        } else {
            // מסמן שענו כבר על השאלה
            document.querySelector(`.answerPill${formerTestQuestion + 1}`).style.backgroundColor = "white";
        }
        // מעלים שאלה קודמת
        if (event !== undefined) {
            document.querySelector(`.${arrExamQuestions[currentTestQuestion].type}`).classList.add("hidden");
            if (strcurrentPage === "reviewTest") {
                // בודק אם נלחצה תשובה לא נכונה ואם כן מוריד סימון תשובה לא נכונה
                if (arrExamChosenAnswer[currentTestQuestion] !== String(arrExamQuestions[currentTestQuestion]["correctAns"])) {
                    document.querySelector(`.answersContainers .${arrExamChosenAnswer[currentTestQuestion]} div`).classList.remove("wrongAnswer");
                }
                // מוריד סימון תשובה נכונה
                document.querySelector(`.answersContainers .${arrExamQuestions[currentTestQuestion]["correctAns"]} div`).classList.remove("correctAnswer");
            }
            if (event.currentTarget.classList[1] === "testArrowRight") {
                currentTestQuestion--;
            } else if (event.currentTarget.classList[1] === "testArrowLeft") {
                currentTestQuestion++;
            }
            formerTestQuestion = currentTestQuestion;
            document.querySelector(`.${arrExamQuestions[currentTestQuestion].type}`).classList.remove("hidden");
        } else { // תזוזה בין השאלות על ידי כפתורים
            document.querySelector(`.${arrExamQuestions[formerTestQuestion].type}`).classList.add("hidden");
            if (strcurrentPage === "reviewTest") {
                // בודק אם נלחצה תשובה לא נכונה ואם כן מוריד סימון תשובה לא נכונה
                if (arrExamChosenAnswer[formerTestQuestion] !== String(arrExamQuestions[formerTestQuestion]["correctAns"])) {
                   document.querySelector(`.answersContainers .${arrExamChosenAnswer[formerTestQuestion]} div`).classList.remove("wrongAnswer");
               }
               // מוריד סימון תשובה נכונה
               document.querySelector(`.answersContainers .${arrExamQuestions[formerTestQuestion]["correctAns"]} div`).classList.remove("correctAnswer");
            }
           //מעדכן מספר שאלה 
            formerTestQuestion = currentTestQuestion;
            document.querySelector(`.${arrExamQuestions[currentTestQuestion].type}`).classList.remove("hidden");
        }
        if (arrExamQuestions[currentTestQuestion].type === "binary") {
            // מוריד סימנים קודמים
            document.querySelector(`.false`).style.backgroundColor = "white";
            document.querySelector(`.true`).style.backgroundColor = "white";
            if (arrExamChosenAnswer[currentTestQuestion] !== undefined) {
                // משנה תמונה של תשובה למסומנת
                document.querySelector(`.${arrExamChosenAnswer[currentTestQuestion]}`).style.backgroundColor = "#79bee0bb";
            }
        } else {
            // מוריד סימונים קודמים
            for (let i = 1; i <= 4; i++) {
                document.querySelector(`.examQuestionContainer .ans${i} img`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
            }
            if (arrExamChosenAnswer[currentTestQuestion] !== undefined) {
                // משנה תמונה של תשובה למסומנת
                document.querySelector(`.examQuestionSqure${arrExamChosenAnswer[currentTestQuestion].slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-marked.svg");
            }
        }
    }
    // מוריד חצים בשאלה הראשונה והאחרונה
    if (currentTestQuestion > 0 && currentTestQuestion < AMOUNT_OF_QUESTION_EXAM - 1) {
        // מראה חץ אחורה וקדימה
        document.querySelector(`.testArrowRight`).classList.remove("hidden"); 
        document.querySelector(`.testArrowLeft`).classList.remove("hidden");
    } else if (currentTestQuestion === AMOUNT_OF_QUESTION_EXAM - 1) {
        // מעלים חץ קדימה
        document.querySelector(`.testArrowLeft`).classList.add("hidden");
    } else {
        // מראה את השאלה
        document.querySelector(`.${arrExamQuestions[currentTestQuestion].type}`).classList.remove("hidden");
        // מעלים חץ אחורה
        document.querySelector(`.testArrowRight`).classList.add("hidden"); 
        document.querySelector(`.testArrowLeft`).classList.remove("hidden");
    }
    
    // מראה את סימוני השאלה הנוכחית
    document.querySelector('.testCurrentQuestionDisplay').innerHTML = `שאלה מספר ${currentTestQuestion + 1}`;
    document.querySelector(`.answerPill${currentTestQuestion + 1}`).style.backgroundColor = "#a3a2a2";
    // מראה את השאלה הנוכחית ומכניס אליה את התוכן
    document.querySelector('.examQuestionContainer .question').innerHTML = arrExamQuestions[currentTestQuestion].question;
    if (arrExamQuestions[currentTestQuestion].type === "binary") {
        // שם מאזינים לתשובות
        document.querySelector(`.examQuestionContainer .binary .true`).addEventListener("click", onClickAnswer);
        document.querySelector(`.examQuestionContainer .binary .false`).addEventListener("click", onClickAnswer);
    } else {
        for (let i = 1; i <= 4; i++) {
            // מכניס תוכן לתשובות ושם עליהן מאזין
            document.querySelector(`.examQuestionContainer .ans${i} div`).innerHTML = arrExamQuestions[currentTestQuestion][`ans${i}`];
            document.querySelector(`.examQuestionContainer .ans${i}`).addEventListener("click", onClickAnswer);
        }
    }
    // שם מאזינים לחצים
    document.querySelector(`.testArrowRight`).addEventListener("click", startExam);
    document.querySelector(`.testArrowLeft`).addEventListener("click", startExam);

    if (strcurrentPage === "reviewTest") {
        // בודק אם נלחצה תשובה לא נכונה ואם כן מסמן שהיא לא נכונה
        if (arrExamChosenAnswer[currentTestQuestion] !== String(arrExamQuestions[currentTestQuestion]["correctAns"])) {
            document.querySelector(`.answersContainers .${arrExamChosenAnswer[currentTestQuestion]} div`).classList.add("wrongAnswer");
        }
        // מסמן תשובה נכונה בירוק
        document.querySelector(`.answersContainers .${arrExamQuestions[currentTestQuestion]["correctAns"]} div`).classList.add("correctAnswer");
    }
}


/* submitionPopUp
--------------------------------------------------------------
Description:  */
const submitionPopUp = () => {
    if (strcurrentPage === "reviewTest") {
        endOfTest();
    } else {
       // מראה פופ אפ ושם מאזינים לכפתורים בפופ אפ
       document.querySelector(`.examSubmitionPopUp`).classList.remove("hidden");
       document.querySelector(`.popUpSubmit`).addEventListener("click", endOfTest);
       document.querySelector(`.popUpBackToExam`).addEventListener("click", () => {
           // מעלים פופ אפ
           document.querySelector(`.examSubmitionPopUp`).classList.add("hidden");
       });
    }
}

/* endOfTest
--------------------------------------------------------------
Description:  */
const endOfTest = () => {
    if (strcurrentPage === "reviewTest") {
        // בודק אם נלחצה תשובה לא נכונה ואם כן מוריד סימון תשובה לא נכונה
        if (arrExamChosenAnswer[formerTestQuestion] !== String(arrExamQuestions[formerTestQuestion]["correctAns"])) {
            document.querySelector(`.answersContainers .${arrExamChosenAnswer[formerTestQuestion]} div`).classList.remove("wrongAnswer");
        }
        // מוריד סימון תשובה נכונה
        document.querySelector(`.answersContainers .${arrExamQuestions[formerTestQuestion]["correctAns"]} div`).classList.remove("correctAnswer");
        document.querySelector(`.${arrExamQuestions[currentTestQuestion].type}`).classList.add("hidden");
        // משנה כפתור סיום להגש
        document.querySelector('.examSubmit').setAttribute("src", "../assets/images/grapics/test/submit-button.svg");
    } else {
        // עוצר טיימר
        clearInterval(examTimer)
        // שם מאזינים לכפתורים
        document.querySelector(`.reviewTest`).addEventListener("click", reviewTest);
        // בודק כמה שאלות נענו נכון
        nExamCorrectAnswer = 0;
        for (let j = 0; j < AMOUNT_OF_QUESTION_EXAM; j++){
            if (arrExamChosenAnswer[j] === arrExamQuestions[j]["correctAns"]) {
                nExamCorrectAnswer++;
            }
        }
        // מחשב ציון
        let nGrade = Math.round((nExamCorrectAnswer/AMOUNT_OF_QUESTION_EXAM) * 100);
        // מכניס שם משתמש
        document.querySelector(`.userNameBig`).innerHTML = strUserName;
        document.querySelector(`.userNameSmall`).innerHTML = strUserName;
        // מכניס תשובות נכונות וציון
        document.querySelector(`.ExamgradeBig`).innerHTML = nGrade;
        document.querySelector(`.ExamgradeSmall`).innerHTML = nGrade;
        document.querySelector(`.rightAnswers`).innerHTML = `${nExamCorrectAnswer}/15`;
        // נותן משוב ויוזאלי לפי הציון
        if (nGrade < PASSING_GRADE) {
            document.querySelector(`.examVerbalGrade`).innerHTML = "לא נורא אולי פעם הבאה";
            document.querySelector('.ExamgradeConteiner').style.backgroundImage = `url("../assets/images/grapics/test/sad-smiley-face.svg")`;
        } else {
            document.querySelector(`.examVerbalGrade`).innerHTML = "כל הכבוד";
            document.querySelector('.ExamgradeConteiner').style.backgroundImage = `url("../assets/images/grapics/test/happy-smiley-face.svg")`;
        }
        // שומר תאריך ושעה
        let date = new Date();
        let todayDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        let currTime = date.getHours() + ":" + date.getMinutes();
        // מכניס תאריך ושעה
        document.querySelector(`.date`).innerHTML = todayDate;
        document.querySelector(`.time`).innerHTML = currTime;
        // מכניס אורך מבחן
        document.querySelector(`.timerConteiner`).innerHTML = `${timerSecondes} : ${timerMinutes}`;
    }
    document.querySelector(`.${arrExamQuestions[formerTestQuestion].type}`).classList.add("hidden");
    strcurrentPage = "endOfTest";
    // מעלים פופ אפ ואת המבחן ומראה את דף הסיום
    document.querySelector(`.examSubmitionPopUp`).classList.add("hidden");
    document.querySelector(`.examQuestionContainer`).classList.add("hidden");
    document.querySelector(`.afterExamPage`).classList.remove("hidden");
    // משנה גל ומראה כפתור חזור
    document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/home-page/opening-wave.svg");
    document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
    document.querySelector(`.topButton`).classList.remove("hidden");
}

/* reviewTest
--------------------------------------------------------------
Description:  */
const reviewTest = (event) => {
    // מעלים את הדף סיום ומראה את המבחן
    document.querySelector(`.examQuestionContainer`).classList.remove("hidden");
    document.querySelector(`.afterExamPage`).classList.add("hidden");
    // משנה גל ומעלים כפתור חזור
    document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/test/test-wave.svg");
    document.querySelector(`.topButton`).classList.add("hidden");
    // משנה כפתור הגש לסיום
    document.querySelector('.examSubmit').setAttribute("src", "../assets/images/grapics/test/test-review-end-button.svg");
    strcurrentPage = "reviewTest";
    currentTestQuestion = 0;
    startExam();
}

/* pad
--------------------------------------------------------------
Description:  */
const pad = (val) => {
    let valString = val + "";
    if(valString.length < 2)
    {
        return "0" + valString;
    }
    else
    {
        return valString;
    }
}

/* startTimerExam
--------------------------------------------------------------
Description:  */
const startTimerExam = () => {
    sec++;
    timerSecondes = pad(sec%60);
    timerMinutes = pad(parseInt(sec/60));
    // document.querySelector(`.testCurrentQuestionDisplay`).innerHTML = `${timerSecondes} : ${timerMinutes}`;
}

/*
shuffle
------------------------------------------------
Description: take orgnaiz array and shffel it
Parameters: array.
------------------------------------------------
Programer: Gal
------------------------------------------------
*/
function shuffle(arr) {
    let tmp = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        let index = Math.floor(Math.random() * tmp.length);
        arr[i] = tmp[index];
        tmp = tmp.slice(0, index).concat(tmp.slice(index + 1));
    }
    return arr;
}
