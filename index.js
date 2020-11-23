

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
  if (n==400) {
    resultado += "CD";
    n -= 400;
  }
  if (n >= 500) {
    resultado += "D";
    n -= 500;
  }
  for (let i = 0; i < n; i++) {
    if (n >= 100) {
      resultado += "C";
      n -= 100;
    }
    
  }
  
  if (n==40) {
    resultado += "XL";
    n -= 40;
  }
  if (n >= 50) {
    resultado += "L";
    n -= 50;
  }
  if (n==9) {
    resultado += "IX";
    n -= 9;
  }
  for (let i = 0; i < n; i++) {
    if (n >= 10) {
      resultado += "X";
      n -= 10;
    }
    
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



