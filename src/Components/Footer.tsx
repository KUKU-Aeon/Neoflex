import React from 'react';
import {NavLink} from "react-router-dom";
import lng from "./assets/lng.svg"
import TG from "./assets/Telegram.svg"
import VK from "./assets/VK.svg"
import WApp from "./assets/Whatsapp.svg"


let footer
let prevScroll: number = window.pageYOffset;
let scroll: number = window.pageYOffset;
let hide: boolean = false;
let scrolledDown: number = 0;

async function onScroll()
{

    footer = await document.querySelector('footer');

    if (!footer) {
        return;
    }

    scroll = window.pageYOffset;

    if ((footer) && !hide) {
        footer.classList.remove('hide');
    }

    if ((scroll - prevScroll > 0) && !hide) {
        footer.classList.add('hide');
        hide = true;
        prevScroll = scroll;
        scrolledDown = 0;
    } else {
        if (hide && (scroll - prevScroll < 0))
            scrolledDown += scroll - prevScroll;
        else
            scrolledDown = 0;

        if ((scrolledDown < -50) && hide) {
            footer.classList.remove('hide');
            hide = false;
            prevScroll = scroll
        }
    }
    if (hide && window.pageYOffset === 0) {
        footer.classList.remove('hide');
        hide = false;
        prevScroll = scroll
    }

    prevScroll = scroll
}

function Footer() {
    window.addEventListener('scroll', onScroll);
    return(<>
        <footer>
            <nav>
                <h1>QPICK</h1>
                <div>
                    <NavLink to='#'>Избранное</NavLink>
                    <NavLink to='#'>Корзина</NavLink>
                    <NavLink to='#'>Контакты</NavLink>
                    <NavLink to='#'>Условия сервиса</NavLink>
                    <div> </div>
                    <NavLink to='#'>
                        <img src={lng} alt="language"/>
                        <button>Рус</button>
                        <button>Eng</button>
                    </NavLink>
                </div>
                <div className="social_media">
                    <NavLink to="https://vk.com/perchiki_chillim"><img src={VK} alt=""/> </NavLink>
                    <NavLink to="https://t.me/jsenjoyer"><img src={TG} alt="" /> </NavLink>
                    <NavLink to="tel:+79001111111"><img src={WApp} alt="" /> </NavLink>
                </div>
            </nav>
        </footer>
        </>
    )
}

export default Footer;