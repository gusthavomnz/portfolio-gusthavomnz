import gitlink from '../assets/gitliinkpnx.png';


function GitBanner() {
    return (
        <div className="bg-sky-950 flex  h-16 relative mt-2">
            <div className='bg-black flex w-full justify-center items-start my-0.5 object-contain overflow-hidden'>
            <img src={gitlink} alt="GitHub" className="h-24 w-auto -mt-4" />
            </div>
        </div>
    )
}
export default GitBanner;
