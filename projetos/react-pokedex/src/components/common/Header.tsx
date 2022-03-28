import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const faArrowIcon = faArrowRightToBracket as IconProp;

function Header() {
    return (
        <div
            style={{
                display: "flex",
                backgroundColor: "#9B0D11",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: "12vh",
            }}
        >
            <img src={Logo} alt="Pokedex-logo" width="200px" />
            <SearchBar />

            <Link to="login" style={{ fontSize: "40px", color: "white" }}>
                <FontAwesomeIcon icon={faArrowIcon} />
            </Link>
        </div>
    );
}

export default Header;
