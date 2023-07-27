// "use strict";
// // Home work
// // /* 1. Ikkita son berilgan. Ularning yeg'indisini topuvchi dastur tuzing.*/

// let firstNumber = + prompt("Birinchi sonni kiriting");
// let secondNumber = + prompt("Ikkinchi sonni kiriting");
// let total = firstNumber + secondNumber;
// console.log(" Yig'indi", total);
// // ===================================================
// // /* 2. Uchta son berilgan. Ularning o'rta arifmetigini topuvchi dastur tuzing. */
// let firstNumber = + prompt("Birinchi sonni kiriting");
// let secondNumber = + prompt("Ikkinchi sonni kiriting");
// let thirdNumber = + prompt("Uchinchi sonni kiriting");
// let middleArithmetic = (firstNumber + secondNumber + thirdNumber) / 3;
// console.log("O'rta arfimetigi", middleArithmetic);
// // =============================================
// // /* 3. Ikkita son berilgan. Ularning kvadratlari yeg'indisi topuvchi dastur tuzing.*/
// let firstNumber = + prompt("Birinchi sonni kiriting");
// let secondNumber = + prompt("Ikkinchi sonni kiriting");
// // let total = firstNumber ** 2 + secondNumber ** 2;
// // console.log( "Yig'indi",  total);
// // ==============================================

// // /*4. Aylananing diametri D berilgan. Aylani uznunligi L ni topuvchida dastur tuzing. */

// // let circleDiameter = 1 * prompt("Aylana diametrining qiymatini kiriting");
// // const PI = 3.14;
// // let circleLength = PI * circleDiameter;
// // console.log("Aylana uzunligi ", circleLength);
// // ===============================================

// // /*5. Doiraning uzunligi L berilgan. Uning radiusi R va yuzasi S ni topuvchi daastur tuzing. */
// let circleLength = + prompt("Aylan uzunligi"); //L = 2*PI*R
// const PI = 3.14;
// let circleRadius = circleLength / (2 * PI); // R=L/2*PI
// let circleFace = circleRadius ** 2 * PI; // S=R^2*PI
// console.log("Aylananing radiusi ", circleRadius);
// console.log("Aylana yuzasi ", circleFace);
// // =================================================

// // /*6. Doiraning yuzasi S berilgan. Uning radiusi R va diamterini D ni topuvchi dastur tuzing. */
// let circleFace = + prompt("Aylana yuzasi");
// const PI = 3.14;
// let circleRadius = (circleFace / PI) ** 1 / 2;
// let circleDiameter = circleRadius * 2;
// console.log("Aylananing radiusi ", circleRadius);
// console.log("Aylana diametri ", circleDiameter);
// //===================================================
// // /*7. Faylning hajmi baytlarda berilgan. Uning kilobaytdagi hajmini topuvchi dastur tuzing.  */
// let faylBayt = + prompt("Faylning baytdagi qiymatini kiriting");
// let faylKiloBayt = faylBayt * 10 ** 3;
// console.log("Faylning kilobaytdagi qiymat ", faylKiloBayt);
// //==================================================
// // /*8. A va B musbat son berilgan (A > B). A uzunlikdagi kesmaga B uzunlikdagi kesmadan necha marta joylashtirish mumkin. Misol uchun, 16 sm lik kesmaga 5 sm lik kesmadan 3 ta joylashtirish mumkin. */
// let firstCrossSection = + prompt("Birinchi kesmanining uzunligini kiriting");
// let secondtCrossSection =
//   + prompt("Ikkinchi kesmanining uzunligini kiriting");
// let numberCrossSection =
//   (firstCrossSection - (firstCrossSection % secondtCrossSection)) /
//   secondtCrossSection;
// console.log(numberCrossSection, "ta kesma joylashtirib bo'ladi");
// // /*9. A va B musbat son berilgan (A > B). A uzunlikdagi kesmaga B uzunlikdagi kesmadan necha marta joylashtirish mumkin va shunindke A kesmaqa qancha joy ortib qoladi. Misol uchun, 16 sm lik kesmaga 5 sm lik kesmadan 3 ta joylashtirish mumkin va 1 sm lik joy ortib qoladi. */
// let firstCrossSection = + prompt("Birinchi kesmanining uzunligini kiriting");
// let secondtCrossSection =
//   1 * prompt("Ikkinchi kesmanining uzunligini kiriting");
// let numberCrossSection =
//   (firstCrossSection - (firstCrossSection % secondtCrossSection)) /
//   secondtCrossSection;
// let numberCrossSection_1 = firstCrossSection % secondtCrossSection;
// console.log(numberCrossSection);
// console.log(numberCrossSection_1, "sm");
// // /*10. Ikki xonali son berilgan. Uning raqamlari kvadrati yeg'indisini topuvchi dastur tuzing. */
// let number = + prompt("Ikki xonali son kiriting");
// let num_1 = (number - (number % 10)) / 10;
// let num_2 = number % 10;
// let total = num_1 ** 2 + num_2 ** 2;
// console.log(total);

// /*11. Ikki xonali son berilgan. Uning raqamlari o'rnini almashtirish natijasida hosil bo'lgan sonni topuvchi dastur tuzing. */
// let number = + prompt("Ikki xonali son kiriting");
// let num_1 = (number - (number % 10)) / 10;
// let num_2 = number % 10;
// let total = num_2 * 10 + num_1;
// console.log(total);

// // /*12. Uch xonali son berilgan. Uning yuzlar xonasidagi raqamini aniqlovchid dastur tuzing. */
// let number = + prompt("Uch xonali son kiriting");
// let num_1 = (number - (number % 100)) / 100;
// console.log(num_1);

// // /*13. Uch xonali son berilgan. Uning raqamlari yeg'indisini topuvchi dastur tuzing. */
// let number = + prompt("Uch xonali son kiriting");
// let middleNum = ((number % 100) - (number % 10)) / 10;
// let lastNum = number % 10;
// let firstNum = (number - (number % 100)) / 100;
// let total = firstNum + middleNum + lastNum;
// console.log(total);

// // /*14. Uch xonali son berilgan. Uning raqamlarini teskari tartibda yozish natijasida hosil bo'lgan sonni topuvchi dastur tuzing. */
// let number = + prompt("Uch xonali son kiriting");
// let middleNum = ((number % 100) - (number % 10)) / 10;
// let lastNum = number % 10;
// let firstNum = (number - (number % 100)) / 100;
// let total = firstNum * 1 + middleNum * 10 + lastNum * 100;
// console.log(total);

// // /*15. Uch xonali son berilgan. Uning chapdan birinchi raqamini o'chirib oxiriga yozishdan hosil bo'lgan sonni topuvchi dastur tuzing. Misol uchun, 324 -> 243 */
// let number = + prompt("Uch xonali son kiriting");
// let firstNum = (number - (number % 100)) / 100;
// let num_1 = number % 100;
// let newNum = firstNum + num_1 * 10;
// console.log(newNum);

// // /*16. Uch xonali son berilgan. Uning o'ngdagi birinchi raqamini o'chirib boshiga yozishdan hosil bo'lgan sonni topuvchi dastur tuzing. Misol uchun, 457 -> 745 */
// let number = + prompt("Uch xonali son kiriting");
// let lastNum = number % 10;
// let num_1 = (number - (number % 10)) / 10;
// let newNum = num_1 + lastNum * 100;
// console.log(newNum);

// // /*17. Uch xonali son berilgan. Uning o'nliklar xonasidagi son bilan birliklar xonasidagi sonni almashtirish nastijasida hosil bo'lgan sonni topuvchi dastur tuzing. Misol uchun, 653 -> 635 */
// let number = + prompt("Uch xonali son kiriting");
// let middleNum = ((number % 100) - (number % 10)) / 10;
// let firstNum = (number - (number % 100)) / 100;
// let lastNum = number % 10;
// let newNum = firstNum * 100 + lastNum * 10 + middleNum;
// console.log(newNum);

// // /*18. Uch xonali son berilgan. Uning o'nliklar xonasidagi son bilan yuzliklar xonasidagi sonni almashtirish nastijasida hosil bo'lgan sonni topuvchi dastur tuzing. Misol uchun, 675 -> 765 */
// let number = + prompt("Uch xonali son kiriting");
// let middleNum = ((number % 100) - (number % 10)) / 10;
// let firstNum = (number - (number % 100)) / 100;
// let lastNum = number % 10;
// let newNum = firstNum * 10 + lastNum * 1 + middleNum * 100;
// console.log(newNum);

// // /*19. To'rt xonali son berilgan. Uning raqamlarini teskari tartibda yozish natijasida hosil bo'lgan sonni topuvchi dastur tuzing. */
// let number = + prompt("to'rt xonali xonali son kiriting");
// let firstNum = (number - (number % 1000)) / 1000;
// let lastNum = number % 10;
// let secondNum = ((number % 1000) - ((number % 1000) % 100)) / 100;
// let thirdNum = ((number % 100) - ((number % 100) % 10)) / 10;
// let newNum = lastNum * 1000 + thirdNum * 100 + secondNum * 10 + firstNum;
// console.log(newNum);

// // // /*20. 999 dan katta bo'lgan istalgan berilgan. Ushbu sonni bo'lib butunini olish (/) va bo'lib qoldig'ini olish (%) amalari orqali o'nliklar xonasidagi raqamni topuvchi dastur tuzing. */
// let number = + prompt("999dan katta son kiriting");
// let newNum = ((number % 100) - ((number % 100) % 10)) / 10;
// if (number > 999) {
//   console.log(newNum);
// } else {
//   console.log("999dan katta son kiriting");
// }

// // /*21. 999 dan katta bo'lgan istalgan berilgan. Ushbu sonni bo'lib butunini olish (/) va bo'lib qoldig'ini olish (%) amalari orqali yuzliklar xonasidagi raqamni topuvchi dastur tuzing. */
// let number = + prompt("999dan katta son kiriting");
// let newNum = ((number % 1000) - ((number % 1000) % 100)) / 100;
// if (number > 999) {
//   console.log(newNum);
// } else {
//   console.log("999dan katta son kiriting");
// }

// /*22. 999 dan katta bo'lgan istalgan berilgan. Ushbu sonni bo'lib butunini olish (/) va bo'lib qoldig'ini olish (%) amalari orqali mingliklar xonasidagi raqamni topuvchi dastur tuzing. */
// let number = + prompt("999dan katta son kiriting");
// let newNum = ((number % 10000) - ((number % 10000) % 1000)) / 1000;
// if (number > 999) {
//   console.log(newNum);
// } else {
//   console.log("999dan katta son kiriting");
// }

// /*23. Kun boshidan boshlab N sekund o'tdi. Kun boshidan boshlab qancha to'liq minut o'tganini hisoblovchi dastur tuzing. Masalan, kun boshidan N=12321 sekund o'tdi. Bu kun boshidan boshlab to'liq 205 minut degani. */
// let second = + prompt("Sekuntagi qiymatini kiriting");
// let minute = (second - (second % 60)) / 60;
// console.log(, "minut");

// // /*24. Kun boshidan boshlab N sekund o'tdi. Kun boshidan boshlab qancha to'liq soat o'tganini hisoblovchi dastur tuzing. Masalan, kun boshidan N=12321 sekund o'tdi. Bu kun boshidan boshlab to'liq 3 soat degani. */
// let second = + prompt("Sekuntagi qiymatini kiriting");
// let hour = (second - (second % 3600)) / 3600;
// console.log(hour, "soat");

// // /*25. Kun boshidan boshlab N sekund o'tdi. Kun boshidan boshlab qancha minut va sekund o'tganini hisoblovchi dastur tuzing. Masalan, kun boshidan N=12321 sekund o'tdi. Bu kun boshidan boshlab 205 minut 21 sekund degani. */
// let second = + prompt("Sekuntagi qiymatini kiriting");
// let minute = (second - (second % 60)) / 60;
// console.log(minute, "minut", second % 60, "second");

// /*26. Kun boshidan boshlab N sekund o'tdi. Kun boshidan boshlab qancha soat va sekund o'tganini hisoblovchi dastur tuzing. Masalan, kun boshidan N=12321 sekund o'tdi. Bu kun boshidan boshlab 3 soat 1521 sekund degani. */
// let second = + prompt("Sekuntagi qiymatini kiriting");
// let hour = (second - (second % 3600)) / 3600;
// console.log(hour, "soat", second % 3600, "sekuntd");

// /*27. Kun boshidan boshlab N sekund o'tdi. Kun boshidan boshlab qancha soat, minut va sekund o'tganini hisoblovchi dastur tuzing. Masalan, kun boshidan N=12321 sekund o'tdi. Bu kun boshidan boshlab 3 soat 25 minut 21 sekund degani. */
// let second = +prompt("Sekuntagi qiymatini kiriting");
// let hour = (second - (second % 3600)) / 3600;
// let second_last = second % 3600;
// let minute = (second_last - (second_last % 60)) / 60;
// let second_end = second % 60;

// console.log(hour, "soat", minute, "daqiqa", second_end, "sekund");
