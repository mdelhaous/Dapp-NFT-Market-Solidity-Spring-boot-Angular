package com.Models;


import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Data @AllArgsConstructor @NoArgsConstructor @Getter @Setter
public class Profile {
    @Id
    private String id;
    private String adresseWallets;
    private Date timestampt;


}
