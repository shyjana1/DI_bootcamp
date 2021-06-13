import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import { GiSlicedBread } from 'react-icons/gi'

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content:center;
    font-weight:700;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    @media screen and (min-width: 400px) {
        position: absolute;
        top: 10px;
        left: center;
    }
`;
export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p{
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
`

export const Bars = styled(GiSlicedBread)`
    font-size:2rem;
    transform: translate(-50%, 15%);
`
