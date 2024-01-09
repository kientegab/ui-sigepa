import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { ConfirmationService, Message } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ArticleDemande, IArticleDemande } from 'src/app/shared/model/articleDemande.model';
import { Demande, IDemande } from 'src/app/shared/model/demande.model';
import { ArticleProjetService } from 'src/app/shared/service/article-projet.service';
// import { Article, IArticleDemande } from 'src/app/shared/model/article.model';
// import { articleProjetService } from 'src/app/shared/service/article.service';

@Component({
  selector: 'app-article-projet',
  templateUrl: './article-projet.component.html',
  styleUrls: ['./article-projet.component.scss']
})
export class ArticleProjetComponent {


  @ViewChild('dtf') form!: NgForm;
  article: IArticleDemande = new ArticleDemande();
  @Input() data: IArticleDemande = new ArticleDemande();
  demande: IDemande = new Demande();
  demandes: IDemande[] = [];
  error: string | undefined;
  showDialog = false;
  isDialogOpInProgress!: boolean;
  message: any;
  dialogErrorMessage: any;
  timeoutHandle: any;
  isOpInProgress!: boolean;

  constructor(
    private articleProjetService: ArticleProjetService,
    private dialogRef: DynamicDialogRef,
    private dynamicDialog: DynamicDialogConfig,
    private confirmationService: ConfirmationService

  ) { }

  ngOnInit(): void {
   
    if (this.dynamicDialog.data) {
      this.demande = cloneDeep(this.dynamicDialog.data);
      // this.demandes.push(this.demande);
    }
  }

  clear(): void {
    this.form.resetForm();
    this.dialogRef.close();
    this.dialogRef.destroy();
  }
  isEditing() {
    return !!this.article.id;
  }

  clearDialogMessages() {
    this.dialogErrorMessage = null;
  }
  // Errors
  handleError(error: HttpErrorResponse) {
    console.error(`Processing Error: ${JSON.stringify(error)}`);
    this.isDialogOpInProgress = false;
    this.dialogErrorMessage = error.error.title;
  }

  showMessage(message: Message) {
    this.message = message;
    this.timeoutHandle = setTimeout(() => {
      this.message = null;
    }, 5000);
  }
  saveEntity(): void {
    this.clearDialogMessages();
    this.isDialogOpInProgress = true;
    this.article.demande = this.demande;
    console.log("article a envoyé", this.article)
        this.articleProjetService.create(this.article).subscribe({
          next: (response) => {
            this.dialogRef.close(response);
            this.dialogRef.destroy();
            this.showMessage({
              severity: 'success',
              summary: 'visa creer avec succès',
            });
          },
          error: (error) => {
            console.error("error" + JSON.stringify(error));
            this.isOpInProgress = false;
            this.showMessage({ severity: 'error', summary: error.error.message });

          }
        });
      
    }

  
}

