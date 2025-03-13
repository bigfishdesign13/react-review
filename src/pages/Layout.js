// import { useState } from "react";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

const StyledNav = styled.div`
  padding: 1rem;
  nav {
    font-size: 12px;
    font-weight: 500;
    margin: auto;
    max-width: 1280px;
    text-transform: uppercase;
    width: 100%;
    ul {
      display: flex;
      justify-content: center;
      a {
        padding: 0.5rem 1rem;
        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      }
    }
  }
`;

const Layout = () => {
  return (
    <>
      <StyledNav>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/interview">Interview</Link>
            </li>
          </ul>
        </nav>
      </StyledNav>

      <Outlet />
    </>
  );
};

export default Layout;
