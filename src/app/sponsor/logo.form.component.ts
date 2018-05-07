import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Logo} from './logo.types';
import {LogoService} from './logo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'logo-form',
  templateUrl: './logo.form.component.html',
})
export class LogoFormComponent implements OnInit {
  public form: FormGroup;

  public sponsorId: number;

  constructor(private router: Router, private route: ActivatedRoute, private service: LogoService) {
  }

  public ngOnInit(): void {
    this.route.parent.params.subscribe((params) => {
      if (params.id !== 'new') {
        this.sponsorId = params.id;
      }
    });
    this.form = new FormGroup({
      file: new FormControl({value: undefined, disabled: false}, Validators.required),
    });
  }

  public onSubmit() {
    const uploadDatei = this.form.value.file.files[0];

    // Ein Objekt um Dateien einzulesen
    const reader = new FileReader();

    const senddata = new Logo();
    // Auslesen der Datei-Metadaten
    senddata.name = uploadDatei.name;
    senddata.size = uploadDatei.size;
    senddata.mimetype = uploadDatei.type;

    // Wenn der Dateiinhalt ausgelesen wurde...
    reader.onload = (theFileData: any) => {
      senddata.content = theFileData.target.result.split(',').pop();

      this.service.add(this.sponsorId, senddata)
        .then(() => {
          this.router.navigate(['/sponsor', this.sponsorId, {outlets: {logo: ['list']}}]);
        });
    };
    reader.readAsDataURL(uploadDatei);
  }
}
