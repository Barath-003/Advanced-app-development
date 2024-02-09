package com.partyevent.partyevent.Controller;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.partyevent.partyevent.Entity.User;
import com.partyevent.partyevent.dto.request.AuthenticationRequest;
import com.partyevent.partyevent.dto.request.RegisterRequest;
// import com.partyevent.partyevent.dto.request.RegisterRequest;
// import com.partyevent.partyevent.dto.request.UserRequest;
import com.partyevent.partyevent.dto.response.AuthenticationResponse;
import com.partyevent.partyevent.service1.AuthenticationService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins="*")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register") 
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }
    @Tag(name="Login",description="Login endpoint")
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
    @GetMapping("/")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = authenticationService.getAllUsers1();
        return ResponseEntity.ok(users);
    }
}
