package com.korit.board.boardback.controller;

import com.korit.board.boardback.security.principal.PrincipalUser;
import com.korit.board.boardback.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/user/me")
    public ResponseEntity<?> getLoginUser(@AuthenticationPrincipal PrincipalUser principalUser) {
//        PrincipalUser = principalUser = (PrincipalUser) SecurityContextHolder
//                .getContext()
//                .getAuthentication()
//                .getPrincipal();      // 매개변수 @AuthenticationPrincipal PrincipalUser principalUser와 같음

        return ResponseEntity.ok().body(principalUser.getUser());
    }
}
