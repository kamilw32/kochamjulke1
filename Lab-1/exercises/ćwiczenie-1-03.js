/**
 * Napisz skrypt zamieniający wartość zmiennej decimalNumber  na liczbę rzemską w zakresie od 1 do 10.
 * Wynik zapisz do zmienej romanNumber.
 * Jeśli decimalNumber nie mieści sie w zakresie to umieść w romanNumber komunikat: Decimal number is out of range!
 * Jeśli decimalNumber jest równe undefined lub null to umieść w romanNumber komunikat: Decimal number is undefined or null!
 */
let decimalNumber = 11;
let romanNumber = 'IV';
/*
    Wpisz kod zadania w miejscu tego komentarza.
*/
if (decimalNumber < 1 || decimalNumber > 10) {
    romanNumber = " Decimal number is out of range!"

} else if (decimalNumber == undefined || decimalNumber == null) {
    romanNumber = "Decimal number is undefined or null!"
} else {
    switch (decimalNumber) {
        case 1: {
            romanNumber = "I"
            break;
        }
        case 2: {
            romanNumber = "II"
            break;
        }
        case 3: {
            romanNumber = "III"
            break;
        }
        case 4: {
            romanNumber = "IV"
            break;
        }
        case 5: {
            romanNumber = "V"
            break;
        }
        case 6: {
            romanNumber = "VI"
            break;
        }
        case 7: {
            romanNumber = "VII"
            break;
        }
        case 8: {
            romanNumber = "VIII"
            break;
        }
        case 9: {
            romanNumber = "IX"
            break;
        }
        case 10: {
            romanNumber = "X"
            break;
        }
    }
}


console.log(romanNumber);