import Show from "../components/Show";
 import trialImg from "../assets/trial-img.avif"
const Home = ()=>{


    return(
        <>
        <h1>home page</h1>
        <img src="/trial-img.avif"/>
        <img src={trialImg}/>
        <Show/>
        </>
    )
}
export default Home;