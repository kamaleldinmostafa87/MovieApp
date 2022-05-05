import React,{useState} from 'react'

export default function Search({getQuery}) {
    const[text,setText]=useState('')

    const onChange=(q)=>{
        setText(q);
        getQuery(q);
    }
    return (
        <section className='search'>
            <form>
                <input type='text'
                 className="form-control" 
                 placeholder='Enter Your Search' 
                 value={text}
                 onChange={(e)=>onChange(e.target.value)}/>
            </form>
        </section>
    )
}
