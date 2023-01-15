package com.Services;

import com.Models.Profile;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProfileService {

    public List<Profile> getAllProfiles();
    public List<Profile>getAllById(String id);
    public Profile SaveProfiles(Profile profile);
    public void DeleteProfiles(String id);
}
