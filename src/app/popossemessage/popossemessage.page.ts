import { Component, OnInit } from '@angular/core';

// popup
import{AlertController } from "@ionic/angular";

@Component({
  selector: 'app-popossemessage',
  templateUrl: './popossemessage.page.html',
  styleUrls: ['./popossemessage.page.scss'],
})
export class PopossemessagePage implements OnInit {
  status:string=" ";

  constructor( private alert:AlertController) { }



  ngOnInit() {
  }

  // 
  OpenConfirmDialogue(){
    this.alert.create({
      // Première alert (message)
      header:"comfirmation !",
      subHeader:"Vous êtes sûr ?",
      buttons:[
      // Annulation
        {
          text:"Annuler",
          handler:(data)=>{
          //  Affichage en bas du button
            this.status="Action annulée !"
          }
        },
      // Comfirmantion
        {
          text:"OK",
          handler:(data)=>{
            // 
            this.status= "Confirm avec succès !"
          }
        }
      ]
    }).then((confirmElement)=>{
      confirmElement.present();
    })
  }

}
