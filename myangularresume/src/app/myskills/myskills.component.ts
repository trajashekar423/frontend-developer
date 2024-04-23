import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


interface CardItem {
    imageUrl: string;
}

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.css'
})
export class MyskillsComponent implements OnInit {
  items: CardItem[] = [
    { 
     
      imageUrl: 'https://dev.azure.com/trajashekar4230786/18f8717f-0bc0-4857-be3d-1485248f36eb/_apis/git/repositories/327409f9-539a-4929-8784-0f3fb5eb454c/items?path=/myangularresume/src/assets/html-5.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0' 
    },
    { 
   
      imageUrl: 'https://dev.azure.com/trajashekar4230786/18f8717f-0bc0-4857-be3d-1485248f36eb/_apis/git/repositories/327409f9-539a-4929-8784-0f3fb5eb454c/items?path=/myangularresume/src/assets/css-3.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0' 
    },

    { 
   
      imageUrl: 'https://dev.azure.com/trajashekar4230786/18f8717f-0bc0-4857-be3d-1485248f36eb/_apis/git/repositories/327409f9-539a-4929-8784-0f3fb5eb454c/items?path=/myangularresume/src/assets/bootstrap.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0' 
    },

    { 
   
      imageUrl: 'https://dev.azure.com/trajashekar4230786/18f8717f-0bc0-4857-be3d-1485248f36eb/_apis/git/repositories/327409f9-539a-4929-8784-0f3fb5eb454c/items?path=/myangularresume/src/assets/bootstrap.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0' 
    },
    // Add more items as needed
  ];
item: any;

  constructor() { }

  ngOnInit(): void {
  }
}