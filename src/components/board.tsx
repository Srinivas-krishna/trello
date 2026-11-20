import { Appbar } from "./Appbar";
import { Card } from "./card";

export function Board(){
    return(
        <>
            <div>

                <Appbar/>

                <div style={{display:"flex"}}>
                    <div style={{display:"flex",alignItems:"center",flex:1,borderRight:"1px solid black",flexDirection:"column",minHeight:"100vh"}}>
                        <Card title={"card 1"} description={"Card 1 description this is the description of the first card element and it is an example to test the card element.Card 1 description this is the description of the first card element and it is an example to test the card elementCard 1 description this is the description of the first card element and it is an example to test the card element"}/>
                    </div>

                    <div style={{display:"flex",flex:1,borderRight:"1px solid black",minHeight:"100vh"}}>
                        Div number 2
                    </div>

                    <div style={{display:"flex",flexDirection:"column",flex:1,borderRight:"1px solid black",minHeight:"100vh",}}>
                        Div number 3
                        <Card title={"card 1"} description={"Card 1 description this is the description of the first card element and it is an example to test the card element"}/>
                        <Card title={"card 1"} description={"Card 1 description this is the description of the first card element and it is an example to test the card element"}/>
                    
                    </div>

                </div>

            </div>
        </>
    )
}