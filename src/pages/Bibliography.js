import React from 'react';
import { Link } from 'react-router-dom';
//import Tableau from "tableau-react";
import Template from './Template';
import BibEntry from '../components/BibEntry'
//import Visualization from '../components/Visualization';

function Bibliography(){
    return(
        <Template>
            <div>
                <p>Bibliography page goes here</p>
                <BibEntry citation="this is supposed to be an MLA citation" annotation="and this is gonna be our really long annotations"/>
                <BibEntry citation="this is supposed to be an MLA citation" annotation="and this is gonna be our really long annotations"/>
                <BibEntry citation="this is supposed to be an MLA citation" annotation="and this is gonna be our really long annotations"/>
                <BibEntry citation="this is supposed to be an MLA citation" annotation="and this is gonna be our really long annotations"/>
                <BibEntry citation="this is supposed to be an MLA citation" annotation="and this is gonna be our really long annotations"/>
                <BibEntry citation="this is supposed to be an MLA citation" annotation="and this is gonna be our really long annotations"/>
                <BibEntry citation="this is supposed to be an MLA citation" annotation="and this is gonna be our really long annotations"/>
                <BibEntry citation="this is supposed to be an MLA citation" annotation="and this is gonna be our really long annotations"/>
                <BibEntry citation="this is supposed to be an MLA citation" annotation="and this is gonna be our really long annotations"/>
                <BibEntry citation="this is supposed to be an MLA citation" annotation="and this is gonna be our really long annotations"/>
                <BibEntry citation="this is supposed to be an MLA citation" annotation="and this is gonna be our really long annotations"/>
                <BibEntry citation="this is supposed to be an MLA citation" annotation="and this is gonna be our really long annotations"/>
                <BibEntry citation="this is supposed to be an MLA citation" annotation="and this is gonna be our really long annotations"/>
                <BibEntry citation="this is supposed to be an MLA citation" annotation="and this is gonna be our really long annotations"/>
                <BibEntry citation="this is supposed to be an MLA citation" annotation="and this is gonna be our really long annotations"/>
                <BibEntry citation="this is supposed to be an MLA citation" annotation="and this is gonna be our really long annotations"/>
                <BibEntry citation="this is supposed to be an MLA citation" annotation="and this is gonna be our really long annotations"/>
            </div>
        </Template>
    )
}

export default Bibliography;