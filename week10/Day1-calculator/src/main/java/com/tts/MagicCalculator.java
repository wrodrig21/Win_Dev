package com.tts;

public class MagicCalculator {


    private float num1;

    double squareRoot(float num) {
        double num1 = 0;
        return Math.sqrt(num1);
    }


double sin(float num1){
        this.num1 = num1;
        return Math.sin(num1);
}

    double cos(float num1){
        this.num1 = num1;
        return Math.cos(num1);
    }
    double tan(float num1){
        this.num1 = num1;
        return Math.tan(num1);
    }


//    public static int factorial (int n)
//    {
//        return (n == 1 || n == 0) ? 1 : n * factorial (n - 1);
//    }
public float factorial(float num1) {
    float i, fact = 1;
    for (i = 1; i <= num1; i++) {
        fact = fact * i;
    }
    System.out.println("Factorial of " + num1 + " is: " + fact);
    return fact;
}






}
