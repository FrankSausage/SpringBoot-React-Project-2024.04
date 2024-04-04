package com.example.reactProject.controller;

import com.example.reactProject.entity.User;
import com.example.reactProject.service.UserService;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@RestController             // rendering 하지 않고, 데이터를 보냄
@RequestMapping("/react")
@RequiredArgsConstructor
public class ReactController {
    private final UserService userService;

    @GetMapping("/data")
    public String data(){
        return "스프링부트에서 보낸 데이터";
    }

    @GetMapping("/json")
    public JSONArray json() {
        List<User> userList = userService.getUserList();
        JSONArray jsonArray = new JSONArray();

        for(User data : userList){
            JSONObject jObj = new JSONObject();
            jObj.put("uid", data.getUid());
            jObj.put("uname", data.getUname());
            jObj.put("email", data.getEmail());
            jObj.put("regDate", data.getRegDate());

            jsonArray.add(jObj);
        }

        return jsonArray;
    }

    @PostMapping("/form")
    public String form(String uid, String uname) {
        System.out.println("uid=" + uid + ", uname=" + uname);
        return "uid=" + uid + ", uname=" + uname;
    }

    @PostMapping("/multi")
    public String form(String uid, String uname, MultipartFile file){
        String msg = "uid=" + uid + ", uname=" + uname + ", file=" + file.getOriginalFilename();
        System.out.println(msg);
        return msg;
    }
}
