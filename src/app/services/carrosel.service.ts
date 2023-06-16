import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrosel } from '../model/carrosel';

@Injectable({
  providedIn: 'root'
})
export class CarroselService {
carrosel:Carrosel[]=[];
  constructor(private http: HttpClient) { }

  
}
