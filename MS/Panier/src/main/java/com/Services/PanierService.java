package com.Services;

import com.Models.Panier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PanierService {


    public List<Panier> getAllCards();
    public List<Panier> getAllById(String id);
    public Panier SaveCards(Panier panier);
    public void DeleteCards(String id);
}
