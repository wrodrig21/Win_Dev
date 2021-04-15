package com.tts;
import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Please enter a number.");
        int numOne = Integer.parseInt(scanner.next());
        System.out.println("Please enter a second number.");
        int numTwo = Integer.parseInt(scanner.next());
        System.out.println("Please enter a third number.");
        int numThree = Integer.parseInt(scanner.next());
        System.out.println("Please enter a fourth number.");
        int numFour = Integer.parseInt(scanner.next());
        System.out.println("Please enter a fifth number.");
        int numFive = Integer.parseInt(scanner.next());
        List<Integer> intList = new ArrayList<>();
        intList.add(numOne);
        intList.add(numTwo);
        intList.add(numThree);
        intList.add(numFour);
        intList.add(numFive);
        System.out.println(intList);


        int sum = 0;
        for( int num : intList) {
            sum = sum+num;
        }

        System.out.println("Sum: " + sum);


        int min = intList.get(0);
        for (int i = 1; i < intList.size(); i++) {
            int curr = intList.get(i);
            if (curr < min) {
                min = curr;
            }
        }
        System.out.println ("The smallest number is: " + min);

        List<Integer> sortedList = new ArrayList<>(intList);
        Collections.sort(sortedList);
        System.out.println(sortedList);
        int max = sortedList.get(sortedList.size()-1);
        System.out.println("Max: " + max);


        int product = numOne * numTwo * numThree * numFour * numFive;
        System.out.println("Product: " + product);


        System.out.println("===Hash Map==");
        Scanner input = new Scanner(System.in);

        HashMap<String, String> carMap = new HashMap<>();
        carMap.put("Civic", "Honda");
        carMap.put("Corolla", "Toyota");

        carMap.put("Skyline", "Nissan");
        carMap.put("Miata", "Mazda");
        carMap.put("X", "Tesla");
        carMap.put("F-150", "Ford");

        System.out.println("What model of car are you looking for?");
        String carModel = input.next();

        String make =carMap.get(carModel);
        if(make ==null){
            System.out.println("Sorry we dont have that");

        }
else{
            System.out.println("That car is in our " + make + " section!");
        }



    }
}


