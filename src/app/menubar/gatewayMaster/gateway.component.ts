import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";

declare const sampIntDropDownFunction:any;
declare const modelDropDownFunction:any;



@Component({
    selector:'app-gateway',
    templateUrl:'./gateway.component.html',
    styleUrls: ['./gateway.component.css']
    
})
export class gatewayMasterComponent implements OnInit,AfterViewInit{

    // @ViewChild('modelDropdown') mD:any;
    // @ViewChild('sampleIntDropdown') sID:any;
    modelDropdown(){
        console.log(" btn clicked ");
        
        modelDropDownFunction();
    }
    sampIntDropdown(){
        sampIntDropDownFunction();
        
    }
    ngOnInit(){

    }
    ngAfterViewInit(){
    }
    
}