package com.Services;

import com.Models.Profile;
import com.Repositories.ProfileReposi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileServiceImpl implements ProfileService{


    @Autowired
    ProfileReposi profileReposi;

    @Override
    public List<Profile> getAllProfiles() {
        return profileReposi.findAll();
    }

    @Override
    public List<Profile> getAllById(String id) {
        return profileReposi.getAllByAdresseWallets(id);
    }

    @Override
    public Profile SaveProfiles(Profile profile) {
        return profileReposi.save(profile);
    }

    @Override
    public void DeleteProfiles(String id) {
        profileReposi.deleteById(id);
    }
}
