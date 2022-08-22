import { EventEmitter, Injectable } from "@angular/core";
import { IUser } from "../models/IUser";
@Injectable({
    providedIn:'root'
})
export class UsersService{
    isLogin:boolean=false;
    users:IUser[]=[
        // {id:1, name:'a1',email:'a1@gmail.com',phone:'999999999'}
    ]

    getUsersEvent = new EventEmitter<void>()
    constructor(){
    }
    addUser(user:IUser){
        if(!user.id) user.id=this.users.length+1;
        this.users.push(user);
        this.setData(this.users);
    }
    editUser(){

    }
    deleteUser(id: number){
        this.users = this.users.filter(user => {
            return user.id !== id;
        })
        this.setData(this.users);
    }
    setData(user:Object){
        window.localStorage.setItem("data",JSON.stringify(user));
    }
    getData(){
        let data1=window.localStorage.getItem("data");
        if(data1){
            this.users=JSON.parse(data1);
        }
        else{
            this.setData(this.users);
        }
    }
}