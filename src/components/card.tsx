import { useRef } from "react";
import { useDrag } from 'react-dnd';


interface CardProps {
    title: string;
    description: string;
}

export function Card(props:CardProps){
    const ref = useRef<HTMLDivElement>(null);
    const[{opacity},dragRef] = useDrag(
        () =>({
            type:"card",
            item:{title:props.title,description:props.description},
            collect:(monitor)=>({
                opacity: monitor.isDragging()?0.5:1
            })
        })
    );
    dragRef(ref);
    return(
        <>
            
            <div ref={ref} style={{opacity,backgroundColor:"#FAA18F",padding:"10px",display:"flex",border:"1px solid black",width:"80%",flexDirection:"column",cursor:"pointer",margin:"10px auto",borderRadius:"20px"}}>
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