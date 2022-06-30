import Image from 'next/image'
import Link from 'next/link'
export default function Category(props) {
    return (
        <div className="card">
            
            <div className='m-2'>
            <a href={props.href}>
              <Image 
              src={props.img_src}
              width="452px"
              height="558px"
              layout="responsive"
              />
            </a>
            </div>
            <div className="card-body">
                <h5 className="card-title text-center"><b>{props.card_title }</b></h5>
            </div>
            
        </div>
    )
}