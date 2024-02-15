package com.party.party.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="Register")

public class registerentity {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long bid;
        @Column(name = "name", nullable = false)
        private String name;
        @Column(name = "mobile_number", nullable = false)
        private String mobilenumber;
        
        @Column(name = "email", nullable = false,unique = true)
        private String email;
    
        @Column(name = "password", nullable = false)
        private String password;
       
        @Column(name = "confirm_password", nullable = false)
        private String confirm_password;
    
         public Long getBid() {
            return bid;
        }
        public void setBid(Long bid) {
            this.bid = bid;
        }
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
        public String getMobilenumber() {
            return mobilenumber;
        }
        public void setMobilenumber(String mobilenumber) {
            this.mobilenumber = mobilenumber;
        }
        public String getEmail() {
            return email;
        }
        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
        public String getConfirm_password() {
            return confirm_password;
        }
        public void setConfirm_password(String confirm_password) {
            this.confirm_password = confirm_password;
        }

    public registerentity(Long bid, String name, String mobilenumber, String email, String password,
                String confirm_password) {
            this.bid = bid;
            this.name = name;
            this.mobilenumber = mobilenumber;
            this.email = email;
            this.password = password;
            this.confirm_password = confirm_password;
        }
    public registerentity(){

       }
}