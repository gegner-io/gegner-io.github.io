import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-impressum-page',
  imports: [RouterLink],
  templateUrl: './impressum-page.component.html',
  styleUrls: ['./impressum-page.component.scss'],
})
export class ImpressumPageComponent {
  protected readonly legalName = 'Adrian Gegner';

  // Replace these placeholders with your real legal contact details.
  protected readonly legalAddress = {
    street: 'Kösslerstraße 14',
    postalCode: '91522',
    city: 'Ansbach',
    country: 'Deutschland',
  };

  protected readonly legalContact = {
    email: 'gegner@me.com',
    phone: '+49 160 91382849',
  };
}
