package com.Services;

import com.Models.Panier;
import com.Repositories.PanierReposi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PanierServiceImpl implements PanierService{

    @Autowired
    PanierReposi panierReposi;

    @Override
    public List<Panier> getAllCards() {
        return panierReposi.findAll();
    }

    @Override
    public List<Panier> getAllById(String id) {
        return panierReposi.getAllByconnectedAccount(id);
    }

    @Override
    public Panier SaveCards(Panier panier) {
        return panierReposi.save(panier);
    }

    @Override
    public void DeleteCards(String id) {
        panierReposi.deleteById(id);
    }
}
