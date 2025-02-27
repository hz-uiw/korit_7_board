package com.korit.board.boardback.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;

@Service
public class EmailService {

//    @Value("${spring.mail.username}")
    private final String FROM_EMAIL = "kwonmc5.11@gmail.com";

    @Autowired(required = false)
    private JavaMailSender javaMailSender;

    public void sendAuthMail(String to) throws MessagingException {
        final String SUBJECT = "[board_project] 게정 활성화 인증 메일";
        String content = """
            <html lang="ko">
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
                <div style="display: flex; flex-direction:column; align-items: center; ">
                    <h1>계정 활성화</h1>
                    <p>계정 활성화를 하시려면 아래의 인증 버튼을 클릭하세요.</p>
                    <a style="box-sizing: border-box; border: none; border-radius: 8px; padding: 7px 15px; background-color: #2383e2; color: #ffffff; text-decoration: none;" target="_blank" href="">인증하기</a>
                </div>
            </body>
            </html>
        """;
        sendEmail(to, SUBJECT, content);
    }

    public void sendEmail(String to, String subject, String content) throws MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, false, StandardCharsets.UTF_8.name());
        mimeMessageHelper.setFrom(FROM_EMAIL);
        mimeMessageHelper.setTo(to);
        mimeMessageHelper.setSubject(subject);
        mimeMessage.setText(content, StandardCharsets.UTF_8.name(), "html");

        javaMailSender.send(mimeMessage);
    }
}
