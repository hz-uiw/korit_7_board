package com.korit.board.boardback.service;

import com.korit.board.boardback.dto.request.ReqJoinDto;
import com.korit.board.boardback.exception.DuplicatedValueException;
import com.korit.board.boardback.exception.FieldError;
import com.korit.board.boardback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public boolean duplicatedByUsername(String username) {
        return userRepository.findByUsername(username).isPresent();
    }

    public void join(ReqJoinDto reqJoinDto) {
        if(duplicatedByUsername(reqJoinDto.getUsername())) {
            throw new DuplicatedValueException(List.of(FieldError.builder()
                            .field("username")
                            .message("이미 존재하는 사용자 이름입니다.")
                    .build()));
        }
    }
}
