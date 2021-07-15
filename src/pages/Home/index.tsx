import React, { ChangeEvent, MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { Header } from '../../components/molecules'
import { setTheme } from '../../redux/theme/actions';

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

const Home: React.FC<{}> = () => {
    const theme = useSelector((state: any) => state.theme)
    const disptach = useDispatch()

    darkModeMediaQuery.addEventListener('change', (e) => {
        const preferedTheme = e.matches ? 'dark' : 'light'

        disptach(setTheme(preferedTheme))

    });


    const mouseOverElement = (e: MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLElement
        element.classList.add('stand')
    }

    const mouseLeaveElement = (e: MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLElement
        element.classList.remove('stand')
    }

    const mouseMoving = (e: MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLElement
        console.log('moving over:', { x: e.clientX, y: e.clientY })
    }
    
    const active3Dmovement = (e: MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLElement
        element.addEventListener('click', (moving) => {
            console.log('move', moving)
        })
    }

    return (
        <Div theme={theme}>

            <div
                className="scene"
                onMouseEnter={mouseOverElement}
                onMouseLeave={mouseLeaveElement}
                onMouseMove={mouseMoving}
                onClick={active3Dmovement}
            >
                <div className="floor"></div>
                <div className="cube">
                    <div className="top"></div>
                    <div className="front"></div>
                    <div className="side_right"></div>
                    <div className="side_left"></div>
                    <div className="bottom"></div>
                    <div className="back"></div>
                </div>
            </div>


        </Div>
    )
}

export default Home

const rotating = keyframes`
    0% { transform: rotateX(0deg) rotateY(0deg)}
    50% { transform: rotateX(180deg) rotateY(-90deg) }
    100% { transform: rotateX(1000deg) rotateY(90deg) }
`

const Div = styled.div<{ theme?: string }>`
    background-color: ${({ theme }) => theme === 'dark' ? 'var(--background-dark-theme)' : 'var(--background-light-theme)'};
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .scene {
        position: relative;
        transform-style: preserve-3d;
    }

    .floor {
        position: absolute;
        top: 1em;
        height: 14em;
        width: 14em;
        background-image: repeating-conic-gradient(from 67deg,#999 89deg 91deg,#111 91deg 224deg);
        background-size: 1em 1em;
        transform: translate(-50%, -50%) rotateX(90deg);
        box-shadow: inset 0px 0px 131px 132px #000;
    }

    .cube {
        position: absolute;
        width: 2em;
        height: 2em;
        background-color: rgba(255,255,255,0.1);
        transform-style: preserve-3d;
        left: -1em;
        top: -2em;
        animation: ${rotating} 5000ms ease-in-out infinite alternate;
        

        &.stand div{
            filter: brightness(2);
        }

        div {
            pointer-events: none;
        }
    }

    .front, .top, .side_right, .side_left, .bottom, .back {
        position: absolute;
        height: 100%;
        width: 100%;
        box-shadow: inset 0px 0px 37px -16px #333;
    }


    .front {
        background-color: #e1e1ee;
        transform: translate3d(0px, 0px, 2em)
    }

    .side_right {
        background-color: #e1e1ee;
        transform: translate3d(1em,0px,1em) rotateY(90deg);
    }

    .side_left {
        background-color: #e1e1ee;
        transform: translate3d(-1em,0px,1em) rotateY(270deg);
    }

    .back {
        background-color: #e1e1ee;
        transform: translate3d(0,0,0);
    }

    .bottom {
        background-color: #e1e1ee;
        transform: translate3d(0,1em,1em) rotateX(90deg);
    }
    .top {
        background-color: #e1e1ee;
        transform: translate3d(0,-1em,1em) rotateX(90deg);
    }
`