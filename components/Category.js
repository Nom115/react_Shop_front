
export default function Category(props) {
    return (
        <div className="card">
            <img src={props.img_src} alt="picture"></img>
            <div className="card-body">
                <h5 className="card-title">{ props.card_title }</h5>
            </div>
        </div>
    )
}