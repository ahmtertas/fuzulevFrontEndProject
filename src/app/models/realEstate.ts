export interface RealEstate {
  id: number;
  title: string;
  adNo: string;
  price: number;
  listingDate: Date;
  realEstateType: string;
  areaGross: number;
  areaNet: number;
  numberOfRooms: number;
  buildingAge: number;
  floorLocation: number;
  numberOfFloors: number;
  heating: string;
  numberOfBathrooms: number;
  balcony: string;
  lift: string;
  carPark: string;
  furnished: string;
  usingStatus: string;
  dues: number;
  fromWho: string;
  imageUrl: string;
}
