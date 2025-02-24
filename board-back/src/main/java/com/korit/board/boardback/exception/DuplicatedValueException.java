package com.korit.board.boardback.exception;

import lombok.Getter;

import java.util.List;

@Getter
public class DuplicatedValueException extends RuntimeException {
    private List<FieldError> fieldErrors;

    public DuplicatedValueException(List<FieldError> fieldErrors) {
        super("Duplicated Error");
        this.fieldErrors = fieldErrors;
    }
}
