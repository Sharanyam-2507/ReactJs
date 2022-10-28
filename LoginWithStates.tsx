import React, {Component} from "react";
export class Login extends Component<{}, {username:string, password:string}>{
    public toast:any=<p></p>
    constructor (props:any){
   super(props)
           this.state={username:'', password:''}
    
}
    render(): React.ReactNode{
        return(
            <div>
                Enter Username:<input type='text' placeholder='Enter username' onChange={(e)=>this.setUserName(e)}/>
                <br/>
                Enter Password:<input type="password" placeholder='Enter password' onChange={(e)=>this.setPassword(e)}/>
                <br/>
                <button onClick={()=> this.VerifyLogin()}>Login</button>
                  {this.toast}
            </div>
        )
    }
    public VerifyLogin(){
       
        if(this.state.username=='admin'&& this.state.password=='nimda'){
            
            this.toast=OkToast()
        }
        else{
            this.toast= ErrorToast()
                }
                this.forceUpdate()

    }
    public setUserName(e:any){
        console.log(e.target.value)
        this.setState({username:e.target.value})

    }
    public setPassword(e:any){
        this.setState({password:e.target.value})

    }
}
export function OkToast(){
    return(
        <div className="success">Login Successful!</div>
    )
}
export function ErrorToast(){
    return(
        <div className="Error">Login failed</div>
    )
}

