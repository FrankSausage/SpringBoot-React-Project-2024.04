package com.example.reactProject.entity;

import lombok.*;

import java.time.LocalDate;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class User {
    private String uid;
    private String uname;
    private String email;
    private LocalDate regDate;
}
