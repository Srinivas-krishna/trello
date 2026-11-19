import { AuthCredentials } from "./AuthCredentials"
import { AuthBanner } from "./AuthBanner"



export function Signup() {
  return (
    <>
      <div style={{display:"flex"}}>
        <div style={{flex:1}}>
            <AuthBanner/>
        </div>
        <div style ={{flex:1}}>
            <AuthCredentials/>
        </div>
      </div>

      
    </>
  )
}

