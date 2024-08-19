export function calculoIMC(peso, altura) {
    return peso / (altura * altura);
  }
  
  export function msg(IMC) {
    if (IMC < 18.49) {
      return "Abaixo do peso";
    } else if (IMC < 24.99) {
      return "Normal";
    } else if (IMC < 29.99) {
      return "Sobrepeso";
    } else if (IMC < 34.99) {
      return "Obesidade grau 1";
    } else if (IMC < 39.99) {
      return "Obesidade grau 2 (Severa)";
    } else {
      return "Obesidade grau 3 (Mórbida)";
    }
  }
  