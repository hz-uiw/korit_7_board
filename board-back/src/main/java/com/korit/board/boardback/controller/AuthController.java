package com.korit.board.boardback.controller;

import com.korit.board.boardback.dto.request.ReqJoinDto;
import com.korit.board.boardback.dto.request.ReqLoginDto;
import com.korit.board.boardback.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Operation(summary = "회원가입", description = "회원가입 설명")
    @PostMapping("/join")
    public ResponseEntity<?> join(@RequestBody ReqJoinDto dto) {
        return ResponseEntity.ok().body(userService.join(dto));
    }

    @Operation(summary = "로그인", description = "로그인 설명")
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody ReqLoginDto dto) {
        /*
            userService -> login()
            user 객체 findByUsername
            user가 있으면 비밀번호 일치하는지 확인
            비밀번호가 일치하면 JWT 응답
            JWTUtil -> secret 셋팅
         */
        return ResponseEntity.ok().body(userService.login(dto));
    }

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }
}
