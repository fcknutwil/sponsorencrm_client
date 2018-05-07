import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Typ} from "./typ.types";
import {TypService} from "./typ.service";

@Component({
  selector: "typ-form",
  templateUrl: "./typ.form.component.html"
})
export class TypFormComponent implements OnInit {

  public entry: Typ;

  constructor(private typService: TypService, private route: ActivatedRoute, private router: Router) {
  }

  public ngOnInit(): void {
    this.route.params.subscribe((params) =>
      this.typService.get(params.id).then((data) => {
        this.entry = data;
      }));
  }

  public save(): void {
    this.typService.save(this.entry)
      .then(() => {
        this.router.navigate(["/typ"]);
      });
  }

}
