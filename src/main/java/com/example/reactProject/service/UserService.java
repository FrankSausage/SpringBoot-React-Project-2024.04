package com.example.reactProject.service;

import com.example.reactProject.entity.User;

import java.util.List;

public interface UserService {

    User getUserByUid(String uid);

    List<User> getUserList();
}
