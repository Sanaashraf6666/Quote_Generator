const quote = document.getElementById("quote");
const author = document.getElementById("author");

const ayats = [
  { text: "وَقُل رَّبِّ زِدْنِي عِلْمًا", author: "سورة طه: 114" },
  { text: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", author: "سورة الشرح: 6" },
  { text: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", author: "سورة البقرة: 153" },
  { text: "وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ", author: "سورة النحل: 127" },
  { text: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا", author: "سورة الطلاق: 2" },
  { text: "وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ", author: "سورة الإسراء: 36" },
  { text: "وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ", author: "سورة التغابن: 2" },
  { text: "وَاعْبُدْ رَبَّكَ حَتَّى يَأْتِيَكَ الْيَقِينُ", author: "سورة الحجر: 99" },
  { text: "وَقُل رَّبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ", author: "سورة المؤمنون: 97" },
  { text: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ", author: "سورة الحجرات: 10" },
  { text: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا", author: "سورة آل عمران: 8" },
  { text: "وَقُل رَّبِّ زِدْنِي عِلْمًا", author: "سورة طه: 114" },
  { text: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ", author: "سورة هود: 88" },
  { text: "إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ", author: "سورة فاطر: 28" },
  { text: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ", author: "سورة الأنبياء: 30" },
  { text: "وَالصُّبْحِ إِذَا تَنَفَّسَ", author: "سورة الطارق: 18" },
  { text: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ", author: "سورة البقرة: 186" },
  { text: "فَاذْكُرُونِي أَذْكُرْكُمْ", author: "سورة البقرة: 152" },
  { text: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا", author: "سورة آل عمران: 139" },
  { text: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا", author: "سورة الطلاق: 2" },
  { text: "وَلَا تَقْرَبُوا الزِّنَا", author: "سورة الإسراء: 32" },
  { text: "إِنَّ اللَّهَ لا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنْفُسِهِمْ", author: "سورة الرعد: 11" },
  { text: "وَأَحْسِنْ كَمَا أَحْسَنَ اللَّهُ إِلَيْكَ", author: "سورة القصص: 77" },
  { text: "إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ", author: "سورة البقرة: 195" },
  { text: "وَلَا تَسْتَكْبِرْ وَاسْتَغْفِرْ رَبَّكَ", author: "سورة النمل: 22" },
  { text: "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا", author: "سورة العنكبوت: 69" },
  { text: "وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ", author: "سورة النحل: 127" },
  { text: "وَإِنَّ مَعَ الْعُسْرِ يُسْرًا", author: "سورة الشرح: 5" },
  { text: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", author: "سورة الشرح: 6" },
  { text: "إِنَّ رَبِّي عَلَىٰ صِرَاطٍ مُسْتَقِيمٍ", author: "سورة هود: 56" },
  { text: "وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ", author: "سورة التغابن: 2" },
  { text: "وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ", author: "سورة القلم: 4" },
  { text: "وَتَوَكَّلْ عَلَى اللَّهِ وَكَفَىٰ بِاللَّهِ وَكِيلًا", author: "سورة النساء: 81" },
  { text: "وَقُل رَّبِّ زِدْنِي عِلْمًا", author: "سورة طه: 114" },
  { text: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا", author: "سورة الطلاق: 2" },
  { text: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", author: "سورة البقرة: 153" },
  { text: "وَاللَّهُ غَفُورٌ رَّحِيمٌ", author: "سورة النساء: 96" },
  { text: "قُلْ هُوَ اللَّهُ أَحَدٌ", author: "سورة الإخلاص: 1" },
  { text: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ", author: "سورة النور: 35" }
];

window.getayat = function() {
  const random = ayats[Math.floor(Math.random() * ayats.length)];
  quote.innerHTML = random.text;
  author.innerHTML = random.author;
};

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(quote.innerHTML + " ---- " + author.innerHTML),
    "Tweet Window",
    "width=600, height=300"
  );
}

getayat();
