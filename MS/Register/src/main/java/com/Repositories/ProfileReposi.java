package com.Repositories;

import com.Models.Profile;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;


public interface ProfileReposi extends MongoRepository<Profile,String> {
    public List<Profile> getAllByAdresseWallets(String id);
}
