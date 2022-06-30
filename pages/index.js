import Category from "../components/Category";
import Image from "next/image"

export default function Home() {
  return (
    <div className="pt-5">

      <div className="row m-5">
        <div className="col">
          <div className="card">
              <Image 
              src="/../public/imgs/male_card.jpg"
              width="452px"
              height="558px"
              layout="responsive"
              />
              <div className="card-body">
                  <h5 className="card-title">Mens</h5>
              </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
              <Image 
              src="/../public/imgs/male_card.jpg"
              width="452px"
              height="558px"
              layout="responsive"
              />
              <div className="card-body">
                  <h5 className="card-title">Mens</h5>
              </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
              <Image 
              src="/../public/imgs/male_card.jpg"
              width="452px"
              height="558px"
              layout="responsive"
              />
              <div className="card-body">
                  <h5 className="card-title">Mens</h5>
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}
