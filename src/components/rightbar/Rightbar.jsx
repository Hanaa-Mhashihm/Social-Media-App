import './rightbar.css'
import { Users } from "../../dummyData";
import Online from '../online/Online';

export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className='birthdayImg' />
          <span className="birthdayText">
            <b>Hanaa</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
           {Users.map(user => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Khartoum</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Omdurman</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Engaged</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ahmed Aziz</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ali Hashim</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/5.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Safaa Hashim</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/8.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Habab Arif</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/9.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lama Hussien</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/9.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lama Hussien</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        { profile ? <ProfileRightbar /> : <HomeRightbar /> }
      </div>
    </div>
  )
}
