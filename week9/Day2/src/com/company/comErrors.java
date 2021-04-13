package com.company;
import java.util.Scanner;
public class comErrors {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = "";
        while (!name.equals("0")) {
            System.out.println("What animal do you have?");
            name = input.nextLine();
            if (name.equalsIgnoreCase("sheep")) {
                System.out.print("bahh!");
//                break;
            } else if (name.equalsIgnoreCase("horse")) {
                System.out.print("neigh!");
//                break;
            } else if (name.equalsIgnoreCase("cat")) {
                System.out.print("moew!");
//                break;
            } else if (name.equalsIgnoreCase("dog")) {
                System.out.print("wooof!");
                break;
            } else if (name.equalsIgnoreCase("cow")) {
                System.out.print("moooo!");
                break;
            } else if (name.equalsIgnoreCase("duck")) {
                System.out.print("quack!");
                break;
            } else {
                System.out.print("Try a different animal. ");
                break;
            }
        }
    }
}


