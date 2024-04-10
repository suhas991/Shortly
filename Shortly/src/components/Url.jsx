import './Url.css'

export default function Url(){

    return (
        <div>
           <div className='holder'>
                <div>
                    <input type="text" className='id'/>
                </div>
                <div>
                    <button>Shorten it!</button>
                </div>
           </div>
           <div className='details'>
                <div >
                    <h2>Advanced Statistics</h2>
                </div>
                <div>
                    <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
                </div>
           </div>
        </div>
        
    )
}