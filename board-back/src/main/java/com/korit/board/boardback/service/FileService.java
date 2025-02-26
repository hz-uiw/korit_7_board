package com.korit.board.boardback.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

@Service
public class FileService {

    @Value("${user.dir}")
    private String rootPath;

    public void saveFile(String path, MultipartFile file) {
        if(file.isEmpty()) {
            return;
        }

        try {
            String originalFilename = file.getOriginalFilename();
            String newFilename = UUID.randomUUID().toString().replaceAll("-", "") + "_" + originalFilename;
            // UUID 사용 -> 하이픈(-)을 제거해서 UUID + 파일이름으로 새 아이디 생성
        } catch (Exception e) {

        }
    }
}
