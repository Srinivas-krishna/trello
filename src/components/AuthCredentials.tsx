export function AuthCredentials(){
    return(
        <>
            <div style={{ display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"}}>

                <div style={{display:"flex",justifyContent:"center"}}>
                    <h1 style={{fontFamily:"sans-serif",alignContent:"center"}}>Login to trello</h1>
                </div>

                <div style={{display:"flex",justifyContent:"center"}}>
                    <input type="text" placeholder="Username" style={{padding:"10px",margin:"10px"}}></input>
                </div>

                <div style={{display:"flex",justifyContent:"center"}}>
                    <input type = "text" placeholder = "Password" style={{padding:"10px",margin:"10px"}}></input>
                </div>

                <div style={{display:"flex",justifyContent:"center"}}>
                        <button className="button-36" role="button">Login</button>
                </div>
                
            </div>
        </>
    )
}




