import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-elaborer-projet',
  templateUrl: './elaborer-projet.component.html',
  styleUrls: ['./elaborer-projet.component.scss']
})
export class ElaborerProjetComponent {
  public page = 5;

  public spreadMode: "off" | "even" | "odd" = "off";
}