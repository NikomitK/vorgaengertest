import { Component } from '@angular/core';
import { DemoItem } from '../demo-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  DEMO_ITEMS: DemoItem[] = [
    {
        id: 1,
        name: 'First Item',
        description: 'This is the first demo item',
        price: 10,
        quantity: 1
    },
    {
        id: 2,
        name: 'Second Item',
        description: 'This is the second demo item',
        price: 20,
        quantity: 2
    },
    {
        id: 3,
        name: 'Third Item',
        description: 'This is the third demo item',
        price: 30,
        quantity: 3
    },
    {
        id: 4,
        name: 'Second Item',
        description: 'This is the second demo item',
        price: 20,
        quantity: 2
    },
    {
        id: 5,
        name: 'Third Item',
        description: 'This is the third demo item',
        price: 30,
        quantity: 3
    },
    {
        id: 6,
        name: 'Second Item',
        description: 'This is the second demo item',
        price: 20,
        quantity: 2
    },
    {
        id: 7,
        name: 'Third Item',
        description: 'This is the third demo item',
        price: 30,
        quantity: 3
    },
    {
        id: 8,
        name: 'Second Item',
        description: 'This is the second demo item',
        price: 20,
        quantity: 2
    },
    {
        id: 9,
        name: 'Third Item',
        description: 'This is the third demo item',
        price: 30,
        quantity: 3
    },
    {
        id: 10,
        name: 'Second Item',
        description: 'This is the second demo item',
        price: 20,
        quantity: 2
    },
    {
        id: 11,
        name: 'Third Item',
        description: 'This is the third demo item',
        price: 30,
        quantity: 3
    },
    {
        id: 12,
        name: 'Second Item',
        description: 'This is the second demo item',
        price: 20,
        quantity: 2
    },
    {
        id: 13,
        name: 'Third Item',
        description: 'This is the third demo item',
        price: 30,
        quantity: 3
    }
];

}
