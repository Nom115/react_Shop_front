import Image from 'next/image'
export default function Category(props) {
    return (
        <div className="card">
            <Image 
              src={props.img_src}
              width="452px"
              height="558px"
              layout="responsive"
              />
            <div className="card-body">
                <h5 className="card-title">{ props.card_title }</h5>
            </div>
        </div>
    )
}