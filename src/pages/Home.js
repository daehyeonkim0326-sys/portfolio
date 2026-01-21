import "./home.scss";
import { FaHeart } from "react-icons/fa6";
const Home = () => {
  return (
    <div className='home'>
        <div className='track'>
                <div className='track-list'>
                    <div className='album'>
                        <div class="turntable">
                            <div class="lp spinning">
                                <div class="label">
                                <div class="label-hole"></div>
                                </div>
                            </div>          

                        {/* <!-- 옵션: 바늘 --> */}
                            <div class="tonearm"></div>
                        </div>
                    </div>
                    <div className='txt'>
                        <h1>CREATOR</h1>
                        <h3>김대현</h3>
                    </div>
                    <FaHeart className='emoji'/>
                </div>
        </div>
    </div>
  )
}

export default Home