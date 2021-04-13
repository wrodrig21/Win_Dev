package com.company;
import java.util.Scanner;
public class MadLip {


    public static void main(String[] args) {

//        Use the variables below to compose the
//        following
//        paragraph:
//        name, adjective, verbOne, verbTwo, number,
//        yourName
//Dear name,
//You are adverb adjective and I want to be your noun!
// I want to go to the nounTwo with you in number days.
//Sincerely, yourName

//        make a scanner
        Scanner input = new Scanner(System.in);
        System.out.println("What is your name?");
        String name = input.nextLine();

        System.out.println("Enter an adjective:");
        String adjective = input.nextLine();

        System.out.println("Enter a noun");
        String nounOne = input.nextLine();

        System.out.println("Enter another noun");
        String nounTwo = input.nextLine();

        System.out.println("Enter your number");
        int number = input.nextInt();
        System.out.println("Give me your name: ");
        String yourName = input.nextLine();

        System.out.printf("Dear %s\n", name);
        System.out.printf("You are %s and I want to be your %s! I want to go to the %s with you in %d days.\n",
                adjective, nounOne, nounTwo, number);
        System.out.printf("Sincerely, %s\n", yourName);







    }



}
