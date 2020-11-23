

/**
 * Conversión a números romanos.
 * @param {number} n - Un número entre 1 y 3999.
 * @returns {string} El equivalente en números romanos.
 */
export function toRoman(n) {
  //if (n==3) return "III";
  //else if (n==2) return "II";
  //else return "I";

  //Refactorización del código
  let resultado = "";
  //if (n==4) resultado = "IV";
  //else if (n==5) resultado = "V";
  //else if (n==7) resultado = "VII";
 ////////////////////////////////////
 while (n >= 1000) {
  resultado += "M";
  n -= 1000;
}
 if (n>=900 && n< 1000) {
  resultado += "CM";
  n -= 900;
} 
 
  if (n >= 500 && n< 900) {
    resultado += "D";
    n -= 500;
  }
  if (n>400 && n<500) {
    resultado += "CD";
    n -= 400;
  }
  
//////////////////////////////////////
while (n >= 100) {
  resultado += "C";
  n -= 100;
}
if (n>=90 && n< 100) {
  resultado += "XC";
  n -= 90;
}

if (n >= 50 && n<90) {
  resultado += "L";
  n -= 50;
}
if (n>=40 && n<50) {
  resultado += "XL";
  n -= 40;
}
  
  
//////////////////////////////////////
  if (n>=9 && n< 10) {
    resultado += "IX";
    n -= 9;
  }

  while (n >= 10) {
   resultado += "X";
   n -= 10;
  } 
  if (n==4) {
    resultado += "IV";
    n -= 4; // n queda a cero y ya no saca palitos en el bucle
  }
  if (n >= 5) {
    resultado += "V";
    n -= 5; // n queda a cero y ya no saca palitos en el bucle
  }
  //else
  for (let i = 0; i < n; i++) {
    resultado += "I";
  }

  return resultado;
  
}



