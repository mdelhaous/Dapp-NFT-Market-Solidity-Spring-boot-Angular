package com.Controller;


import com.Models.Panier;
import com.Services.PanierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PanierController {

    @Autowired
    PanierService panierService;

    @PostMapping("/Panier")
    public Panier AddItems (@RequestBody Panier panier){
        return panierService.SaveCards(panier);
    }

    @GetMapping("/Panier")
    public List<Panier> getAllItems(){
        return panierService.getAllCards();
    }

    @GetMapping("/PanierbyId/{id}")
    public List<Panier> getAllItemsByid(@PathVariable String id){
        return panierService.getAllById(id);
    }

    @DeleteMapping("/Panier/{id}")
    public void DeleteItems (@PathVariable String id){
        panierService.DeleteCards(id);
    }
}
