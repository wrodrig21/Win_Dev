package com.tts;

public class Person {


    private String name;
    private int age;
    private String location;


    public Person (String name, int age, String location){
        this.name = name;
        this.age= age;
        this.location= location;
    }

// empty constructor/default
    public Person(){

    }



    public void sayHello(){
    System.out.println("Hello " + name);
}

    public int birthday(){
        return age +1;

    }




}
