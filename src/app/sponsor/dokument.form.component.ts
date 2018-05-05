import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Dokument} from "./dokument.types";
import {DokumentService} from "./dokument.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: "dokument-form",
    templateUrl:  "./dokument.form.component.html"
})
export class DokumentFormComponent implements OnInit {
    public form: FormGroup;

    public sponsorId: number;

    constructor(private router: Router, private route: ActivatedRoute, private service: DokumentService) {
    }

    public ngOnInit(): void {
        this.route.parent.params.subscribe((params) => {
            if (params.id !== "new") {
                this.sponsorId = params.id;
            }
        });
        this.form = new FormGroup({
            file: new FormControl({ value: undefined, disabled: false }, Validators.required),
        });
    }

    public onSubmit() {
        const uploadDatei = this.form.value.file.files[0];

        // Ein Objekt um Dateien einzulesen
        const reader = new FileReader();

        const senddata = new Dokument();
        // Auslesen der Datei-Metadaten
        senddata.name = uploadDatei.name;
        senddata.size = uploadDatei.size;
        senddata.mimetype = uploadDatei.type;

        // Wenn der Dateiinhalt ausgelesen wurde...
        reader.onload = (theFileData: any) => {
            senddata.content = theFileData.target.result.split(",").pop();

            this.service.add(this.sponsorId, senddata)
                .then(() => {
                    this.router.navigate(["/sponsor", this.sponsorId, {outconsts: {dokument: ["list"]}}]);
                });
        };
        reader.readAsDataURL(uploadDatei);
    }
}
