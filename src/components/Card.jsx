import React from 'react'

function Card(props) {
    console.log(props);
    return (
        <div className='w-[350px] shadow-xl p-6 rounded-xl'>
            <div>
                <h3 className='text-black font-bold mb-4'>{props.data.name}</h3>
                <hr />
                <p className='mt-6 text-black'>{props.data.desc}</p>
                <input type="checkbox" className="toggle [--tglbg:white] bg-slate-500 hover:bg-slate-700 border-slate-500"  />
            </div>
        </div>
    )
}

export default Card