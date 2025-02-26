package com.korit.board.boardback.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.UUID;

@Service
public class FileService {

    @Value("${user.dir}")
    private String rootPath;

    public String saveFile(String path, MultipartFile file) {
        if(file.isEmpty()) {
            return null;
        }

        String newFilename = null;
        try {
            String originalFilename = file.getOriginalFilename();
            newFilename = UUID.randomUUID().toString().replaceAll("-", "") + "_" + originalFilename;
            // UUID 사용, 하이픈(-)을 제거해서 UUID + 파일이름으로 새 아이디 생성
            File newFilePath = new File(rootPath + "/" + path);
            if(!newFilePath.exists()) {
                newFilePath.mkdirs();
            }
            File newFile = new File(rootPath + "/" + path + "/" + newFilename);
            file.transferTo(newFile);
        } catch (Exception e) {
            e.getStackTrace();
        }
        return newFilename;
    }
}
