package se.alex.lexicon.marketplace.service;

import java.util.List;

import se.alex.lexicon.marketplace.dto.LoginRequest;
import se.alex.lexicon.marketplace.dto.UserDTO;
import se.alex.lexicon.marketplace.entity.User;

public interface UserService {
    UserDTO findByUsername(String username);
    UserDTO registerUser(UserDTO userDTO);
    String authenticateUser(LoginRequest loginRequest);
    List<User> findAll();
    User save(User user);
}