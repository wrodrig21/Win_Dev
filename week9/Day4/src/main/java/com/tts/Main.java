package com.tts;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        String[] fruitArray = {"orange", "apple", "dragonfruit"};
        int[] intArray;
        boolean[] boolArray;
        System.out.println("==== Arrays ====");
        System.out.println("Element at index 1 : " + fruitArray[1]);
        System.out.println("Length of fruitArray: " + fruitArray.length);
        System.out.println("==== Collections ====");
        List <String> stringList= new ArrayList <>();
        List <String> stringLinkedList= new LinkedList<>();
        List <String> stringVector = new Vector<>();
        List <String> stringStack= new Stack<>();

   stringList.add("dog");
   stringList.add("house");
   stringList.add("cell phone");

//        System.out.println("The element at index 0: " + stringList.get(0));

//    stringList.remove(0);
//        System.out.println("This the size of my list " + stringList.size());
        System.out.println(stringList);

            Collections.reverse(stringList);

        System.out.println("here is my list reverse: " + stringList.get(1));


        System.out.println("==== String Conversion ====");

        String myString = "I really love icecream!";
        String[] strArr = myString.split(" ");

        List <String> splitList = new ArrayList<>();

        splitList = Arrays.asList(strArr);
        System.out.println(splitList);

        List<String> carList = Arrays.asList("BMW", "Honda", "Audi");
Object[] carArr = carList.toArray();

String carString = Arrays.toString(carArr);
        System.out.println(carString.replace("[", "")
                .replace("]", "")
                .replace(",", ""));
HashMap<String, Integer> personMap = new HashMap<>();
personMap.put("Mary", 37);
        personMap.put("Bob", 21);
        personMap.put("Susan", 63);
        System.out.println(personMap);

        System.out.println("this is the value associated with Mary: " + personMap.get("Mary"));

        for (String i : personMap.keySet()) {
            System.out.println("key: " + i + "\t value: " + personMap.get(i));
        }

        personMap.remove("Bob");
        System.out.println("is bob in my map?");personMap.containsKey("Bob");


        System.out.println("===Iterating===");
        List<String>fruitList =Arrays.asList("plum", "apple", "grape");
        for (String fruit : fruitList){
            System.out.println("here is one of my fruits: " + fruit);
        }

        fruitList.forEach((fruit)-> System.out.println(fruit));

        fruitList.forEach(System.out::println);

        System.out.println("===LinkedList==");
        LinkedList<String> animalList = new LinkedList<String>();
        animalList.add("frog");
        animalList.add("giraffe");
        animalList.add("buffalo");
        animalList.add("mongoose");
        System.out.println(animalList);

        animalList.addFirst("shark");
        System.out.println(animalList);

        animalList.set(1, "emu");
        System.out.println(animalList);

        System.out.println("===== Queueing ====");
        Queue <Integer> myQueue = new LinkedList<>();

        //add elements {5, 6, 7, 8, 9} to queue
        for(int i=5; i<10; i++){
            myQueue.add(i);
        }

        System.out.println("Elements of queue:" + myQueue);

        int removeHead =myQueue.remove();
        System.out.println("removed element of myQueue: " + removeHead);
        System.out.println(myQueue);

        int head =myQueue.peek();
        System.out.println("head of queue: " + head);
int size = myQueue.size();
        System.out.println("size of the queue: " + size);

        System.out.println("===Stacks===");
        Stack<Integer> myStack;
        myStack = new Stack<Integer>();
        myStack.push(1);
        myStack.push(2);
        myStack.push(3);
        System.out.println(myStack);

        myStack.pop();
        System.out.println(myStack);
        //Stack: Last in, first out

        //Queue: first in, first out

       int peek=  myStack.peek();
        System.out.println(peek);

        myStack.empty();
        System.out.println(myStack);



    }


}