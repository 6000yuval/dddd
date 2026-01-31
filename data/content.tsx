import React from 'react';
import { Article, Category, GlossaryTerm } from '../types';
import { BookOpen, Zap, Brain, CheckCircle, Home, Briefcase, Layers, Shield, Star } from 'lucide-react';

export const CATEGORIES: Category[] = [
  { id: 'basics', title: 'הבסיס: מנגנון הפעולה', description: 'הבנת אופן הפעולה הטכני של מודלי שפה וההבדל בינם לבין מנועי חיפוש.', color: 'bg-slate-100', icon: <BookOpen className="w-5 h-5" /> },
  { id: 'skills', title: 'מיומנות (הנדסת פרומפט)', description: 'כיצד לנסח קלט (Prompt) בצורה שתמקסם את איכות הפלט.', color: 'bg-yellow-100', icon: <Zap className="w-5 h-5" /> },
  { id: 'thinking', title: 'עיבוד וניתוח', description: 'שימוש במערכת לצורך פירוק בעיות, סיעור מוחות וניתוח לוגי.', color: 'bg-orange-100', icon: <Brain className="w-5 h-5" /> },
  { id: 'reliability', title: 'בדיקה ואמינות', description: 'זיהוי מידע שגוי, אימות עובדות והצלבת מקורות.', color: 'bg-blue-100', icon: <CheckCircle className="w-5 h-5" /> },
  { id: 'personal', title: 'שימוש אישי', description: 'יישומים יומיומיים: ניסוח טקסטים, ארגון מידע ולימוד.', color: 'bg-purple-100', icon: <Home className="w-5 h-5" /> },
  { id: 'work', title: 'עבודה ולימודים', description: 'כתיבה עסקית, סיכום מסמכים וניתוח נתונים.', color: 'bg-amber-100', icon: <Briefcase className="w-5 h-5" /> },
  { id: 'automation', title: 'מערכות ואוטומציה', description: 'שילוב מודלי שפה בתהליכים אוטומטיים.', color: 'bg-red-100', icon: <Layers className="w-5 h-5" /> },
  { id: 'safety', title: 'בטיחות ופרטיות', description: 'שמירה על מידע אישי ומגבלות השימוש.', color: 'bg-emerald-100', icon: <Shield className="w-5 h-5" /> },
  { id: 'master', title: 'מדריכי עומק', description: 'סקירות מקיפות על מתודולוגיות עבודה מתקדמות.', color: 'bg-indigo-100', icon: <Star className="w-5 h-5" /> },
];

export const GLOSSARY: GlossaryTerm[] = [
  { term: 'Prompt (קלט)', definition: 'הטקסט המוזן למערכת, אשר משמש כבסיס לחישוב ההסתברויות ליצירת הטקסט הבא.' },
  { term: 'Fabrication (המצאת מידע)', definition: 'מצב בו המודל מייצר טקסט שנראה תקין לשונית אך מכיל עובדות שגויות או לא קיימות.' },
  { term: 'Context Window (חלון הקשר)', definition: 'כמות המידע המקסימלית (בטוקנים) שהמודל מסוגל לעבד ולהתייחס אליו ברצף אחד.' },
  { term: 'Token (אסימון)', definition: 'יחידת המידע הבסיסית שהמודל מעבד ומנבא. בעברית מילה עשויה להתפרק למספר טוקנים.' },
  { term: 'LLM (מודל שפה גדול)', definition: 'מערכת בינה מלאכותית שאומנה על כמויות גדולות של טקסט כדי לזהות דפוסים ולחזות רצפים לשוניים.' },
  { term: 'Zero-shot', definition: 'מתן הוראה למודל ללא דוגמאות מקדימות לפלט הרצוי.' },
  { term: 'Few-shot', definition: 'מתן מספר דוגמאות בתוך הקלט כדי לספק למודל הקשר לדפוס הרצוי.' },
];

// Helper for consistency
const PlainText = ({ children }: { children?: React.ReactNode }) => (
  <div className="space-y-6 text-lg leading-relaxed text-slate-800 text-justify">
    {children}
  </div>
);

export const ARTICLES: Article[] = [
  // ================= BASICS =================
  {
    id: 'what-ai-really-does',
    categoryId: 'basics',
    title: 'מה AI באמת עושה (ולמה הוא לא "יודע" כלום)',
    description: 'ההבדל הטכני בין שליפת מידע (Retrieval) לבין גנרציה של טקסט (Generation) המבוססת על הסתברות.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">ההבדל בין מנוע חיפוש למודל שפה</h3>
      <p>
        כאשר משתמשים במנוע חיפוש (כמו גוגל), המערכת מבצעת פעולה של <strong>שליפה (Retrieval)</strong>. היא סורקת אינדקס קיים של מסמכים ושולפת את המידע הרלוונטי כפי שהוא נכתב במקור.
      </p>
      <p>
        לעומת זאת, מודלי שפה גדולים (LLMs) פועלים כמערכות <strong>גנרטיביות (Generative)</strong>. למודל אין מסד נתונים נגיש של עובדות שניתן לשלוף ממנו מידע, אלא ידע שמקודד בצורה סטטיסטית בתוך פרמטרי המודל שנלמדו במהלך האימון. כאשר מוצגת למודל שאלה, הוא אינו "מחפש" את התשובה, אלא מייצר אותה מחדש, מילה אחר מילה, על בסיס חישוב הסתברותי.
      </p>

      <h4 className="text-xl font-bold mt-4">כיצד מתבצעת יצירת הטקסט?</h4>
      <p>
        המודל אינו "יודע" במובן אנושי, אך הוא מייצג את הקשר בין המושגים בצורה סטטיסטית, ולכן מפיק את התשובה הסבירה ביותר על סמך דפוסים שנלמדו. תהליך זה נקרא "חיזוי הטוקן הבא" (Next Token Prediction).
      </p>
      
      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-blue-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">המחשה טכנית: חיזוי מול ידיעה</h5>
        <p className="text-sm mb-2">כאשר הקלט הוא: <strong>"מהי בירת צרפת?"</strong></p>
        <p className="text-sm">המודל מחשב את ההסתברות הסטטיסטית להמשך הרצף:</p>
        <div className="space-y-2 mt-3 font-mono text-sm bg-white p-4 rounded border border-slate-200 dir-ltr">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">1:</span>
            <span>Input: "בירת"</span>
            <span className="text-xs text-green-600 bg-green-50 px-1 rounded">&rarr; חיזוי סביר: "צרפת"</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">2:</span>
            <span>Input: "בירת צרפת"</span>
            <span className="text-xs text-green-600 bg-green-50 px-1 rounded">&rarr; חיזוי סביר: "היא"</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-blue-600">
            <span className="text-slate-400 font-normal">3:</span>
            <span>Input: "בירת צרפת היא"</span>
            <span className="text-xs text-green-600 bg-green-50 px-1 rounded font-normal">&rarr; חיזוי סביר: "פריז"</span>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-3">
          המילה "פריז" נבחרה כיוון שבדאטה עליו אומן המודל, זו המילה בעלת ההסתברות הגבוהה ביותר להופיע בהקשר זה.
        </p>
      </div>

      <h4 className="text-xl font-bold mt-4">המשמעות עבור המשתמש</h4>
      <p>
        ההבנה כי מדובר במערכת הסתברותית ולא במאגר ידע דטרמיניסטי היא קריטית:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>יצירת מידע שגוי:</strong> מאחר שהמערכת אינה מאמתת תשובות מול מקור חיצוני בזמן אמת, ובהיעדר מידע ברור, היא עשויה להפיק תשובה לשונית תקינה אך שגויה עובדתית.</li>
        <li><strong>גמישות בתוכן:</strong> המערכת מסוגלת לחבר בין דפוסים שונים (למשל, סגנון כתיבה משפטי עם נושא קולינרי) משום שהיא פועלת על בסיס זיהוי תבניות ולא על בסיס תבניות קשיחות.</li>
      </ul>

      <p className="bg-blue-50 p-4 rounded-lg mt-6 text-sm border border-blue-100">
        <strong>לסיכום:</strong> מודלי שפה גדולים אינם פועלים כמנועי חיפוש, אלא כמערכות שמפיקות טקסט באמצעות חיזוי סטטיסטי של רצפים לשוניים. הידע שלהם אינו מאוחסן כמאגר עובדות נגיש, אלא מקודד בתוך מבנה המודל עצמו. כתוצאה מכך, הם מסוגלים לייצר טקסט חדש וגמיש, אך לעיתים גם תשובות שאינן נכונות עובדתית אם לא מתבצע אימות חיצוני.
      </p>
    </PlainText>
  },
  {
    id: 'why-ai-sounds-confident',
    categoryId: 'basics',
    title: 'מדוע המודל מציג תשובות בביטחון גם כשהן שגויות?',
    description: 'השפעת תהליך האימון (RLHF) על סגנון התשובה.',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">העדפה לסגנון סמכותי</h3>
      <p>
        אחת התופעות הבולטות בעבודה עם מודלי שפה היא הצגת מידע באופן שנראה סמכותי, חד משמעי וברור, גם כאשר המידע עצמו שגוי לחלוטין. תופעה זו אינה מעידה על "ביטחון עצמי" של המכונה (שאין לה תודעה), אלא היא תוצאה של תהליך האימון הטכני.
      </p>
      <p>
        בשלב האימון המכונה RLHF (Reinforcement Learning from Human Feedback), המודל עובר אופטימיזציה על סמך משוב אנושי. בודקים אנושיים דירגו תשובות של המודל, ולרוב ניתנה עדיפות לתשובות ישירות, ברורות ומנוסחות היטב, על פני תשובות מסויגות או מהוססות. כתוצאה מכך, המודל מבצע אופטימיזציה סטטיסטית לייצור טקסט שנראה כמו תשובה של מומחה.
      </p>

      <h4 className="text-xl font-bold mt-4">הפער בין תחביר לתוכן</h4>
      <p>
        מבחינת המודל, יצירת משפט שקרי אך תקין תחבירית (למשל: "הירח עשוי מגבינה") היא תהליך זהה ליצירת משפט אמת. המודל ממקסם את ההסתברות של רצף המילים, ללא יכולת אימות (Verification) מול המציאות החיצונית. לכן, הוא עשוי לייצר הפניות למאמרים שלא קיימים או פסקי דין בדיוניים, כיוון שהם תואמים את התבנית הלשונית של הפניה אקדמית או משפטית.
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-blue-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: יצירת הפניות לא קיימות</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="text-slate-600 font-bold block mb-1">הקלט:</span>
            <p className="text-sm">"ציין ספר של פרופ' דן אריאלי העוסק בגידול צמחים."</p>
          </div>
          <div>
            <span className="text-slate-600 font-bold block mb-1">הפלט השגוי:</span>
            <p className="text-sm">"הספר נקרא 'הצומח הלא רציונלי'. בספר זה בוחן אריאלי את ההחלטות שאנו מקבלים בגינה..."</p>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-2">
          <strong>הסבר:</strong> המודל זיהה את תבנית השם "דן אריאלי" ואת הנושא "גידול צמחים", וחיבר ביניהם באופן סטטיסטי כדי ליצור טקסט סביר לשונית, למרות שהעובדה אינה קיימת.
        </p>
      </div>
    </PlainText>
  },
  {
    id: 'common-mistakes',
    categoryId: 'basics',
    title: 'הבדלים בשימוש: מנוע חיפוש מול מודל גנרטיבי',
    description: 'טעויות נפוצות הנובעות משימוש בדפוסי חיפוש ישנים במערכות AI.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">שינוי דפוסי עבודה</h3>
      <p>
        משתמשים רבים ניגשים למודלי שפה עם הרגלים שנרכשו משימוש במנועי חיפוש. במנוע חיפוש, המטרה היא להשתמש במילות מפתח קצרות כדי לאתר מסמך. במודל גנרטיבי, המטרה היא לספק הקשר (Context) כדי לאפשר למודל לייצר טקסט חדש ומותאם.
      </p>

      <h4 className="text-xl font-bold mt-4">חוסר בהקשר (Under-specification)</h4>
      <p>
        מודל השפה זקוק למידע מקדים כדי לצמצם את מרחב האפשרויות הסטטיסטי של התשובה. כאשר המשתמש מספק קלט דל (למשל: "כתוב מייל"), המודל ייאלץ לבחור בהמשך הסטטיסטי הכללי והממוצע ביותר, מה שיוביל לתוצאה גנרית ובלתי שמישה.
      </p>
      <p>
        לעומת זאת, מתן הקשר, הגדרת תפקיד והגדרת מטרה ברורה, מאפשרים למודל לבצע חיזוי מדויק יותר של הטקסט הרצוי.
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-blue-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: השפעת הפירוט על הפלט</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="text-red-600 font-bold block mb-1">קלט חיפוש (לא מתאים):</span>
            <p className="text-sm">"מתנה לאמא"</p>
            <p className="text-xs text-slate-500 mt-1">המודל יפיק רשימה גנרית ושבלונית.</p>
          </div>
          <div>
            <span className="text-green-600 font-bold block mb-1">קלט גנרטיבי (מתאים):</span>
            <p className="text-sm">"הצע 3 רעיונות למתנה לאישה בת 60, חובבת היסטוריה וטבע, בתקציב של עד 500 ש"ח. הימנע ממוצרי טיפוח."</p>
            <p className="text-xs text-slate-500 mt-1">המודל יעבד את האילוצים ויפיק תוצאה מותאמת.</p>
          </div>
        </div>
      </div>
    </PlainText>
  },
  {
    id: 'how-to-ask-good-question',
    categoryId: 'basics',
    title: 'מבנה הקלט: הנדסת פרומפט בסיסית',
    description: 'עקרונות לבניית קלט שממקסם את דיוק המודל.',
    readTimeMinutes: 6,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">הגדרת מרחב הבעיה</h3>
      <p>
        "הנדסת פרומפטים" (Prompt Engineering) היא הפרקטיקה של תכנון הקלט הטקסטואלי באופן שמכווין את המודל לייצר את הפלט הרצוי. ככל שהקלט מובנה יותר, כך המודל יכול לבצע חיזוי מדויק יותר של הטוקנים הבאים בהתאם לציפיות המשתמש.
      </p>
      <p>
        מודל עבודה מומלץ כולל ארבעה מרכיבים עיקריים (CPFA):
      </p>

      <h4 className="text-xl font-bold mt-4">מרכיבי הקלט</h4>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Context (הקשר):</strong> מידע רקע רלוונטי. לדוגמה: "אני מנהל מוצר בחברת תוכנה".</li>
        <li><strong>Purpose (מטרה):</strong> הפעולה הנדרשת מהמודל. לדוגמה: "לסכם את השינויים בגרסה החדשה עבור הלקוחות".</li>
        <li><strong>Format (פורמט):</strong> המבנה הטכני של הפלט. לדוגמה: "רשימה ממוספרת", "טבלה", "קוד JSON".</li>
        <li><strong>Audience (קהל יעד):</strong> התאמת המשלב הלשוני. לדוגמה: "שפה טכנית למפתחים" או "שפה פשוטה למשתמשי קצה".</li>
      </ul>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-blue-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: בניית קלט מובנה</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="text-red-600 font-bold block mb-1">קלט חסר:</span>
            <p className="text-sm">"כתוב הודעה לעובדים."</p>
          </div>
          <div>
            <span className="text-green-600 font-bold block mb-1">קלט מובנה:</span>
            <p className="text-sm">
              "<strong>הקשר:</strong> שינוי במדיניות העבודה מהבית.
              <br/><strong>מטרה:</strong> להודיע על מעבר למודל היברידי (3 ימים במשרד).
              <br/><strong>קהל:</strong> עובדי החברה.
              <br/><strong>פורמט:</strong> מייל רשמי אך אמפתי."
            </p>
          </div>
        </div>
      </div>
    </PlainText>
  },
  {
    id: 'first-prompt-never-enough',
    categoryId: 'basics',
    title: 'תהליך איטרטיבי: שיפור הפלט',
    description: 'כיצד דיוק חוזר של הקלט משפר את התוצאה הסטטיסטית.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">הפלט הראשון כטיוטה</h3>
      <p>
        הפלט הראשון שהמודל מפיק הוא התוצאה הסבירה ביותר בהתבסס על הקלט הראשוני. עם זאת, לעיתים קרובות נדרש תהליך של עידון (Refinement) כדי להגיע לתוצאה המדויקת.
      </p>
      <p>
        במקום לראות בתשובה הראשונה תוצר סופי, יש להתייחס אליה כאל בסיס לשינויים. כאשר המשתמש מספק משוב ("קצר את הטקסט", "שנה את הסגנון לרשמי יותר"), הוא למעשה מספק קלט חדש שמשנה את ההסתברויות עבור יצירת הטקסט הבא.
      </p>

      <h4 className="text-xl font-bold mt-4">סוגי איטרציות נפוצות</h4>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>שינוי אורך:</strong> בקשה לקיצור או הרחבה של הפלט.</li>
        <li><strong>שינוי משלב:</strong> מעבר בין שפה מדוברת לשפה רשמית/אקדמית.</li>
        <li><strong>שינוי מבנה:</strong> המרת טקסט רציף לרשימת נקודות או טבלה.</li>
      </ul>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-blue-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: תהליך עידון</h5>
        <div className="space-y-4">
          <div>
            <span className="font-bold text-slate-700">קלט 1:</span>
            <p className="text-sm text-slate-600">"הצע מתכון לארוחת ערב."</p>
            <p className="text-xs text-slate-500">פלט: פסטה ברוטב עגבניות (גנרי).</p>
          </div>
          <div>
            <span className="font-bold text-slate-700">קלט 2 (איטרציה):</span>
            <p className="text-sm text-slate-600">"ללא פחמימות ובזמן הכנה של עד 15 דקות."</p>
            <p className="text-xs text-slate-500">פלט: חזה עוף מוקפץ עם ירקות.</p>
          </div>
        </div>
      </div>
    </PlainText>
  },
  {
    id: 'did-ai-understand-me',
    categoryId: 'basics',
    title: 'וידוא הבנה (Reflection)',
    description: 'טכניקה לאימות שהמודל זיהה את ההוראות כראוי.',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">בדיקת הקלט המעובד</h3>
      <p>
        במשימות מורכבות, קיים סיכון שהמודל לא "ישים לב" (מבחינה סטטיסטית, המשקל של חלק מההוראות יהיה נמוך מדי) לפרטים מסוימים בקלט. טכניקה יעילה לפתרון בעיה זו היא לבקש מהמודל לבצע שיקוף (Reflection) של ההוראות לפני ביצוע המשימה.
      </p>

      <h4 className="text-xl font-bold mt-4">יישום הטכניקה</h4>
      <p>
        ניתן להוסיף לקלט את ההוראה: "לפני ביצוע המשימה, חזור במילים שלך על ההנחיות העיקריות כדי לוודא שכל האילוצים הובנו".
      </p>
      <p>
        פעולה זו מכריחה את המודל לייצר טוקנים שמתארים את המשימה, מה שמכניס את המשימה עצמה לתוך "חלון ההקשר" (Context Window) בצורה חזקה יותר ומשפר את הסיכוי לביצוע מדויק בשלב הבא.
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-blue-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: שיקוף הוראות</h5>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <p className="text-sm font-semibold mb-1">פלט המודל (שלב השיקוף):</p>
            <p className="text-sm text-slate-600 bg-white p-2 rounded border border-slate-200">
              "הבנתי. המשימה היא לכתוב תוכנית עסקית, תוך דגש על קהל יעד בגיל השלישי ומודל הכנסות מבוסס מנויים. האם לגשת לכתיבה?"
            </p>
          </div>
        </div>
      </div>
    </PlainText>
  },
  {
    id: 'explain-simply',
    categoryId: 'basics',
    title: 'פישוט מידע מורכב (ELI5)',
    description: 'שימוש במודל לתרגום מושגים טכניים לשפה פשוטה.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">התאמת רמת המורכבות</h3>
      <p>
        אחת היכולות החזקות של מודלי שפה היא המרת טקסט ממשלב אחד למשלב אחר. המודלים אומנו על טקסטים אקדמיים לצד טקסטים פשוטים, ולכן הם מסוגלים למפות את הקשרים בין מושגים מורכבים להסברים פשוטים.
      </p>
      <p>
        טכניקה זו ידועה כ-ELI5 (Explain Like I'm 5), ומטרתה לקבל הסבר מופשט המשתמש באנלוגיות כדי להבהיר רעיונות טכניים.
      </p>

      <h4 className="text-xl font-bold mt-4">שימוש באנלוגיות</h4>
      <p>
        בקשה מפורשת לשימוש באנלוגיה ("הסבר זאת באמצעות דוגמה מעולם הרכב") עוזרת למודל לשלוף דפוסים לשוניים שמחברים בין הנושא החדש לבין מושגים מוכרים.
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-blue-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: הסבר טכני</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="text-red-600 font-bold block mb-1">הסבר טכני:</span>
            <p className="text-sm">"כתובת IP היא מזהה נומרי המוקצה לכל התקן ברשת המשתמשת בפרוטוקול התקשורת..."</p>
          </div>
          <div>
            <span className="text-green-600 font-bold block mb-1">הסבר מפושט:</span>
            <p className="text-sm">"תחשוב על כתובת IP כמו על כתובת מגורים למחשב שלך. כפי שהדוור צריך כתובת כדי לדעת לאן להביא את המכתב, כך האינטרנט צריך כתובת כדי לדעת לאן לשלוח את המידע."</p>
          </div>
        </div>
      </div>
    </PlainText>
  },
  {
    id: 'short-answer-quality',
    categoryId: 'basics',
    title: 'שליטה באורך הפלט',
    description: 'מניעת פלט ארוך ומסורבל באמצעות הגדרת אילוצים.',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">צמצום ומיקוד</h3>
      <p>
        מודלי שפה נוטים כברירת מחדל לייצר תשובות מפורטות ומנומסות, הכוללות לעיתים קרובות הקדמות וסיכומים מיותרים ("כמובן!", "לסיכום..."). התנהגות זו נובעת מהמידע עליו אומנו ומהכוונון להעדפות משתמשים כלליות.
      </p>
      <p>
        כדי לקבל מידע תמציתי, יש להגדיר אילוצי אורך ופורמט באופן מפורש בקלט.
      </p>

      <h4 className="text-xl font-bold mt-4">הנחיות למיקוד</h4>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>הסרת הקדמות:</strong> "השב ישירות לשאלה ללא מילות פתיחה או סיום".</li>
        <li><strong>הגבלת אורך:</strong> "ענה במשפט אחד בלבד".</li>
        <li><strong>דחיסות מידע:</strong> "כתוב בקיצור נמרץ, התמקד בעובדות בלבד".</li>
      </ul>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-blue-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: אילוץ אורך</h5>
        <div className="space-y-4">
          <div>
            <span className="font-bold text-slate-700">קלט רגיל:</span>
            <p className="text-sm">"מה ההבדל בין מניה לאג"ח?"</p>
            <p className="text-xs text-slate-500">פלט: 3 פסקאות עם הקדמה וסיכום.</p>
          </div>
          <div>
            <span className="font-bold text-slate-700">קלט עם אילוץ:</span>
            <p className="text-sm">"במשפט אחד: מה ההבדל בין מניה לאג"ח?"</p>
            <p className="text-xs text-slate-500">פלט: "מניה היא בעלות חלקית על חברה, בעוד שאג"ח הוא הלוואה הניתנת לחברה תמורת ריבית."</p>
          </div>
        </div>
      </div>
    </PlainText>
  },
  {
    id: 'ai-tool-not-authority',
    categoryId: 'basics',
    title: 'המודל ככלי עזר ולא כסמכות',
    description: 'חשיבות הבקרה האנושית על תוצרי המערכת.',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">האדם בלופ (Human in the Loop)</h3>
      <p>
        למרות היכולות הטכנולוגיות, מודל שפה הוא כלי סטטיסטי חסר שיקול דעת, אתיקה או הבנה של השלכות בעולם האמיתי. השימוש הנכון במערכת הוא ככלי עזר לביצוע משימות (Copilot), ולא כמקבל החלטות אוטונומי (Autopilot).
      </p>
      <p>
        האחריות על תוצרי המערכת מוטלת תמיד על המפעיל האנושי.
      </p>

      <h4 className="text-xl font-bold mt-4">פעולות בקרה נדרשות</h4>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>אימות עובדתי:</strong> בדיקת נתונים מספריים, תאריכים ושמות מול מקורות חיצוניים.</li>
        <li><strong>בדיקת היגיון:</strong> קריאה ביקורתית של הטקסט כדי לוודא שאין סתירות פנימיות.</li>
        <li><strong>שיקול דעת:</strong> קבלת ההחלטה הסופית האם להשתמש בתוצר, במיוחד במקרים רגישים.</li>
      </ul>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-blue-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: סיכון משפטי</h5>
        <p className="text-sm mb-2">
          שימוש במודל שפה לכתיבת מסמך משפטי ללא בדיקה של עורך דין עלול להוביל לציטוט חוקים שגויים או תקדימים שאינם קיימים, כפי שקרה במספר מקרים מתועדים.
        </p>
        <p className="text-sm mt-2 font-bold text-red-600">
          המסקנה: המודל מייצר טיוטה, האדם מאשר אותה.
        </p>
      </div>
    </PlainText>
  },
  {
    id: 'when-not-to-use-ai',
    categoryId: 'basics',
    title: 'מגבלות השימוש: מתי לא להשתמש ב-AI',
    description: 'זיהוי מצבים בהם השימוש בטכנולוגיה אינו מומלץ או מסוכן.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">גבולות הגזרה הטכנולוגיים</h3>
      <p>
        ישנם תחומים ומצבים בהם השימוש במודלי שפה אינו יעיל, ואף עלול להיות מזיק, בשל אופי הפעולה ההסתברותי שלהם וחוסר היכולת להבטיח דיוק מוחלט.
      </p>

      <h4 className="text-xl font-bold mt-4">מקרים בהם עדיף להימנע</h4>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>תקשורת בינאישית רגישה:</strong> הודעות המביעות השתתפות בצער, התנצלות כנה או רגשות עמוקים. טקסט גנרטיבי עשוי להיתפס כמנוכר ומלאכותי.</li>
        <li><strong>קבלת החלטות קריטיות:</strong> החלטות רפואיות, משפטיות או פיננסיות. המודל עלול לספק מידע שגוי או מוטה.</li>
        <li><strong>מידע עדכני (ללא חיבור לרשת):</strong> מודלים שאינם מחוברים לאינטרנט בזמן אמת מוגבלים לתאריך בו הסתיים האימון שלהם (Cutoff Date) ואינם מכירים אירועים שקרו לאחר מכן.</li>
      </ul>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-blue-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: אותנטיות</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="text-red-600 font-bold block mb-1">הודעת AI:</span>
            <p className="text-sm italic">"אני מביע צער עמוק על האירוע ומקווה לפתרון מהיר..." (גנרי)</p>
          </div>
          <div>
            <span className="text-green-600 font-bold block mb-1">הודעה אנושית:</span>
            <p className="text-sm italic">"אני מצטער שפישלתי. זה לא היה צריך לקרות." (ישיר ואמין)</p>
          </div>
        </div>
      </div>
    </PlainText>
  },

  // ================= SKILLS (YELLOW) =================
  {
    id: 'build-clear-request',
    categoryId: 'skills',
    title: 'מבנה ה-CPF: יצירת פרומפט אפקטיבי',
    description: 'מתודולוגיה סדורה להגדרת המשימה למודל.',
    readTimeMinutes: 7,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">הגדרת פרמטרים ברורה</h3>
      <p>
        כדי לקבל פלט איכותי, יש לספק למודל את כל הפרמטרים הדרושים לביצוע המשימה. ניתן להשתמש במבנה קבוע (Framework) כדי להבטיח שלא נשכח פרט חשוב.
      </p>
      <p>
        נוסחת <strong>CPF</strong> (Context, Purpose, Format) מספקת שלד יעיל לבניית פרומפטים.
      </p>

      <h4 className="text-xl font-bold mt-4">פירוט המרכיבים</h4>
      <p>
        1. <strong>Context (הקשר):</strong> מידע הרקע. מי הדובר? מה הסיטואציה?
        <br/>
        2. <strong>Purpose (מטרה):</strong> מה הפעולה שהמודל צריך לבצע? (לשכנע, להסביר, לסכם).
        <br/>
        3. <strong>Format (פורמט):</strong> כיצד התוצאה צריכה להיראות ויזואלית ומבנית?
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-yellow-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה מעשית</h5>
        <div className="space-y-2">
          <p className="text-sm"><strong>Context:</strong> מורה להיסטוריה המלמד על המהפכה הצרפתית.</p>
          <p className="text-sm"><strong>Purpose:</strong> להסביר לתלמידים את הקשר לדמוקרטיה מודרנית.</p>
          <p className="text-sm"><strong>Format:</strong> תסריט לסרטון קצר של דקה בשפה מותאמת לנוער.</p>
          <p className="text-xs text-slate-500 mt-2 pt-2 border-t border-slate-200">שילוב שלושת המרכיבים מבטיח פלט ממוקד ושימושי.</p>
        </div>
      </div>
    </PlainText>
  },
  {
    id: 'context-without-overload',
    categoryId: 'skills',
    title: 'סינון מידע: מניעת עומס יתר',
    description: 'ניהול נכון של חלון ההקשר (Context Window).',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">איכות מול כמות</h3>
      <p>
        הזנת כמות גדולה מדי של מידע לא רלוונטי לתוך הפרומפט עלולה לגרום ל"דילול" הקשב של המודל. המודל עלול להתמקד בפרטים שוליים ולהחמיץ את ההוראה העיקרית. תופעה זו נובעת ממגבלות הקשב (Attention Mechanism) של המודל.
      </p>

      <h4 className="text-xl font-bold mt-4">עקרונות לסינון</h4>
      <p>
        לפני הזנת המידע, יש לבצע סינון ידני:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>רלוונטיות:</strong> האם פרט זה נדרש לביצוע המשימה? אם לא, הסירו אותו.</li>
        <li><strong>תמצות:</strong> במקום להדביק תכתובת מייל ארוכה, עדיף לכתוב סיכום קצר של הנקודות העיקריות.</li>
        <li><strong>פרטיות:</strong> הסרת מידע אישי ורגיש היא חובה.</li>
      </ul>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-yellow-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: ניקוי קלט</h5>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <span className="text-red-600 font-bold block mb-1">קלט עמוס:</span>
            <p className="text-sm text-slate-500">[הדבקת כל היסטוריית הצ'אט עם הלקוח כולל שיחות חולין] &rarr; "נסח תשובה".</p>
          </div>
          <div>
            <span className="text-green-600 font-bold block mb-1">קלט מזוקק:</span>
            <p className="text-sm text-slate-800">"הלקוח מתלונן על איחור במשלוח ודורש פיצוי. נסח תשובה המציעה 10% הנחה."</p>
          </div>
        </div>
      </div>
    </PlainText>
  },
  {
    id: 'precise-format',
    categoryId: 'skills',
    title: 'עיצוב פלט: טבלאות ורשימות',
    description: 'שימוש במודל לארגון מידע ויזואלי.',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">הבניית המידע</h3>
      <p>
        מודלי שפה יעילים מאוד בשינוי הייצוג של המידע (Transformation). הם יכולים לקחת טקסט לא מובנה ולהמיר אותו לפורמט מסודר וקריא יותר, מה שמקל על המשתמש לעבד את המידע.
      </p>

      <h4 className="text-xl font-bold mt-4">פורמטים נפוצים</h4>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Table:</strong> הצגת נתונים בטבלה להשוואה נוחה.</li>
        <li><strong>Markdown List:</strong> רשימות ממוספרות או רשימות תבליטים (Bullets).</li>
        <li><strong>CSV:</strong> פורמט המיועד לייצוא לתוכנות גיליון אלקטרוני (כמו Excel).</li>
      </ul>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-yellow-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: השוואת מוצרים</h5>
        <p className="text-sm mb-2">קלט לדוגמה:</p>
        <p className="bg-white p-3 rounded border border-slate-200 text-sm italic mb-3">
          "השווה בטבלה בין אייפון 15 לגלקסי S24. עמודות: מצלמה, סוללה, יתרון בולט."
        </p>
        <p className="text-xs text-slate-500">הפלט יהיה טבלה מסודרת המאפשרת השוואה מהירה, במקום פסקאות טקסט ארוכות.</p>
      </div>
    </PlainText>
  },
  {
    id: 'improve-bad-answer',
    categoryId: 'skills',
    title: 'תיקון פלט שגוי (Correction)',
    description: 'מתן משוב למודל לצורך שיפור התוצאה.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">המשך השיחה</h3>
      <p>
        כאשר הפלט אינו משביע רצון, אין צורך להתחיל שיחה חדשה. המודל "זוכר" את ההקשר של השיחה הנוכחית (עד גבול מסוים), ולכן ניתן לבקש ממנו לתקן את התשובה הקודמת.
      </p>

      <h4 className="text-xl font-bold mt-4">כיצד לתת משוב?</h4>
      <p>
        יש לציין בבירור מה הבעיה בפלט הנוכחי ומה השינוי הנדרש.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>סגנון:</strong> "הטקסט שיווקי מדי, כתוב אותו מחדש באופן עובדתי ויבש."</li>
        <li><strong>אורך:</strong> "התשובה ארוכה מדי, קצר אותה ל-3 נקודות עיקריות."</li>
        <li><strong>תוכן:</strong> "התעלמת מהדרישה להתייחס לקהל ישראלי, תקן זאת."</li>
      </ul>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-yellow-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: תיקון סגנון</h5>
        <div className="space-y-4">
          <div>
            <span className="font-bold text-slate-700">פלט מקורי (בעייתי):</span>
            <p className="text-sm text-slate-500 italic">"המוצר המדהים שלנו ישנה את חייכם!"</p>
          </div>
          <div>
            <span className="font-bold text-slate-700">הוראת תיקון:</span>
            <p className="text-sm bg-white p-2 border border-slate-200 rounded">"הסר סופרלטיבים וסימני קריאה. כתוב תיאור פונקציונלי בלבד."</p>
          </div>
          <div>
            <span className="font-bold text-slate-700">פלט מתוקן:</span>
            <p className="text-sm text-green-700 italic">"המוצר מציע פתרון לייעול תהליכי עבודה."</p>
          </div>
        </div>
      </div>
    </PlainText>
  },
  {
    id: 'ai-self-check',
    categoryId: 'skills',
    title: 'בדיקה עצמית (Self-Correction)',
    description: 'בקשה מהמודל לבחון את הפלט של עצמו.',
    readTimeMinutes: 3,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">מעבר נוסף על המידע</h3>
      <p>
        מאחר שהמודל מייצר טקסט באופן ליניארי (מילה אחר מילה), הוא עשוי לבצע שגיאות לוגיות או חישוביות במהלך הכתיבה. טכניקה יעילה לשיפור הדיוק היא לבקש מהמודל לבצע "בדיקה עצמית" על הפלט שלו.
      </p>

      <h4 className="text-xl font-bold mt-4">הפרומפט לבדיקה</h4>
      <p>
        ניתן להשתמש בנוסח: "עבור שוב על התשובה שנתת. בדוק האם יש בה שגיאות לוגיות או הנחות יסוד שגויות. במידה ויש, הצג את הגרסה המתוקנת."
      </p>
      <p>
        תהליך זה מאלץ את המודל לייצר טוקנים חדשים של ביקורת, מה שמאפשר לו לעיתים קרובות לזהות סתירות בפלט הקודם.
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-yellow-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: בדיקת תוכנית</h5>
        <p className="text-sm mb-2">פלט: "נבקר בלובר ביום שלישי."</p>
        <p className="text-sm font-bold text-slate-700">פרומפט ביקורת:</p>
        <p className="text-sm italic mb-2">"בדוק האם המוזיאון פתוח ביום זה."</p>
        <p className="text-sm font-bold text-green-700">תגובה מתוקנת:</p>
        <p className="text-sm text-slate-600">"תיקון: הלובר סגור בימי שלישי. יש להעביר את הביקור ליום אחר."</p>
      </div>
    </PlainText>
  },
  {
    id: 'multiple-options',
    categoryId: 'skills',
    title: 'ריבוי אפשרויות (Variety)',
    description: 'קבלת מגוון פתרונות לבחירה.',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">הרחבת מרחב הפתרונות</h3>
      <p>
        כאשר המודל נדרש למשימה יצירתית (כמו הצעת כותרות או רעיונות), הוא יספק את האפשרות בעלת ההסתברות הגבוהה ביותר. עם זאת, לעיתים קרובות נרצה לראות מגוון אפשרויות כדי לבחור את הטובה ביותר.
      </p>

      <h4 className="text-xl font-bold mt-4">בקשת וריאציות</h4>
      <p>
        מומלץ לבקש מהמודל לספק מספר אפשרויות, תוך גיוון הסגנונות או הגישות.
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-yellow-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: כותרות למייל</h5>
        <p className="text-sm italic bg-white p-3 border border-slate-200 rounded">
          "הצע 3 אפשרויות לכותרת למייל זה:
          <br/>
          1. אפשרות אינפורמטיבית ויבשה.
          <br/>
          2. אפשרות קצרה ומסקרנת.
          <br/>
          3. אפשרות הכוללת הנעה לפעולה."
        </p>
        <p className="text-xs text-slate-500 mt-2">גישה זו מאפשרת למשתמש לבחור את הפתרון המתאים ביותר לצרכיו.</p>
      </div>
    </PlainText>
  },
  {
    id: 'use-examples',
    categoryId: 'skills',
    title: 'שימוש בדוגמאות (Few-Shot)',
    description: 'לימוד המודל באמצעות דוגמאות קלט-פלט.',
    readTimeMinutes: 6,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">הגדרת דפוס רצוי</h3>
      <p>
        אחת הדרכים היעילות ביותר לשפר את ביצועי המודל היא לספק לו דוגמאות של "קלט" ו"פלט רצוי". טכניקה זו נקראת <strong>Few-Shot Prompting</strong>.
      </p>
      <p>
        הדוגמאות עוזרות למודל לזהות את התבנית הנדרשת (מבנה, סגנון, פורמט) וליישם אותה על הקלט החדש.
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-yellow-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: סיווג תגובות</h5>
        <div className="bg-white p-4 border border-slate-200 rounded text-sm font-mono space-y-2">
          <p className="text-slate-500">דוגמה 1: "האוכל הגיע קר." &rarr; סיווג: שלילי</p>
          <p className="text-slate-500 mt-2">דוגמה 2: "השירות היה מצוין." &rarr; סיווג: חיובי</p>
          <p className="text-blue-600 font-bold mt-4">המשימה: "המחיר יקר אבל טעים." &rarr; סיווג:</p>
        </div>
        <p className="text-xs text-slate-500 mt-2">המודל ישלים: "מעורב", על בסיס זיהוי הדפוס בדוגמאות.</p>
      </div>
    </PlainText>
  },
  {
    id: 'smart-followup',
    categoryId: 'skills',
    title: 'ניהול רצף שיחה (Context)',
    description: 'שימוש בהקשר הקודם לייעול העבודה.',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">זיכרון קצר טווח</h3>
      <p>
        בניגוד למנוע חיפוש שבו כל שאילתה עומדת בפני עצמה, מודל שפה בצ'אט מחזיק "חלון הקשר" (Context Window). הוא "רואה" את ההודעות הקודמות בשיחה ומשתמש בהן כחלק מהקלט לחישוב התשובה הבאה.
      </p>
      <p>
        ניתן לנצל זאת כדי להימנע מחזרות מיותרות.
      </p>

      <h4 className="text-xl font-bold mt-4">התייחסות לאחור</h4>
      <p>
        אפשר להשתמש במילים כמו "זה", "הראשון", "שנה את זה", והמודל יבין את הכוונה מתוך ההקשר.
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-yellow-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: שרשור הנחיות</h5>
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li><strong>אני:</strong> "תן רעיונות לפעילות." &rarr; מודל: מציג רשימה.</li>
          <li><strong>אני:</strong> "השלישי נראה טוב. הרחב עליו." &rarr; מודל: מזהה את פריט 3 ומרחיב.</li>
          <li><strong>אני:</strong> "עכשיו תכין רשימת ציוד לזה." &rarr; מודל: מכין רשימה לפעילות שנבחרה.</li>
        </ol>
      </div>
    </PlainText>
  },
  {
    id: 'maintain-style',
    categoryId: 'skills',
    title: 'הגדרת סגנון וטון (Style)',
    description: 'כיצד לשלוט במשלב הלשוני של המודל.',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">חריגה מברירת המחדל</h3>
      <p>
        ברירת המחדל של רוב המודלים היא כתיבה בסגנון ניטרלי, אינפורמטיבי ולעיתים רשמי ("מכונה"). כדי להתאים את הטקסט לצרכים ספציפיים, יש להגדיר במפורש את הטון והסגנון הרצויים.
      </p>

      <h4 className="text-xl font-bold mt-4">דרכים להגדרת סגנון</h4>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>שמות תואר:</strong> "כתוב בסגנון מקצועי", "ציני", "חמים".</li>
        <li><strong>דוגמה לחיקוי:</strong> הדבקת טקסט קיים ובקשה מהמודל לנתח את הסגנון ולכתוב טקסט חדש באותו אופן.</li>
      </ul>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-yellow-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: חיקוי סגנון</h5>
        <p className="text-sm italic bg-white p-3 border border-slate-200 rounded">
          "אני מצרף דוגמה לפוסט שכתבתי. נתח את הסגנון (אורך משפטים, שימוש בסלנג) וכתוב פוסט חדש בנושא אחר השומר על אותם מאפיינים."
        </p>
        <p className="text-xs text-slate-500 mt-2">פעולה זו מסייעת לשמור על אחידות מול הקהל.</p>
      </div>
    </PlainText>
  },
  {
    id: 'when-to-stop',
    categoryId: 'skills',
    title: 'מגבלות זיכרון (Context Window)',
    description: 'מתי להתחיל שיחה חדשה כדי לשמור על איכות הביצועים.',
    readTimeMinutes: 3,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">רוויה של חלון ההקשר</h3>
      <p>
        לכל מודל יש מגבלה טכנית על כמות הטוקנים שהוא יכול "לזכור" בשיחה אחת (Context Window). כאשר השיחה מתארכת מעבר לגבול זה, המודל מתחיל "לשכוח" את המידע שהוזן בתחילתה, והביצועים יורדים.
      </p>

      <h4 className="text-xl font-bold mt-4">סימנים לרוויה</h4>
      <ul className="list-disc list-inside space-y-2">
        <li>התעלמות מהוראות שניתנו בתחילת השיחה.</li>
        <li>ירידה ברמת הדיוק והקוהרנטיות.</li>
        <li>חזרה על תשובות קודמות (לופים).</li>
      </ul>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-yellow-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">הפתרון: אתחול</h5>
        <p className="text-sm">
          כאשר מזהים ירידה בביצועים:
        </p>
        <ol className="list-decimal list-inside text-sm mt-2">
          <li>בקשו מהמודל לסכם את הנקודות החשובות בשיחה.</li>
          <li>העתיקו את הסיכום.</li>
          <li>פתחו שיחה חדשה (New Chat) והדביקו את הסיכום כבסיס להמשך.</li>
        </ol>
      </div>
    </PlainText>
  },

  // ================= THINKING (ORANGE) =================
  {
    id: 'ai-thinking-tool',
    categoryId: 'thinking',
    title: 'כלי לעיבוד מחשבתי: הרחבה וניתוח',
    description: 'שימוש במודל ככלי עזר לחשיבה ולא רק ככלי כתיבה.',
    readTimeMinutes: 6,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">מעבד תמלילים לוגי</h3>
      <p>
        מעבר ליכולת הכתיבה, מודלי שפה מסוגלים לבצע מניפולציות לוגיות על רעיונות וטקסטים. הידע הרחב שלהם מאפשר להם לשמש ככלי לסיעור מוחות (Brainstorming) ולבחינת רעיונות מזוויות שונות.
      </p>

      <h4 className="text-xl font-bold mt-4">שימושים אנליטיים</h4>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>הרחבה:</strong> הצעת כיוונים נוספים לפיתוח רעיון קיים.</li>
        <li><strong>ביקורת (Devil's Advocate):</strong> הצגת טיעוני נגד לתוכנית עסקית או רעיון.</li>
        <li><strong>חיבורים:</strong> מציאת קשרים בין תחומים שונים.</li>
      </ul>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-orange-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: דיבייט לוגי</h5>
        <p className="text-sm italic bg-white p-3 border border-slate-200 rounded">
          "אני שוקל להוריד מחירים. הצג טיעון נגדי מנקודת מבט של מיתוג יוקרתי, וננהל דיון על ההשלכות."
        </p>
        <p className="text-xs text-slate-500 mt-2">התהליך מסייע למשתמש לחדד את עמדותיו ולהתכונן לתרחישים אמיתיים.</p>
      </div>
    </PlainText>
  },
  {
    id: 'break-complex-problem',
    categoryId: 'thinking',
    title: 'פירוק בעיות (Decomposition)',
    description: 'שימוש באלגוריתמיקה לפירוק משימות גדולות.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">גישה מודולרית לפתרון בעיות</h3>
      <p>
        מודלי שפה מצטיינים בפירוק משימות מופשטות וגדולות לרשימה של צעדים אופרטיביים (Decomposition). יכולת זו מסייעת להתגבר על "שיתוק ניתוחי" ומאפשרת תכנון ביצועי יעיל.
      </p>

      <h4 className="text-xl font-bold mt-4">יישום טכני</h4>
      <p>
        יש לבקש מהמודל לקחת את היעד הסופי ולפרק אותו לצעדים כרונולוגיים, קטנים וברורים.
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-orange-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: תכנון פרויקט</h5>
        <p className="text-sm font-bold text-slate-700">הבקשה:</p>
        <p className="text-sm italic bg-white p-3 border border-slate-200 rounded mb-2">
          "אני רוצה להקים פודקאסט. פרק את הפרויקט ל-10 צעדים מעשיים וקטנים, לפי סדר ביצוע הגיוני."
        </p>
        <p className="text-sm font-bold text-slate-700">הפלט:</p>
        <ul className="list-disc list-inside text-sm text-slate-600">
          <li>צעד 1: בחירת נושא ושם.</li>
          <li>צעד 2: הקלטת פיילוט קצר לבדיקת ציוד.</li>
          <li>...</li>
        </ul>
      </div>
    </PlainText>
  },
  {
    id: 'think-out-loud',
    categoryId: 'thinking',
    title: 'ארגון מחשבות: המרה מכאוס למבנה',
    description: 'עיבוד קלט לא מסודר לטקסט מובנה.',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">סידור וארגון מידע</h3>
      <p>
        לעיתים המידע הגולמי שברשותנו הוא מבולגן, אסוציאטיבי ולא ערוך (למשל, תמלול של הקלטה או רשימת נקודות מהירה). המודל יכול לשמש ככלי עריכה יעיל שממיר את ה"רעש" ל"אות" ברור ומסודר.
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-orange-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: סידור תמלול</h5>
        <p className="text-sm font-bold text-slate-700">קלט:</p>
        <p className="text-sm italic bg-white p-3 border border-slate-200 rounded mb-2 text-slate-500">
          (טקסט מבולגן של מחשבות, משפטים קטועים ורעיונות מעורבבים).
        </p>
        <p className="text-sm font-bold text-slate-700">הוראה:</p>
        <p className="text-sm mb-2">"ארגן את הטקסט הנ"ל. חלץ את העובדות המרכזיות וסדר אותן במבנה לוגי של בעיה-פתרון."</p>
        <p className="text-sm font-bold text-slate-700">תוצאה:</p>
        <p className="text-sm text-green-700">מסמך מסודר, מחולק לפסקאות עם כותרות, המציג את המידע בבהירות.</p>
      </div>
    </PlainText>
  },
  {
    id: 'new-angles',
    categoryId: 'thinking',
    title: 'סימולציה של פרספקטיבות',
    description: 'ניתוח נושא מנקודות מבט שונות.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">גיוון נקודות המבט</h3>
      <p>
        המודל מסוגל לאמץ פרסונות שונות ולנתח בעיה מתוכן. יכולת זו מסייעת לזהות נקודות עיוורון ולהבין את הצרכים של בעלי עניין שונים (לקוחות, עובדים, מתנגדים).
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-orange-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: ניתוח מוצר</h5>
        <p className="text-sm italic bg-white p-3 border border-slate-200 rounded">
          "נתח את הרעיון לאפליקציית ועד בית מ-3 נקודות מבט:
          <br/>
          1. דייר צעיר בשכירות.
          <br/>
          2. דייר מבוגר בבעלות.
          <br/>
          3. חברת ניהול חיצונית."
        </p>
        <p className="text-xs text-slate-500 mt-2">הפלט יציף אינטרסים מנוגדים ואתגרים פוטנציאליים בכל אחד מהמגזרים.</p>
      </div>
    </PlainText>
  },
  {
    id: 'real-critique',
    categoryId: 'thinking',
    title: 'ביקורת אובייקטיבית',
    description: 'שימוש במודל לזיהוי חולשות וכשלים.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">עקיפת מנגנון הריצוי</h3>
      <p>
        כברירת מחדל, המודל נוטה להיות "נחמד" ומסכים (Sycophancy). כדי לקבל משוב אמיתי ומועיל, יש להנחות אותו במפורש להיות ביקורתי, לחפש כשלים לוגיים ולזהות נקודות חולשה.
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-orange-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: ביקורת על מסמך</h5>
        <p className="text-sm italic bg-white p-3 border border-slate-200 rounded">
          "אני מציג לך את קורות החיים שלי. אל תיתן מחמאות. נתח אותם בעין ביקורתית של מגייס קפדן וציין 3 סיבות מדוע המסמך הזה עלול להידחות."
        </p>
        <p className="text-xs text-slate-500 mt-2">הפלט יספק הערות קונקרטיות לשיפור, ללא ריכוך מיותר.</p>
      </div>
    </PlainText>
  },
  {
    id: 'refine-idea-questions',
    categoryId: 'thinking',
    title: 'ראיון הפוך: המודל כשואל',
    description: 'שימוש במודל לשאילת שאלות מנחות.',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">איסוף מידע מובנה</h3>
      <p>
        במקום שהמשתמש ישאל והמודל יענה, ניתן להפוך את התפקידים. כאשר המודל שואל את המשתמש שאלות, הוא עוזר למשתמש לחדד את המחשבה ולאסוף את כל הפרטים הנדרשים ליצירת תוצר איכותי.
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-orange-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: אפיון צרכים</h5>
        <p className="text-sm italic bg-white p-3 border border-slate-200 rounded">
          "אני רוצה לכתוב דף 'אודות' לאתר. שאל אותי 5 שאלות מנחות שיעזרו לך להבין את הסיפור שלי, ורק לאחר שאענה עליהן - נסח את הטקסט."
        </p>
        <p className="text-xs text-slate-500 mt-2">המודל ינחה את המשתמש לספק את המידע המדויק ביותר עבור המשימה.</p>
      </div>
    </PlainText>
  },

  // ================= RELIABILITY (BLUE) =================
  {
    id: 'verify-answer',
    categoryId: 'reliability',
    title: 'אימות מידע (Fact Checking)',
    description: 'טכניקות לבדיקת אמינות התוצרים.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">גישה ספקנית</h3>
      <p>
        בהינתן שהמודל פועל בצורה הסתברותית, כל עובדה שהוא מציין (במיוחד מספרים, תאריכים ושמות) צריכה להיחשב כטיוטה הדורשת אימות. האחריות על בדיקת המידע מוטלת על המשתמש.
      </p>

      <h4 className="text-xl font-bold mt-4">שיטות לאימות</h4>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>חיפוש חיצוני:</strong> בדיקת פרטים ספציפיים בגוגל או במקורות מוסמכים.</li>
        <li><strong>בדיקת עקביות:</strong> השוואת נתונים בתוך הטקסט עצמו לאיתור סתירות.</li>
        <li><strong>הצלבה:</strong> שימוש במודל נוסף לבדיקת התוצר.</li>
      </ul>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-blue-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: זיהוי מידע שגוי</h5>
        <p className="text-sm">המודל מספק ציטוט מפורסם ומייחס אותו לאדם מסוים.</p>
        <p className="text-sm mt-2"><strong>פעולה נדרשת:</strong></p>
        <p className="text-sm">העתקת הציטוט למנוע חיפוש כדי לוודא את המקור האמיתי ואת הדיוק בניסוח.</p>
      </div>
    </PlainText>
  },
  {
    id: 'detect-hallucinations',
    categoryId: 'reliability',
    title: 'זיהוי המצאות (Fabrication)',
    description: 'מתי המודל נוטה לייצר מידע לא מבוסס.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">אזורי סיכון</h3>
      <p>
        ישנם נושאים שבהם ההסתברות להמצאת מידע (מה שנקרא לעיתים "הזיות") גבוהה יותר. אלו לרוב תחומים הדורשים דיוק עובדתי ספציפי מאוד שאינו נפוץ מספיק בנתוני האימון.
      </p>

      <h4 className="text-xl font-bold mt-4">סימני אזהרה</h4>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>ביוגרפיות:</strong> פרטים על אנשים שאינם מפורסמים מאוד בקנה מידה עולמי.</li>
        <li><strong>הפניות (References):</strong> ציטוט שמות של מאמרים, פסקי דין או ספרים ספציפיים.</li>
        <li><strong>כתובות URL:</strong> לינקים לאתרים (המודל לרוב בונה את מבנה הלינק, אך הלינק עצמו שבור).</li>
      </ul>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-blue-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: הפניות פיקטיביות</h5>
        <p className="text-sm mb-2">בקשה לפסקי דין בנושא ספציפי עלולה להניב שמות של תיקים משפטיים שנשמעים הגיוניים, אך לא היו ולא נבראו. חובה לבדוק כל אסמכתא במאגר משפטי אמיתי.</p>
      </div>
    </PlainText>
  },
  {
    id: 'ask-sources',
    categoryId: 'reliability',
    title: 'בקשת מקורות בצורה נכונה',
    description: 'כיצד להנחות את המודל להתבסס על מידע קיים בלבד.',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">Grounding (עיגון במידע)</h3>
      <p>
        כדי למזער את הסיכון להמצאת מידע, יש להשתמש בכלים המחוברים לאינטרנט בזמן אמת, ולהנחות את המודל להשתמש אך ורק במידע שמצא.
      </p>

      <h4 className="text-xl font-bold mt-4">הנחיות מגבילות</h4>
      <p>
        יש להוסיף לקלט הוראה כגון: "התבסס אך ורק על המידע שמצאת. אם אינך מוצא מקור אמין לטענה מסוימת, ציין זאת במפורש ואל תכתוב אותה."
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-blue-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: אילוץ לאמינות</h5>
        <p className="text-sm bg-white p-2 rounded border border-slate-200">
          "כתוב סקירה על הנושא, וכלול לינק פעיל לכל מקור. אם אין מקור זמין - אל תכלול את הטענה."
        </p>
        <p className="text-xs text-slate-500 mt-2">הנחיה זו מצמצמת את הנטייה של המודל להשלים פערים באמצעות המצאות.</p>
      </div>
    </PlainText>
  },
  {
    id: 'cross-reference',
    categoryId: 'reliability',
    title: 'הצלבת מודלים (Model Triangulation)',
    description: 'שימוש במספר מודלים לבקרת איכות.',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">בדיקה הדדית</h3>
      <p>
        מודלים שונים (למשל GPT-4, Claude 3, Gemini) אומנו על נתונים שונים ובעלי ארכיטקטורה שונה. הסבירות ששני מודלים שונים יבצעו בדיוק את אותה טעות עובדתית באותו אופן נמוכה יותר.
      </p>

      <h4 className="text-xl font-bold mt-4">תהליך העבודה</h4>
      <p>
        ניתן לקחת את הפלט ממודל א' ולהזין אותו למודל ב' עם הבקשה: "בצע בדיקת עובדות לטקסט הבא ואתר אי-דיוקים."
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-blue-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: בקרת איכות</h5>
        <p className="text-sm">קוד שנכתב על ידי מודל אחד נבדק על ידי מודל שני לאיתור באגים לוגיים לפני הרצה.</p>
      </div>
    </PlainText>
  },
  {
    id: 'fact-vs-opinion',
    categoryId: 'reliability',
    title: 'זיהוי הטיות (Bias)',
    description: 'הבחנה בין עובדות לבין הדעה הרווחת בנתוני האימון.',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">שיקוף הדאטה</h3>
      <p>
        המודלים משקפים את המידע עליו אומנו. מכיוון שהאינטרנט מכיל הטיות תרבותיות ודעות רווחות, המודל עשוי להציג דעה פופולרית כעובדה מוחלטת.
      </p>

      <h4 className="text-xl font-bold mt-4">חשיפת המורכבות</h4>
      <p>
        כדי לקבל תמונה מאוזנת, מומלץ לשאול שאלות שמכריחות את המודל להציג צדדים שונים: "האם יש קונצנזוס בנושא זה? הצג את הטיעונים המרכזיים של המתנגדים."
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-blue-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: נושא שנוי במחלוקת</h5>
        <p className="text-sm">במקום לשאול "האם עבודה מהבית טובה?", יש לשאול "מהם היתרונות והחסרונות של עבודה מהבית לפי מחקרים עדכניים?"</p>
      </div>
    </PlainText>
  },

  // ================= PERSONAL (PURPLE) =================
  {
    id: 'sensitive-message',
    categoryId: 'personal',
    title: 'ניסוח מסרים רגישים',
    description: 'שימוש במודל לניסוח מחדש וריכוך טקסטים.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">עיבוד טקסט רגשי</h3>
      <p>
        המודל יכול לשמש ככלי עריכה לניסוח הודעות בטון רגוע ושקול. ניתן להזין טיוטה שנכתבה מתוך כעס או סערת רגשות, ולבקש מהמודל לנסח אותה מחדש באופן ענייני, מכבד ופרודוקטיבי (למשל, ברוח תקשורת מקרבת).
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-purple-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: עריכת הודעה</h5>
        <p className="text-sm font-bold text-slate-700">קלט:</p>
        <p className="text-sm italic text-slate-500 mb-2">"אני כועס על השותף שלי שלא שטף כלים."</p>
        <p className="text-sm font-bold text-slate-700">הוראה:</p>
        <p className="text-sm bg-white p-2 rounded border border-slate-200 mb-2">"נסח הודעה המבקשת ממנו לשטוף כלים, תוך שימוש בשפה חיובית והימנעות מהאשמות."</p>
        <p className="text-sm font-bold text-slate-700">פלט:</p>
        <p className="text-sm text-green-700">"היי, אשמח אם תוכל להתפנות לשטיפת הכלים כשתסיים, תודה!"</p>
      </div>
    </PlainText>
  },
  {
    id: 'prep-important-convo',
    categoryId: 'personal',
    title: 'סימולציה לשיחות (Role Play)',
    description: 'תרגול תרחישי שיחה עם המודל.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">אימון לקראת אירוע</h3>
      <p>
        ניתן להשתמש במודל כדי לתרגל שיחות חשובות (ראיון עבודה, משא ומתן, שיחת שכר). המודל יקבל הנחיה לגלם את הצד השני בשיחה ולהגיב לטיעונים של המשתמש.
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-purple-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: הכנה לראיון</h5>
        <p className="text-sm italic bg-white p-3 border border-slate-200 rounded">
          "גלם מראיין עבודה קפדן לתפקיד ניהולי. שאל אותי שאלה, המתן לתשובה שלי, ואז הגב בהתאם. לאחר 3 שאלות תן משוב על הביצועים שלי."
        </p>
        <p className="text-xs text-slate-500 mt-2">תרגול זה מאפשר להתכונן לשאלות קשות בסביבה בטוחה.</p>
      </div>
    </PlainText>
  },
  {
    id: 'plan-week-month',
    categoryId: 'personal',
    title: 'ארגון וניהול זמן',
    description: 'בניית לו"ז מותאם אישית על בסיס רשימת מטלות.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">אופטימיזציה של משימות</h3>
      <p>
        המודל יכול לקבל רשימה ארוכה ולא מסודרת של מטלות, יחד עם אילוצי זמן, ולסדר אותן בתוך טבלה הגיונית המפרידה בין סוגי משימות (דחוף, חשוב, סידורים).
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-purple-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: תכנון שבועי</h5>
        <p className="text-sm italic bg-white p-3 border border-slate-200 rounded mb-2">
          "שבץ את המשימות הבאות בלו"ז שבועי. אילוצים: עבודה בין 9-17, חוג ביום ג'."
        </p>
        <p className="text-xs text-slate-500 mt-2">התוצאה היא תוכנית עבודה מסודרת הלוקחת בחשבון את האילוצים שהוגדרו.</p>
      </div>
    </PlainText>
  },
  {
    id: 'summarize-official-doc',
    categoryId: 'personal',
    title: 'פישוט מסמכים בירוקרטיים',
    description: 'חילוץ שורות תחתונות ממסמכים מורכבים.',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">תרגום לשפה פשוטה</h3>
      <p>
        מסמכים רשמיים כתובים לעיתים בשפה משפטית סבוכה. המודל יכול לסרוק את הטקסט ולחלץ ממנו את המידע האופרטיבי הרלוונטי למשתמש (מה צריך לעשות, מתי, ומה הסנקציה).
      </p>
      <p className="bg-red-50 p-2 text-red-800 text-sm font-bold border-r-4 border-red-500 mb-2">
        חובה למחוק פרטים מזהים מהמסמך לפני הזנתו למודל!
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-purple-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: מכתב רשמי</h5>
        <p className="text-sm italic bg-white p-3 border border-slate-200 rounded">
          "קרא את הטקסט המצורף וענה בקצרה: מה הפעולה הנדרשת ממני ומה הדדליין?"
        </p>
        <p className="text-xs text-slate-500 mt-2">הפלט יציג רק את המידע החיוני לפעולה.</p>
      </div>
    </PlainText>
  },

  // ================= WORK (BROWN) =================
  {
    id: 'polite-emails',
    categoryId: 'work',
    title: 'כתיבת מיילים: מכוונה לטקסט',
    description: 'המרה של נקודות קצרות למייל מנוסח היטב.',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">חיסכון בזמן ניסוח</h3>
      <p>
        במקום לנסח את המייל המלא, ניתן לכתוב את הכוונה (Intent) ואת הנקודות העיקריות בקצרה, ולבקש מהמודל לעטוף זאת בנוסח המקובל (רשמי, מנומס, אסרטיבי וכו').
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-amber-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: מייל תזכורת</h5>
        <p className="text-sm font-bold text-slate-700">קלט:</p>
        <p className="text-sm italic bg-white p-3 border border-slate-200 rounded mb-2 text-slate-500">
          "כתוב לדני שהדוח חסר, אני צריך אותו עד מחר ב-10 לישיבה. תהיה מנומס אבל ברור."
        </p>
        <p className="text-sm font-bold text-slate-700">פלט:</p>
        <p className="text-sm text-green-700">"היי דני, עברתי על החומר ושמתי לב שהדוח חסר. כדי שנהיה מוכנים לישיבה, אודה לקבלתו עד מחר ב-10:00. תודה."</p>
      </div>
    </PlainText>
  },
  {
    id: 'presentation-structure',
    categoryId: 'work',
    title: 'בניית שלד למצגות',
    description: 'יצירת מבנה לוגי וסיפורי (Storytelling) למצגת.',
    readTimeMinutes: 6,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">ארגון התוכן לפני העיצוב</h3>
      <p>
        המודל יכול לסייע בתכנון הנרטיב של המצגת. ניתן לספק לו את הנתונים הגולמיים ואת המטרה, ולבקש ממנו להציע ראשי פרקים (Outline) לכל שקף, כולל הכותרת והמסר העיקרי.
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-amber-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: מבנה מצגת</h5>
        <p className="text-sm italic bg-white p-3 border border-slate-200 rounded">
          "תכנן מבנה ל-5 שקפים להצגת תוצאות רבעוניות. המטרה: להראות צמיחה למרות ההוצאות הגבוהות. לכל שקף ציין כותרת ומסר מרכזי."
        </p>
        <p className="text-xs text-slate-500 mt-2">התוצאה היא שלד תוכן מוכן לעבודה.</p>
      </div>
    </PlainText>
  },
  {
    id: 'data-analysis',
    categoryId: 'work',
    title: 'ניתוח נתונים בסיסי',
    description: 'שימוש במודל להפקת תובנות מטבלאות וקבצים.',
    readTimeMinutes: 6,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">תשאול המידע</h3>
      <p>
        מודלים מתקדמים (התומכים בהעלאת קבצים) מסוגלים לקרוא קבצי נתונים (כגון Excel או CSV) ולענות על שאלות לגביהם בשפה טבעית, ללא צורך בכתיבת נוסחאות מורכבות.
      </p>
      <p className="bg-red-50 p-2 text-red-800 text-sm font-bold border-r-4 border-red-500">
        אזהרה: ודאו שאין בקובץ מידע רגיש או פרטים מזהים לפני ההעלאה.
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-amber-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: שאלות על דאטה</h5>
        <p className="text-sm text-slate-600 mb-2">לאחר העלאת קובץ מכירות:</p>
        <ul className="list-disc list-inside text-sm text-slate-600 bg-white p-3 border border-slate-200 rounded">
          <li>"מהם 3 המוצרים הרווחיים ביותר?"</li>
          <li>"האם יש ירידה במכירות בחודשי הקיץ?"</li>
          <li>"צור גרף המשווה בין השנה לשנה שעברה."</li>
        </ul>
      </div>
    </PlainText>
  },

  // ================= AUTOMATION (RED) =================
  {
    id: 'manual-vs-auto',
    categoryId: 'automation',
    title: 'עבודה ידנית מול אוטומציה',
    description: 'ההבדל בין שימוש בצ\'אט לשימוש ב-API.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">קנה המידה של העבודה</h3>
      <p>
        שימוש <strong>ידני</strong> (ממשק צ'אט) מתאים למשימות הדורשות יצירתיות, שיקול דעת ובקרה אנושית צמודה.
        <br/>
        שימוש <strong>אוטומטי</strong> (חיבור מערכות דרך API) מתאים למשימות טכניות, חזרתיות ומוגדרות היטב (כמו סיווג מיילים או חילוץ נתונים מטפסים).
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-red-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: טיפול בפניות</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="text-slate-600 font-bold block mb-1">ידני:</span>
            <p className="text-sm">העתקת כל פנייה לצ'אט וניסוח תשובה אישית.</p>
          </div>
          <div>
            <span className="text-red-600 font-bold block mb-1">אוטומטי:</span>
            <p className="text-sm">מערכת שמזהה אוטומטית את נושא הפנייה ומנתבת אותה למחלקה המתאימה ב-CRM.</p>
          </div>
        </div>
      </div>
    </PlainText>
  },
  {
    id: 'automation-value',
    categoryId: 'automation',
    title: 'שיקולי עלות-תועלת (ROI)',
    description: 'מתי משתלם להקים אוטומציה?',
    readTimeMinutes: 6,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">מתי לאטמט?</h3>
      <p>
        בניית אוטומציה דורשת משאבי פיתוח ותחזוקה. היא משתלמת רק כאשר מתקיימים שני תנאים:
        <br/>
        1. <strong>נפח גבוה:</strong> המשימה חוזרת על עצמה פעמים רבות.
        <br/>
        2. <strong>חוקיות ברורה:</strong> ניתן להגדיר במדויק מה נחשב להצלחה ומה לכישלון, עם סיכון נמוך לטעויות של המודל.
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-red-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: החלטה</h5>
        <div className="space-y-4">
          <div>
            <span className="font-bold text-slate-700">לא משתלם:</span>
            <p className="text-sm text-slate-600">כתיבת ברכות יום הולדת לצוות קטן (עדיף ידני ואישי).</p>
          </div>
          <div>
            <span className="font-bold text-slate-700">משתלם:</span>
            <p className="text-sm text-slate-600">תיוג וסיווג של 500 לידים ביום שנכנסים מהאתר.</p>
          </div>
        </div>
      </div>
    </PlainText>
  },

  // ================= SAFETY (LOCK) =================
  {
    id: 'allowed-forbidden',
    categoryId: 'safety',
    title: 'אבטחת מידע ופרטיות',
    description: 'מה אסור להזין למערכות ציבוריות.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">המידע כחומר אימון</h3>
      <p>
        במערכות AI ציבוריות רבות, המידע המוזן על ידי המשתמשים עשוי לשמש לאימון ושיפור הגרסאות הבאות של המודל. משמעות הדבר היא שמידע רגיש עלול, תיאורטית, להיחשף.
      </p>

      <h4 className="text-xl font-bold mt-4">מידע שאסור להזין (PII & IP)</h4>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>פרטים מזהים:</strong> תעודות זהות, מספרי אשראי, כתובות, מידע רפואי.</li>
        <li><strong>קניין רוחני וסודות מסחריים:</strong> קוד מקור קריטי, אסטרטגיות לא מפורסמות, נתונים עסקיים פנימיים.</li>
        <li><strong>פרטי גישה:</strong> סיסמאות ומפתחות הצפנה.</li>
      </ul>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-emerald-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">טכניקת האנונימיזציה (Sanitization)</h5>
        <p className="text-sm text-slate-600">יש להסיר ידנית כל פרט מזהה לפני ההדבקה לצ'אט:</p>
        <ul className="list-disc list-inside text-sm text-slate-600 bg-white p-3 border border-slate-200 rounded mt-2">
          <li>החלפת שמות ב-"[שם בדוי]".</li>
          <li>שינוי נתונים מספריים רגישים כך שהיחס ביניהם ישמר אך המספר המוחלט ישתנה.</li>
        </ul>
      </div>
    </PlainText>
  },
  {
    id: 'kids-usage',
    categoryId: 'safety',
    title: 'חינוך לשימוש אחראי ב-AI',
    description: 'עקרונות מנחים לנוער וילדים.',
    readTimeMinutes: 7,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">אוריינות טכנולוגית</h3>
      <p>
        השימוש ב-AI הופך למיומנות בסיסית. האתגר החינוכי אינו מניעת השימוש, אלא פיתוח חשיבה ביקורתית והבנת המגבלות של הכלי.
      </p>

      <h4 className="text-xl font-bold mt-4">עקרונות מנחים</h4>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>שקיפות:</strong> ציון העובדה שנעשה שימוש בכלי עזר.</li>
        <li><strong>אימות:</strong> החובה לבדוק כל עובדה שהמודל מציין.</li>
        <li><strong>פרטיות:</strong> איסור על שיתוף פרטים אישיים או תמונות עם המערכת.</li>
      </ul>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-emerald-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: למידה מול העתקה</h5>
        <div className="space-y-4">
          <div>
            <span className="text-red-600 font-bold block mb-1">שימוש פסיבי:</span>
            <p className="text-sm italic">"כתוב לי חיבור על הרצל." (העתקה ללא למידה)</p>
          </div>
          <div>
            <span className="text-green-600 font-bold block mb-1">שימוש אקטיבי:</span>
            <p className="text-sm italic">"תן לי 3 עובדות מעניינות על הרצל שיעזרו לי לכתוב פתיחה מעניינת לעבודה." (שימוש ככלי מחקר)</p>
          </div>
        </div>
      </div>
    </PlainText>
  },

  // ================= MASTER (BRAIN) =================
  {
    id: 'master-guide-full',
    categoryId: 'master',
    title: 'מתודולוגיית עבודה סדורה',
    description: 'שלבים מובנים לעבודה מקצועית עם מודלי שפה.',
    readTimeMinutes: 15,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">תהליך עבודה (Workflow)</h3>
      <p>
        עבודה מקצועית עם AI אינה מסתכמת בשאלה ותשובה בודדת, אלא בתהליך מובנה הכולל מספר שלבים.
      </p>

      <h4 className="text-xl font-bold mt-4">שלבי העבודה</h4>
      <ol className="list-decimal list-inside space-y-2">
        <li><strong>הכנה (Pre-Prompting):</strong> הגדרת המטרה ואיסוף המידע הדרוש.</li>
        <li><strong>בניית הקלט (Prompting):</strong> שימוש במבנה מסודר (כגון CPF) והוספת דוגמאות במידת הצורך.</li>
        <li><strong>איטרציה (Refinement):</strong> קבלת הפלט הראשוני ומתן משוב לשיפור ודיוק.</li>
        <li><strong>בקרה (Validation):</strong> בדיקה אנושית של התוצר הסופי, אימות עובדות ועריכה.</li>
      </ol>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-indigo-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">סיכום התהליך</h5>
        <p className="text-sm text-slate-700">
          המעבר משלב לשלב מבטיח שהתוצר הסופי יהיה איכותי, אמין ומותאם לצורך, תוך מזעור הסיכונים הטבועים בשימוש במודל סטטיסטי.
        </p>
      </div>
    </PlainText>
  },
  {
    id: 'master-asking',
    categoryId: 'master',
    title: 'טכניקות מתקדמות (Chain of Thought)',
    description: 'שיפור יכולות הסקה לוגית.',
    readTimeMinutes: 12,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">פירוט שלבי המחשבה</h3>
      <p>
        טכניקה בשם <strong>Chain of Thought (CoT)</strong> הוכחה מחקרית כמשפרת את ביצועי המודל במשימות הדורשות לוגיקה או חישוב. הרעיון הוא לגרום למודל לייצר את שלבי הביניים של הפתרון לפני מתן התשובה הסופית.
      </p>

      <h4 className="text-xl font-bold mt-4">יישום הטכניקה</h4>
      <p>
        הוספת הביטוי: <strong>"Let's think step by step"</strong> (בוא נחשוב צעד אחר צעד) לקלט. הדבר מאפשר למודל "זמן חישוב" נוסף (יצירת טוקנים של הסבר) ומקטין את הסיכוי לקפיצה למסקנה שגויה.
      </p>

      <h4 className="text-xl font-bold mt-4">שימוש במפרידים (Delimiters)</h4>
      <p>
        שימוש בסימנים כמו מרכאות משולשות (""") או סולמיות (###) כדי להפריד בבירור בין ההוראות לבין הטקסט עליו יש לעבוד, מסייע למודל להבין את המבנה בצורה טובה יותר.
      </p>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-indigo-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">דוגמה: שימוש במפרידים</h5>
        <div className="bg-white p-3 border border-slate-200 rounded text-sm font-mono text-slate-700">
          <p>המשימה: סכם את הטקסט המופיע בין המרכאות המשולשות.</p>
          <p>הטקסט:</p>
          <p>"""</p>
          <p>[טקסט ארוך לסיכום]</p>
          <p>"""</p>
        </div>
      </div>
    </PlainText>
  },
  {
    id: 'zero-to-hero',
    categoryId: 'master',
    title: 'מסלול התפתחות מקצועי',
    description: 'שלבים בהטמעת כלי AI בשגרת העבודה.',
    readTimeMinutes: 8,
    lastUpdated: '03/2024',
    content: <PlainText>
      <h3 className="text-2xl font-bold text-slate-900">שלבי אימוץ הטכנולוגיה</h3>
      <p>
        השימוש ב-AI הוא מיומנות נרכשת המתפתחת בהדרגה. אין צורך ללמוד את כל הכלים בבת אחת.
      </p>

      <h4 className="text-xl font-bold mt-4">מודל 4 השלבים</h4>
      <ol className="list-decimal list-inside space-y-2">
        <li><strong>המשתמש המזדמן:</strong> שימוש נקודתי למשימות פשוטות (ניסוח, רעיונות).</li>
        <li><strong>משתמש הכוח (Power User):</strong> עבודה יומיומית, הבנת חשיבות הפרומפטים ושמירת תבניות עבודה.</li>
        <li><strong>הבונה (Builder):</strong> יצירת פרומפטים מורכבים, שימוש ב-Custom Instructions ואוטומציות פשוטות.</li>
        <li><strong>המשלב (Integrator):</strong> הטמעה מלאה בתהליכי עבודה עסקיים, חיבור ל-API וניהול מערכות.</li>
      </ol>

      <div className="bg-slate-100 p-6 rounded-xl border-r-4 border-indigo-500 mt-6">
        <h5 className="font-bold text-slate-900 mb-2">המלצה לצעד הבא</h5>
        <p className="text-sm">
          בחרו משימה אחת שגרתית שאתם מבצעים ידנית (כגון מענה למיילים או תכנון לו"ז) ונסו לבצע אותה במשך שבוע שלם בסיוע AI, תוך יישום עקרונות הנדסת הפרומפט שנלמדו.
        </p>
      </div>
    </PlainText>
  },
];
