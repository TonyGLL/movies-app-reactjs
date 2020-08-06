import React from 'react';

import styled from 'styled-components';

const HeaderStyled = styled.div`
    
`;

function Header() {
    return (
        <HeaderStyled>
            <nav className="navbar navbar-light bg-dark text-white p-2 border-bottom border-white">
                <h3 className="text-white">
                    MovieApp
                </h3>
            </nav>
        </HeaderStyled>
    );
}

export default Header;