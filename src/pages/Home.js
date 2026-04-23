import "./home.scss";
import { FaHeart } from "react-icons/fa6";
const Home = () => {

    const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

  return (
    <div className='home'>
        <div className='track'>
                <div className='track-list'>
                    <div className='album'>
                        <div className="turntable">
                            <div className="lp spinning">
                                <div className="label">
                                <div className="label-hole"></div>
                                </div>
                            </div>          

                        {/* <!-- 옵션: 바늘 --> */}
                            <div className="tonearm"></div>
                        </div>
                    </div>
                    <div className='txt'>
                        <h1 onClick={() => scrollTo("me")}>CREATOR</h1>
                        <h3>김대현</h3>
                    </div>
                    <FaHeart className='emoji'/>
                </div>
        </div>
    </div>
  )
}

export default Home