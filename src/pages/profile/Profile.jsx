import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './profile.css'

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="assets/post/post6.jpeg" alt="" className="profileCoverImg" />
                    <img src="assets/person/1.jpeg" alt="" className="profileUserImg" />
                </div>
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Hanaa Hashim</h4>
                <span className="profileInfoDesc">Be so good, they can't ignore you</span>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <Rightbar profile/>
            </div>
        </div>
      </div>
    </>
  )
}
