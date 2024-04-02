import './Main.css'
import img from '../images/illustration-working.svg'
export default function Main(){
    return(
        <>
        <div className='wrapper'>

            <div className='sec1'>
                <div><h3>More than just shorter links</h3></div>
                <div className='para'>Build your brand’s recognition and get detailed insights on how your links are performing.</div>
                <div><button>Get Started </button></div>
            </div>
            <div className='sec2'>
                <div><img src={img} alt="" /></div>
            </div>
        </div>
        </>
    )
}