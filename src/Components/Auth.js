import React from "react";
import "../css/App.css";
import { withAuth } from "@okta/okta-react";
import { useAuth } from "../auth";
import { Navigation } from "./Navigation";

export const Auth = withAuth(({ auth }) => {
  const [authenticated, user] = useAuth(auth);

  return (
    <div>
      <Navigation></Navigation>
      <div className="wrap">
        <div className="info-block">
          {authenticated === true && (
            <div>
              <div className="info-block">
                <img
                  src="./static/img/naruto-happy.gif"
                  className="naruto-image-2"
                ></img>

                <div className="text">
                  <p>
                    Молодчина! Ты -{" "}
                    <span className="colored-span">авторизованный</span> ниндзя!
                  </p>
                  <p>
                    Пусть на данном этапе существования моего GitHub-клиента
                    никаких дополнительных прав после авторизации ты не
                    приобрёл, кое-какой бонус ты всё же получишь!
                  </p>
                </div>
              </div>
              <div className="video-wrap">
                <iframe
                  className="bonus-video"
                  width="280"
                  height="157.5"
                  src="https://www.youtube.com/embed/N74V_hj7k28"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          )}

          {authenticated === false && (
            <div className="info-block">
              <img
                src="./static/img/naruto-sad.gif"
                className="naruto-image"
              ></img>

              <div className="text">
                <p>Ты до сих пор не авторизовался... *FeelsBadMan*</p>
                <p>
                  Поспеши, ведь только ради того, чтобы разобраться с настройкой
                  авторизации, я потратил половину выходного!
                </p>
                <p>
                  В конце концов решение было найдено: я использовал{" "}
                  <a href="https://developer.okta.com/product/">okta</a>.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="button-wrap">
          {authenticated !== null && (
            <button
              onClick={() => (authenticated ? auth.logout() : auth.login())}
              className="login-btn"
            >
              {authenticated ? "Выйти" : "Войти"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
});
