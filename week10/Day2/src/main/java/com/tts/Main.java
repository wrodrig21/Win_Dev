package com.tts;

import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {


        List<Integer> integerList = new ArrayList<>();
        integerList.add(3);

        HashMap<String, String> stringHashMap = new HashMap<>();
        stringHashMap.put("honda", "civic");

        Integer num = new Integer(5);
//        Integer num = 5;
        // wrapper classes and String can be utilized like primitives
        // you do not need to invoke the constructor

//        String myString = new String("this is my String");
        String myString = "this is my string";

        System.out.println("num is of type: " + num.getClass());

        Person firstPerson = new Person();
        Person secondPerson = new Person();
        Person thirdPerson = new Person("Jane", 45, "London");


        secondPerson.sayHello();
        thirdPerson.sayHello();


        System.out.println("Jane will be " + thirdPerson.birthday() + "year old next year");





    Book myBook = new Book("Michael Crincton",
            "Jurassic Park", 1993,"publisher","science-fiction"
            );
        System.out.println(myBook);

}

}
