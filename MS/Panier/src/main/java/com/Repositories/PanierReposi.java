package com.Repositories;

import com.Models.Panier;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PanierReposi extends MongoRepository<Panier,String> {
    public List<Panier> getAllByconnectedAccount(String id);
}
