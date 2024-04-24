import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,GoogleMap,GoogleMapsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
move($event: google.maps.MapMouseEvent) {
throw new Error('Method not implemented.');
}
display: any;
moveMap($event: google.maps.MapMouseEvent|google.maps.IconMouseEvent) {
throw new Error('Method not implemented.');
}
  center: google.maps.LatLngLiteral = { lat: -34.397, lng: 150.644 };
  zoom = 8;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
  };
  markers = [
    {
      position: { lat: 22.2736308, lng: 70.7512555 },
      label: {
        color: 'red',
        text: 'Marker label',
      },
      title: 'Marker title',
      options: { animation: google.maps.Animation.BOUNCE },
    },
    {
      position: { lat: -34.397, lng: 151.244 },
      label: {
        color: 'blue',
        text: 'Marker label',
      },
      title: 'Marker title',
    },
  ];

  mapClicked(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.markers.push({
        position: event.latLng.toJSON(),
        label: {
          color: 'purple',
          text: 'Marker label',
        },
        title: 'Marker title',
        options: { animation: google.maps.Animation.DROP },
      });
    }
  }
}