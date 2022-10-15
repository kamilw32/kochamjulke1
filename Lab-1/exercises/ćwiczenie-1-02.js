/**
 * Napisz skrypt, który w łańcuchu triangle zawiera ciąg znaków '#' i '\n' tworzących kształ trójkąta o wysokości 
 * w zmiennej height. Po wyświetleniu na konsoli powinien zostać wyświetlony poniższy wzór liczba wierzy powinna odpowiadać 
 * zmiennej height:
 * #
 * ##
 * ###
 * ####
 * ##### 
 */
let height = 5;
let triangle = '';
/*
    Wpisz kod zadania w miejscu tego komentarza.
*/
for (let a = 0; a < height; a++) {

    for (let b = 0; b <= a; b++) {
        triangle += "#"
    }
    triangle += "\n"
}

console.log(triangle);