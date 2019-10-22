import { Component, ViewChild, OnInit } from '@angular/core';
import {AlertController, IonList, NavController} from "@ionic/angular";
import {ChecklistDataService} from "../services/checklist-data.service";
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  @ViewChild(IonList, {static: false}) slidingList: IonList;

  constructor(
    public dataService: ChecklistDataService,
    private alertCtrl: AlertController,
    private storage: Storage,
    private navCtrl: NavController){

    }

  ngOnInit(){
    this.storage.get("introShown").then(result => {
      if(result == null){
        this.storage.set("introShown", true);
        this.navCtrl.navigateRoot("/intro");
      }
    });
  }

  addChecklist(): void {
    this.alertCtrl.create({
      header: 'New Checklist',
      message: 'Enter the name of your new checklist below:',
      inputs: [ {

        type: 'text',
        name: 'name'
      }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            this.dataService.createChecklist(data);
          }
        }
      ]

    }).then((prompt)=> {
      prompt.present();
    });
  }

  renameChecklist(checklist): void{

    this.alertCtrl.create({
      header: 'Rename Checklist',
      message: 'Enter the new name of this checklist below:',
      inputs: [
        {
          type: 'text',
          name: 'name'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            this.dataService.renameChecklist(checklist, data);
          }
        }
      ]
    }).then((prompt) => {
      prompt.present();
    });
  }

  removeChecklist(checklist): void{
    this.slidingList.closeSlidingItems().then(()=> {
      this.dataService.removeChecklist(checklist);
    });
  }

}
