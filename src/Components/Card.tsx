import DB, {Device} from './db';
import star from './assets/star.svg'
import about from './assets/about.png'
import * as actions from "../store/actions";
import {useDispatch} from "react-redux";
import Modal from './Modal'
import {useState} from "react"


const wirelessHP: Device[] = []
const wiredHP: Device[] = []


DB.forEach(product => {
    if (product.type === "wireless")
    {
        wirelessHP.push(product)
    }
    else
    {
        wiredHP.push(product)
    }
})

export const Card = () => {
    const dispatch = useDispatch<any>();

    const handleAddToCart = (elem: Device) => {
        dispatch(actions.addToCart(elem));
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [value, setValue] = useState({});

    const toggleVisibility = () =>
    {
        setModalIsOpen(!modalIsOpen);
    }

    const modalContent = (elem: any) => {
        if (Object.keys(elem).length === 0) return <><div>Пусто!</div></>
        else{
            return (
                <>
                    <h4>Дополнительная информация:</h4>
                    <h2>{elem.title}</h2>
                    <table>
                        <tr>
                            <td>Тип наушников</td>
                            <td>{elem.data.type}</td>
                        </tr>
                        <tr>
                            <td>Наличие микрофона</td>
                            <td>{elem.data.microphone}</td>
                        </tr>
                        <tr>
                            <td>Шумоподавление</td>
                            <td>{elem.data.noise_reduction}</td>
                        </tr>
                        <tr>
                            <td>Вес</td>
                            <td>{elem.data.weight}</td>
                        </tr>
                    </table>
                </>
            )
        }

    }

    let content = modalContent(value)

    const getDiscount  = (product: Device): string | JSX.Element =>
    {
        if (product.discount === 0) return `${product.price}₽`
        else{ return <div><b className={"old_price"}>{product.price}₽</b>&nbsp;&nbsp;&nbsp;{product.price-product.discount}₽</div>}
    }

    return(
        <>
        <Modal content={content} visibility={modalIsOpen} state={{toggleVisibility}}> </Modal>
        <h1>Наушники</h1>
        <div className={"section"}>
                {wiredHP.map((el: Device) =>
                    <>
                        <div className={"card"} key={el.id}>
                            <img  className={"about"} style={{cursor: "pointer"}} src={about} alt="Информация" id={el.id.toString()} onClick={() => {toggleVisibility(); setValue(el); console.log(el.discount === null)}}/>
                            <img src={require( `${ el.img}` )} alt="" className={"image"}/>
                            <div className={"flexible"}>
                                <p style={{textAlign: "left", cursor: "pointer"}}>{el.title} </p>
                                <p style={{textAlign: "right", color: "#f1c40f", verticalAlign: 'middle'}}>{getDiscount(el)}</p>
                                <p style={{textAlign: "left"}}><img src={star} alt=""/>{el.rate} </p>
                                <button style={{textAlign: "right"}} onClick={() => handleAddToCart(el)}>Купить</button>
                            </div>
                        </div>
                    </>
              )}
        </div>
            <h1>Беспроводные наушники</h1>
            <div className={"section"}>
            {wirelessHP.map((el: Device) =>
                <>
                    <div className={"card"} key={el.id}>
                        <img  className={"about"} style={{cursor: "pointer"}} src={about} alt="Информация" id={el.id.toString()} onClick={() => {toggleVisibility(); setValue(el);  console.log(el.discount === null)}}/>
                        <img src={require( `${ el.img}` )} alt="" className={"image"}/>
                        <div className={"flexible"}>
                            <p style={{textAlign: "left", cursor: "pointer"}}>{el.title} </p>
                            <p style={{textAlign: "right", color: "#f1c40f", verticalAlign: 'middle'}}>{getDiscount(el)}</p>
                            <p style={{textAlign: "left"}}><img src={star} alt=""/>{el.rate} </p>
                            <button style={{textAlign: "right"}} onClick={() => handleAddToCart(el)}>Купить</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    </>
    )
}

