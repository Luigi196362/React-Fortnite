import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants';
import '../styles/header.css'
const Header = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (/*
    <div class='header'>
      <div className="flex flex-fixed black">
        <Link to="/" className="no-underline black">
          <div >Fortnite-API</div>
        </Link>           

        {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link
              to="/create"
              className="ml1 no-underline black"
            >
              Nuevo registro
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-fixed">
        {authToken ? (
          <div
            className="ml1 pointer black"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              navigate(`/`);
            }}
          >
            Cerrar sesion
          </div>
        ) : (
          <Link
            to="/login"
            className="ml1 no-underline black"
          >
            Iniciar sesion
          </Link>
        )}
      </div>
    </div>
*/
    <div class='header'>
      <div class='header-name'>
      
        <Link to="/" class='link'>
        <button class='button-header-name'>Fortnite-API</button>
        </Link>
        
      </div>
      <div class='header-actions'>
        {authToken && (
          
          <Link to="/create" class='link'>
            <button class='button-header-action'>Nuevo registro</button>
          </Link>
        )}
      </div>
      <div class='header-login'>
        {authToken ? (
          <div
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              navigate(`/`);
            }}
            
          >
            <button class='button-header-login'>Cerrar sesion</button>
          </div>
        ) : (
          
          <Link to="/login" class='link'>
            <button class='button-header-login'>Iniciar sesion</button>
          </Link>
          
        )}
      </div>
    </div >
  );
};

export default Header;