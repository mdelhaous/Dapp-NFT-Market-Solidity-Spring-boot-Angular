package com.Models;


import lombok.*;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Panier {
    @Id
    private String id;
    private String connectedAccount;
    private String nftName;
    private String tokenId;
    private String nftOwner;
    private String nameofcollection;

}
