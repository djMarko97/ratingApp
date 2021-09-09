import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';


const BASEURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class GymService {

  email: any;

  constructor(private http: HttpClient, private storage: Storage) {
    
   }


  getUserData(email): Observable<any>{
    return this.http.get(`${BASEURL}/home/${email}`);
  }

 async getEmail(){
    return await this.storage.get('useremail');
    
  }

  createGym(name, address, place, type, website, userId?): Observable<any>{
    return this.http.post(`${BASEURL}/gym/create`,{
        name: name,
        address: address,
        place: place,
        type: type,
        website: website,
        userId: userId
    });
  }

  getAllGyms():Observable<any> {
    return this.http.get(`${BASEURL}/gyms/all`);
  }

  addGymReview(gymId, service, staff, equipement, hygiene, overall, review, userId): Observable<any>{
    return this.http.post(`${BASEURL}/gym/review`,{
      gymId,
      service,
      staff,
      equipement,
      hygiene,
      overall,
      review,
      userId
    });
  }

  registerMember(gym, user, role): Observable<any>{
    return this.http.post(`${BASEURL}/register/member`,{
      gym,
      user,
      role
    });
      
  }

  

  uploadImage(user, image): Observable<any>{
    return this.http.post(`${BASEURL}/v1/profile/upload`,{
      user,
      image
    });
  }

  uploadLogo(id, image): Observable<any>{
    return this.http.post(`${BASEURL}/v1/gym/upload`,{
      gym: id,
      image: image
    });
  }

  searchGym(gym): Observable<any>{
    return this.http.post(`${BASEURL}/search-gym`,{
      gym
    })
  }

  leaderBoard(): Observable<any>{
    return this.http.get(`${BASEURL}/gyms/leaderboard`);
  }

  
}
