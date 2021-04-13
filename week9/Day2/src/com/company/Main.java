package com.company;
import java.util.Scanner;
public class Main {

    public static void main(String[] args) {
        //println() is a method not unlike console.log in javascript
        Scanner input = new Scanner(System.in);
        System.out.println("What is your name?");
        String firstname =input.nextLine();

        System.out.println("Hello " + firstname);

        System.out.println("Hello World!");

        System.out.print("This is from a print method\n");

            int myInt = 4;
            if (myInt > 5) {
                System.out.println("hello from a condition");
            }else {
                System.out.println("hello from a block");

            }

    }
}
