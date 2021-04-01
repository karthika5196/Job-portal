import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  createJob(job:any){
    return this.http.post("http://localhost:3000/joblist",job)
  }
  getAllJob(){
    return this.http.get("http://localhost:3000/joblist")
  }
  updateJob(job:any){
     return this.http.put("http://localhost:3000/joblist" +job.id,job)
  }
  deleteJob(job:any){
    return this.http.delete("http://localhost:3000/joblist/" +job.id)
  }
}
