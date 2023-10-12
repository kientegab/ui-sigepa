import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-elaborer-projet',
  templateUrl: './elaborer-projet.component.html',
  styleUrls: ['./elaborer-projet.component.scss']
})
export class ElaborerProjetComponent {
  name = 'Angular';
  srclink: any;
  constructor(private sanitizer: DomSanitizer) {
    this.srclink = sanitizer.bypassSecurityTrustResourceUrl(
      'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'
    );
  }
  @ViewChild('outsideElement', { static: true })
  outsideElement!: ElementRef;
  @ViewChild('modalView', { static: true })
  modalView$!: ElementRef;

  openModal() {
    this.modalView$.nativeElement.classList.add('visible');
  }

  closeModal() {
    this.modalView$.nativeElement.classList.remove('visible');
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: any) {
    const outsideElement =
      this.outsideElement.nativeElement.contains(targetElement);
    if (outsideElement) {
      this.modalView$.nativeElement.classList.remove('visible');
    }
  }
  
}

