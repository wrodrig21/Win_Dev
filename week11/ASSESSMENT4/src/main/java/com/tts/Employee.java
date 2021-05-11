package com.tts;


    public abstract class Employee {
        //abstract methods
        abstract void setSalary(int salary);
        abstract int getSalary();
        abstract void setGrade(String grade);
        abstract String getGrade();
        //print details
        void label() {
            System.out.println("Employee's data:");
            System.out.println("GRADE : "+getGrade());
            System.out.println("SALARY : "+getSalary());
        }

    }

