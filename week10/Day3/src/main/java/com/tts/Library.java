package com.tts;

import java.util.ArrayList;

public class Library {
    String libraryAddress;
    ArrayList<Book> books;

    public Library(String address) {
        this.libraryAddress = address;
        this.books = new ArrayList();
    }

    public void addBook(Book book) {
        this.books.add(book);
    }

    public void printAddress() {
        System.out.println(this.libraryAddress);
    }

    public void printAvailableBooks() {
        boolean libraryIsEmpty = true;

        for(int i = 0; i < this.books.size(); ++i) {
            Book libraryBook = (Book)this.books.get(i);
            if (!libraryBook.isBorrowed()) {
                System.out.println(libraryBook.getTitle());
                libraryIsEmpty = false;
            }
        }

        if (libraryIsEmpty) {
            System.out.println("Sorry, our catalog is empty");
        }

    }

    public String borrowBook(String bookTitle) {
        for(int i = 0; i < this.books.size(); ++i) {
            Book libraryBook = (Book)this.books.get(i);
            String libraryBookTitle = libraryBook.getTitle();
            if (libraryBookTitle.equals(bookTitle)) {
                if (!libraryBook.isBorrowed()) {
                    libraryBook.rented();
                    System.out.println("We have " + libraryBookTitle + ", and you have successfully borrowed it!");
                    return null;
                }

                System.out.println("Someone else has " + libraryBookTitle + " right now :(");
                return null;
            }
        }

        System.out.println("Your book was not found in our system, sorry.");
        return null;
    }

    public String returnBook(String bookTitle) {
        boolean found = false;

        for(int i = 0; i < this.books.size(); ++i) {
            Book libraryBook = (Book)this.books.get(i);
            String libraryBookTitle = libraryBook.getTitle();
            if (libraryBookTitle.equals(bookTitle)) {
                if (libraryBook.isBorrowed()) {
                    libraryBook.returned();
                    System.out.println("You successfully returned " + libraryBookTitle + "!");
                    found = true;
                    break;
                }

                if (!found) {
                    System.out.println("Are you sure you got the book from here? It isn't in our system.");
                }
            }
        }

        System.out.println();
        return null;
    }
}