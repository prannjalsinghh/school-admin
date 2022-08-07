const ShowContactUsDataEach =(props)=>{
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.phone}</p>
            <p>{props.email}</p>
            <p>{props.subject}</p>
            <p>{props.message}</p>
           
        </div>
    )
}
export default ShowContactUsDataEach;