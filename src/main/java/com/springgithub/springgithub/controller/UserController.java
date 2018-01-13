package com.springgithub.springgithub.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.springgithub.springgithub.model.User;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@CrossOrigin("http://localhost:4200")
@RestController
public class UserController {

    private static final Gson gson = new GsonBuilder().create();
    private static final String client_id = "a63bb0776b70be956f87";
    private static final String client_secret = "7b0d745a5605aafae556744109afdb8b3aae7035";

    @GetMapping("/getuser/{username}")
    public User getUser(@PathVariable String username) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.set("User-Agent", "spring-github");
        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);
        ResponseEntity<User> user = restTemplate.exchange("https://api.github.com/users/"+ username +
                "?client_id=" + client_id + "&client_secret=" + client_secret,
                HttpMethod.GET, entity, User.class);
        return user.getBody();
    }

}
