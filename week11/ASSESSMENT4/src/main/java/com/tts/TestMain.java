package com.tts;

public class TestMain {

    public static void main(String[] args) {
        // Read data from user
        // Create Scanner object
        Scanner input = new Scanner(System.in);
        int numberOfEmployees = input.nextInt();
        Employee[] employees = new Employee[numberOfEmployees];
        // Iterate for loop for employees
        for (int i = 0; i < numberOfEmployees; i++) {
            Scanner dataInput = new Scanner(System.in);
            String data = dataInput.nextLine();
            String[] dataArray = data.split(" ");
            // Check given value is ENGINEER
            if (dataArray[0].equalsIgnoreCase("ENGINEER")) {
                // Create engineer object
                Engineer engineer = new Engineer();
                // Set values
                engineer.setGrade(dataArray[1]);
                engineer.setSalary(Integer.parseInt(dataArray[2].trim()));
                employees[i] = engineer;
            } else {
                // Create manager object
                Manager manager = new Manager();
                // Set values
                manager.setGrade(dataArray[1]);
                manager.setSalary(Integer.parseInt(dataArray[2].trim()));
                employees[i] = manager;
            }
        }
        // Iterate array
        for (int i = 0; i < numberOfEmployees; i++) {
            employees[i].label();
        }

    }

}