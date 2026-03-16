function Diagram({nodes}){

return(
<div className="diagram">

{nodes.map((n,i)=> (

<div className="diagram-node" key={i}>

{n}

</div>

))}

</div>
)

}

export default Diagram