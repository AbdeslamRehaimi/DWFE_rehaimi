import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { utilisateur } from '../../models/utilisateur.model';
import { UtilisateurService } from "../../services/utilisateur.service";
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private user: utilisateur = {
    profils: '',
    dateCreation: '',
    dateFin: '',
    photo: '',
    email: '',
    identifiant: ''
  };
  private myDate : string ;

  constructor(private service: UtilisateurService, private router: Router, public notification: MatSnackBar ) {
    this.myDate = formatDate(new Date(), 'yyyy/MM/dd', 'en').toLocaleString();
   }

  ngOnInit() {
    this.onClear();
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.user = this.service.form.value;
      this.user.dateCreation= this.myDate;
      this.user.profils = "User";
      if(this.user.photo == null){
        this.user.photo = "No image provided!";
      }
      console.log(this.user);
      try {
        this.service.add(this.user).subscribe((user) => {
          console.log('Enregistrer avec succes');
          //this.router.navigateByUrl('login');
        });
      } catch (err) {
        console.log(err);
      } finally {
        this.onClear();
        this.notification.open('Inscription Succes ...')._dismissAfter(3000);
      }
    } else {
      console.log("something went wrong");
    }

  }

  onClear() {
    console.log('initialiser');
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
