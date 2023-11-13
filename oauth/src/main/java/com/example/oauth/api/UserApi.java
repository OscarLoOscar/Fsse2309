package com.example.oauth.api;

import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.oauth.data.UserDetailsResponseDto;

@RestController
@RequestMapping("/user")
public class UserApi {
  @GetMapping("/me/details")
  public UserDetailsResponseDto getMyUserDetails(
      JwtAuthenticationToken jwtToken) {
    UserDetailsResponseDto loginUser = new UserDetailsResponseDto(jwtToken);
    return loginUser;
  }
}
