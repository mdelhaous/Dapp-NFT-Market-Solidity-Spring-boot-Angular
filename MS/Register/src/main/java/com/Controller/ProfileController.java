package com.Controller;

import com.Models.Profile;
import com.Services.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class ProfileController {

    @Autowired
    ProfileService profileService;

    @PostMapping("/AddProfiles")
    public Profile AddProfiles(@RequestBody Profile profile){
        return profileService.SaveProfiles(profile);
    }

    @GetMapping("/Profiles")
    public List<Profile> getAllProfiles(){
        return profileService.getAllProfiles();
    }

    @GetMapping("/ProfilesbyId/{id}")
    public List<Profile> getAllAccountsById(@PathVariable String id){
        return profileService.getAllById(id);
    }

    @DeleteMapping("/Profiles")
    public void DeleteProfiles(@PathVariable String id){
        profileService.DeleteProfiles(id);
    }

}
