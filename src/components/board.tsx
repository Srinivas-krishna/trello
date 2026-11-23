import { Appbar } from "./Appbar";
import { Card } from "./card";
import { BoardSections } from "./BoardSections";
import { useState } from "react";
export function Board(){
    const [pendingTasks,setPendingTasks]= useState([{id:"1",title:"card 1",description:"This is an example of pending task card"}]);
    const [ongoingTasks,setOngoingTasks]=useState([{id:"2",title:"card 2",description:"This is an example of ongoing task card"}]);
    const [completedTasks,setCompletedTasks]=useState([{id:"3",title:"card 3",description:"This is an example of completed task card"}]);
    return(
        <>
            <div>

                <Appbar/>

                <div style={{display:"flex"}}>


                    <BoardSections onDrop={(item)=>{
                        setPendingTasks(p=>p.filter(x=>x.id!=item.id))
                        setOngoingTasks(p=>p.filter(x=>x.id!=item.id))
                        setCompletedTasks(p=>p.filter(x=>x.id!=item.id))
                        setPendingTasks(p=>[...p,item])
                    }}>
                        {pendingTasks.map(task=><Card title={task.title} description={task.description} id={task.id}/>)}
                    </BoardSections>



                    <BoardSections onDrop={(item)=>{
                        setPendingTasks(p=>p.filter(x=>x.id!=item.id))
                        setOngoingTasks(p=>p.filter(x=>x.id!=item.id))
                        setCompletedTasks(p=>p.filter(x=>x.id!=item.id))
                        setOngoingTasks(p=>[...p,item])
                    }}>
                        {ongoingTasks.map(task=><Card title={task.title} description={task.description} id={task.id}/>)}
                    </BoardSections>



                    <BoardSections onDrop={(item)=>{
                        setPendingTasks(p=>p.filter(x=>x.id!=item.id))
                        setOngoingTasks(p=>p.filter(x=>x.id!=item.id))
                        setCompletedTasks(p=>p.filter(x=>x.id!=item.id))
                        setCompletedTasks(p=>[...p,item])
                    }}>
                       {completedTasks.map(task=><Card title={task.title} description={task.description} id={task.id}/>)}
                    </BoardSections>



                </div>

            </div>
        </>
    )
}