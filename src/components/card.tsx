export function Card(props){
    return(
        <>
            <div style={{backgroundColor:"#FAA18F",padding:"10px",display:"flex",border:"1px solid black",width:"80%",flexDirection:"column",cursor:"pointer",margin:"10px auto",borderRadius:"20px"}}>
                <div style={{display:"flex",justifyContent:"center",borderBottom:"0.2px solid black"}}>
                    {props.title}
                </div>

                <div style={{padding:"10px",overflowWrap:"anywhere",minWidth:0}}>
                    {props.description}
                </div>
            </div>
        </>
    )
}