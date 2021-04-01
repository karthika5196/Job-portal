import { Component, OnInit } from '@angular/core';
import{CommonService} from './common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  obj: any = {};
  title = 'admin';
  isEdit = false;
  allJob: any;
  url="./assets/dummy.png";
  jobObj={
    id:'',
    jobtitle:'',
    jobdescription:'',
    image:''
  }
  constructor(private commonService:CommonService){}
  ngOnInit(){
    this.getLatestJob();
  }

  addJob(formObj:any){
    console.log(formObj)
    this.commonService.createJob(formObj).subscribe((response)=>{
      // console.log("job has been added")
      
      this.getLatestJob();
    })
}
getLatestJob(){
  this.commonService.getAllJob().subscribe((response)=>{
    this.allJob = response
    console.log(this.allJob);
  })
}
editJob(job:any){
  this.isEdit=true;
  this.jobObj = job;
}
deleteJob(job:any){
  this.commonService.deleteJob(job).subscribe(()=>{
    this.getLatestJob();
  })
}
updateJob(){
  this.isEdit = !this.isEdit;
  this.commonService.updateJob(this.jobObj).subscribe(()=>{
    this.getLatestJob();
  })
}
onSelect(input:any)
  {
    console.log(input.files);
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = (e: any) => {
        //console.log('Got here: ', e.target.result);
        this.obj.url = e.target.result;
        this.url=e.target.result;//display purpose
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
}
