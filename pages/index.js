import Category from "../components/Category";
import Image from "next/image"

export default function Home() {
  return (
    <div className="pt-5">

      <div className="row m-5">
        <div className="col">
          <Category img_src = "/../public/imgs/male_card.jpg" card_title="Mens"/>
        </div>
        <div className="col">
          <Category img_src = "/../public/imgs/male_card.jpg" card_title="Mens"/>
        </div>
        <div className="col">
          <Category img_src = "/../public/imgs/male_card.jpg" card_title="Mens"/>
        </div>
      </div>
    </div>

  )
}
