import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


interface CardItem {
    imageUrl: string;
    codetitle: string;
    url:string
   
}
interface DesignItem {
  title: string;
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
      codetitle:"Html",
      imageUrl: 'https://dev.azure.com/trajashekar4230786/18f8717f-0bc0-4857-be3d-1485248f36eb/_apis/git/repositories/327409f9-539a-4929-8784-0f3fb5eb454c/items?path=/myangularresume/src/assets/html-5.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0',
      url:"#"
    },

    { 
      codetitle:"CSS",
      imageUrl: 'https://dev.azure.com/trajashekar4230786/18f8717f-0bc0-4857-be3d-1485248f36eb/_apis/git/repositories/327409f9-539a-4929-8784-0f3fb5eb454c/items?path=/myangularresume/src/assets/css-3.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0' ,
      url:"#"
    },

    { 
      codetitle:"Bootstrap",
      imageUrl: 'https://dev.azure.com/trajashekar4230786/18f8717f-0bc0-4857-be3d-1485248f36eb/_apis/git/repositories/327409f9-539a-4929-8784-0f3fb5eb454c/items?path=/myangularresume/src/assets/bootstrap.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0',
      url:"#"
    },

    { 
      codetitle:"Javascript",
      imageUrl: 'https://dev.azure.com/trajashekar4230786/18f8717f-0bc0-4857-be3d-1485248f36eb/_apis/git/repositories/327409f9-539a-4929-8784-0f3fb5eb454c/items?path=/myangularresume/src/assets/js.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0',
      url:"#"
    },

    { 
      codetitle:"JQuery",
      imageUrl: 'https://dev.azure.com/trajashekar4230786/18f8717f-0bc0-4857-be3d-1485248f36eb/_apis/git/repositories/327409f9-539a-4929-8784-0f3fb5eb454c/items?path=/myangularresume/src/assets/jq.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0',
      url:"#"
    },
    { 
      codetitle:"Angular",
      imageUrl: 'https://dev.azure.com/trajashekar4230786/18f8717f-0bc0-4857-be3d-1485248f36eb/_apis/git/repositories/327409f9-539a-4929-8784-0f3fb5eb454c/items?path=/myangularresume/src/assets/angularlogo.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0',
      url:"#"
    },

    { 
      codetitle:"NGRX",
      imageUrl: 'https://dev.azure.com/trajashekar4230786/18f8717f-0bc0-4857-be3d-1485248f36eb/_apis/git/repositories/327409f9-539a-4929-8784-0f3fb5eb454c/items?path=/myangularresume/src/assets/ngrx.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0',
      url:"#" 
    },

    { 
      codetitle:"React",
         imageUrl: 'https://dev.azure.com/trajashekar4230786/18f8717f-0bc0-4857-be3d-1485248f36eb/_apis/git/repositories/327409f9-539a-4929-8784-0f3fb5eb454c/items?path=/myangularresume/src/assets/reactjs.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0',
         url:"#"
    },

    { 
      codetitle:"Redux",
      imageUrl: 'https://dev.azure.com/trajashekar4230786/18f8717f-0bc0-4857-be3d-1485248f36eb/_apis/git/repositories/327409f9-539a-4929-8784-0f3fb5eb454c/items?path=/myangularresume/src/assets/redux.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0',
      url:"https://nextjsreduxstore-demo-git-master-trajashekar423s-projects.vercel.app/"
      
 },
 { 
  codetitle:"Nextjs",
  imageUrl: 'https://dev.azure.com/trajashekar4230786/18f8717f-0bc0-4857-be3d-1485248f36eb/_apis/git/repositories/327409f9-539a-4929-8784-0f3fb5eb454c/items?path=/myangularresume/src/assets/nextjslogo.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0',
  url:"https://nextjsreduxstore-demo.vercel.app/"
},
    // Add more items as needed
  ];


  mydesignitems: DesignItem[] = [   
     {    
      title:"Adobe Photoshop",
      imageUrl: 'https://dev.azure.com/trajashekar4230786/18f8717f-0bc0-4857-be3d-1485248f36eb/_apis/git/repositories/327409f9-539a-4929-8784-0f3fb5eb454c/items?path=/myangularresume/src/assets/ps.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0' 
    },

    {    
      title:"Adobe Illustrator",
      imageUrl: 'https://dev.azure.com/trajashekar4230786/18f8717f-0bc0-4857-be3d-1485248f36eb/_apis/git/repositories/327409f9-539a-4929-8784-0f3fb5eb454c/items?path=/myangularresume/src/assets/Adobe_Illustrator.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0' 
    },

    {   
      title:"Adobe XD", 
      imageUrl: 'https://dev.azure.com/trajashekar4230786/18f8717f-0bc0-4857-be3d-1485248f36eb/_apis/git/repositories/327409f9-539a-4929-8784-0f3fb5eb454c/items?path=/myangularresume/src/assets/xd.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0' 
    },

    {   
      title:"Figma", 
      imageUrl: 'https://dev.azure.com/trajashekar4230786/18f8717f-0bc0-4857-be3d-1485248f36eb/_apis/git/repositories/327409f9-539a-4929-8784-0f3fb5eb454c/items?path=/myangularresume/src/assets/figma.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0' 
    },
  ]
item: any;
DesignItem: any;

  constructor() { }

  ngOnInit(): void {
  }
}