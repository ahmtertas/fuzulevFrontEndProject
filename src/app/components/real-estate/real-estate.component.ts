import { Component, OnInit } from '@angular/core';
import { RealEstate } from '../../models/realEstate';
import { HttpClient } from '@angular/common/http';
import { RealEstateResponseModel } from '../../models/realEstateResponseModel';
import { response } from 'express';
import { RealEstateService } from '../../services/real-estate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrl: './real-estate.component.css',
})
export class RealEstateComponent implements OnInit {
  realEstates: RealEstate[] = [];
  dataLoaded = true;

  constructor(
    private realEstateService: RealEstateService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["titleName"]) {
        this.getRealEstateWithTitle(params['titleName']);
      } else if(params['ordertype']){
        this.getRealEstateWithOrder(params['ordertype']);
      }else if(params['all']){
        this.getRealEstate();
      }else if(params['from']){
        this.getRealEstateFromWho(params['from']);
      }else if(params['top']){
        this.getRealEstateTop(params['top']);
      }

    });

  }

  getRealEstate() {
    this.realEstateService
      .getRealEstate()
      .subscribe((realEstates: RealEstate[]) => {
        this.realEstates = realEstates;
        this.dataLoaded = true;
      });
  }

  getRealEstateWithTitle(titleName: string) {
    this.realEstateService
      .getRealEstateWithFilter(titleName)
      .subscribe((realEstates: RealEstate[]) => {
        this.realEstates = realEstates;
        this.dataLoaded = true;
      });
  }

  getRealEstateWithOrder(ordertype: string) {
    this.realEstateService
      .getRealEstateWithOrder(ordertype)
      .subscribe((realEstates: RealEstate[]) => {
        this.realEstates = realEstates;
        this.dataLoaded = true;
      });
  }

  getRealEstateFromWho(from: string) {
    this.realEstateService
      .getRealEstateFromWho(from)
      .subscribe((realEstates: RealEstate[]) => {
        this.realEstates = realEstates;
        this.dataLoaded = true;
      });
  }

  getRealEstateTop(top: number) {
    this.realEstateService
      .getRealEstateTop(top)
      .subscribe((realEstates: RealEstate[]) => {
        this.realEstates = realEstates;
        this.dataLoaded = true;
      });
  }
}
