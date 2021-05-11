package com.tts;
import java.util.List;
import

public class Student {
    Student myStudent = new Student("Michael", 20, "NC", 2021);
        System.out.println(myStudent);
        myStudent.enrolledStudent();
        System.out.println(myStudent);

    List<Student> studentList= new ArrayList<>();

        studentList.add(new Student( "Janice", 32, "NC", 2021));

        System.out.println("Here are the elements in my student list: ");
//        for (Student student : studentList) {
//            System.out.println(student);
//        }
        studentList.forEach((student) -> System.out.println(student));
}
