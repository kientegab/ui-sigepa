import { Component, OnDestroy, OnInit } from '@angular/core';
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {UploadFileService} from "../shared/service/upload.service";


@Component({
  selector: 'app-dashboard-administration',
  templateUrl: './dashboard-administration.component.html',
  styleUrls: ['./dashboard-administration.component.scss']
})
export class DashboardAdministrationComponent implements OnInit {

    stackedData: any;

    stackedOptions: any;


    selectedFiles?: FileList;
    currentFile?: File;
    message = '';
    errorMsg = '';

  constructor(private uploadService: UploadFileService) {

  }

  ngOnInit(): void {
      this.stackedData = {
          labels: ['Janvier', 'Febrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
          datasets: [{
              type: 'bar',
              label: 'Total',
              backgroundColor: '#d47575',
              data: [
                  50,
                  25,
                  12,
                  48,
                  90,
                  76,
                  42,
                  12,
                  62,
                  19,
                  21,
                  42
              ]
          }, {
              type: 'bar',
              label: 'Terminés',
              backgroundColor: '#66BB6A',
              data: [
                  21,
                  84,
                  24,
                  75,
                  37,
                  65,
                  34,
                  16,
                  5,
                  45,
                  51,
                  34
              ]
          }, {
              type: 'bar',
              label: 'En cours',
              backgroundColor: '#FFA726',
              data: [
                  41,
                  52,
                  24,
                  74,
                  23,
                  21,
                  32,
                  17,
                  32,
                  12,
                  39,
                  32
              ]
          }]
      };

      this.stackedOptions = {
          tooltips: {
              mode: 'index',
              intersect: false
          },
          responsive: true,
          scales: {
              xAxes: [{
                  stacked: true,
              }],
              yAxes: [{
                  stacked: true
              }]
          }
      };

  }

    selectFile(event: any): void {
        this.selectedFiles = event.target.files;
    }

    /*upload(): void {
        this.errorMsg = '';

        if (this.selectedFiles) {
            const file: File | null = this.selectedFiles.item(0);

            if (file) {
                this.currentFile = file;

                this.uploadService.upload(this.currentFile).subscribe(
                    (event: any) => {
                        console.warn("rep",event);
                        if (event.type === HttpEventType.UploadProgress) {
                            console.log(Math.round(100 * event.loaded / event.total));

                        } else if (event instanceof HttpResponse) {
                            this.message = event.body.responseMessage;
                        }
                    },
                    (err: any) => {
                        console.log(err);

                        if (err.error && err.error.responseMessage) {
                            this.errorMsg = err.error.responseMessage;
                        } else {
                            this.errorMsg = 'Error occurred while uploading a file!';
                        }

                        this.currentFile = undefined;
                    });
            }

            this.selectedFiles = undefined;
        }
    }*/

    upload()
    {
        if (this.selectedFiles) {
            const file: File | null = this.selectedFiles.item(0);

            if (file) {this.currentFile = file;
        this.uploadService.create(this.currentFile).subscribe({
            next: (response) => {
               console.warn("RESP",response.body)

            },
            error: (error) => {
                console.error("error" + JSON.stringify(error));

            }
        });
    }
}
}
}

