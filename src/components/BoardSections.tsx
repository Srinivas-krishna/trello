import { useDrop } from "react-dnd"



export function BoardSections(props:any){
    const [{ isOver,canDrop },drop] = useDrop({
        accept:["card"],
        drop:props.onDrop,
        collect:(monitor)=>({
            isOver: monitor.isOver(),
            canDrop:monitor.canDrop()
        }),
    })
    return(
        <>
            <div ref={drop} style={{display:"flex",alignItems:"center",flex:1,borderRight:"1px solid black",flexDirection:"column",minHeight:"100vh"}}>
                    {props.children}
            </div>
        </>
    )
}