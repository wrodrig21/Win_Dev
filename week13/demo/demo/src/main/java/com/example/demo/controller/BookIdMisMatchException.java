package com.example.demo.controller;
public class BookIdMisMatchException extends Throwable {
    public BookIdMisMatchException() {
        super();
    }
    public BookIdMisMatchException(final String message, final Throwable cause) {
        super(message, cause);
    }
    public BookIdMisMatchException(final String message) {
        super(message);
    }
    public BookIdMisMatchException(final Throwable cause) {
        super(cause);
    }
}