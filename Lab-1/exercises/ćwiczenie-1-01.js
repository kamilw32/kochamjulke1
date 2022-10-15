/**
 * Napisz skrypt, który oblicza promień koła na podstawie pola powierzchni w zmiennej area
 * Wynik zapisz do zmiennej łańuchowej radius z dwoma miejscami po przecinku.
 */
let area = 10;
let radius = '';
/*
    Wpisz kod zadania w miejscu tego komentarza.

*/
if (area<=0 || area == Infinity || isNaN(area)){
    console.log("błedne dane")
    return
}
radius = Math.sqrt(area/Math.PI)

console.log(Number(radius).toFixed(2))

