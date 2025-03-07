package com.korit.board.boardback.controller;

import com.korit.board.boardback.dto.request.ReqWriteBoardDto;
import com.korit.board.boardback.security.principal.PrincipalUser;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/board")
public class BoardController {

    @PostMapping("/{category}")
    public ResponseEntity<?> createBoard(
            @PathVariable String category,
            @RequestBody ReqWriteBoardDto dto,
            @AuthenticationPrincipal PrincipalUser principalUser
    ) {

        return ResponseEntity.ok().build();
    }

}