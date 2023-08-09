import { useEffect } from "react"
import "./main.css"
import { cardData } from "../../Data/Data"
// import Img from "../../Assets/cuisine-1.jpg"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { HiOutlineClipboardCheck } from "react-icons/hi"

import Aos from "aos"
import "aos/dist/aos.css"

const Main = () => {
  // Let create a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <>
      <section className="main container section">
        <div className="secTitle">
          <h3 data-aos="fade-right" className="title">
            Most visited destination
          </h3>
        </div>

        <div className="secContent grid">
          {/* Here  we are using high ordfer array method(map). To do that we shall use a list of object in one array. i'm going to create an array named data and form that we shall . map(* array to fetch each desitnation at once . surly the best it will make sence to you*/}
          {cardData.map(
            ({ id, avatar, destTitle, location, grade, fees, description }) => {
              return (
                <div key={id} data-aos="fade-up" className="singleDestination">
                  <div className="imageDiv">
                    <img src={avatar} alt={destTitle} />
                  </div>
                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="content flex">
                      <HiOutlineLocationMarker className="icon" />
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>
                          {" "}
                          {grade}
                          <small>+1</small>
                        </span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>
                    <button className="btn flex">
                      DETAILS <HiOutlineClipboardCheck />
                    </button>
                  </div>
                </div>
              )
            }
          )}
        </div>
      </section>
    </>
  )
}

export default Main
