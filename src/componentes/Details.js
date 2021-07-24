import React from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../assets/left-arrow.svg";
import { PokedexContext } from "../contexts/PokedexContext";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  background: ${(props) => props.typesBackground[props.type]};
`;
const Header = styled.div`
  position: relative;
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const ArrowLeft = styled(Arrow)`
  position: absolute;
  width: 30px;
  left: 10px;
  top: 10px;
`;
const Image = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  display: block;
  max-height: 100%;
  position: absolute;
  bottom: -30px;
`;
const Main = styled.div`
  width: 100%;
  height: 400px;
  background: white;
  border-radius: 50px 50px 0 0;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const Content = styled.div`
  /* margin-left: 20px; */
  display: flex;
  flex-direction: column;
`;
const ContentProperty = styled.div``;

const Title = styled.h3`
  margin-left: 20px;
`;

const ContentValue = styled.div`
  margin-left: 100px;
`;

const ContentBlock = styled.div`
  margin-left: 20px;
  display: flex;
`;

const Details = () => {
  const [isActive, setIsActive] = React.useState("about");

  const history = useNavigate();

  const { id } = useParams();
  const { typesBackground, data } = React.useContext(PokedexContext);

  const handleClickAbout = () => {
    setIsActive("about");
  };
  const handleClickBaseStats = () => {
    setIsActive("base stats");
  };

  if (data === null) return null;
  console.log(data[id - 1]);
  return (
    <Wrapper
      typesBackground={typesBackground}
      type={data[id - 1].types[0].type.name}
    >
      <Header>
        <ArrowLeft onClick={() => history(-1)} />
        <Image
          src={data[id - 1].sprites.other.dream_world.front_default}
          alt={data[id - 1].forms[0].name}
        />
      </Header>
      <Main>
        <HeaderContent>
          <p>
            {" "}
            <button onClick={handleClickAbout}> About </button>
          </p>
          <p>
            {" "}
            <button onClick={handleClickBaseStats}> Base Stats</button>{" "}
          </p>
          <p>Evolution</p>
          <p>Moves</p>
        </HeaderContent>
        <Content>
          {isActive === "about" && (
            <ContentBlock>
              <ContentProperty>
                <p>Species</p>
                <p>Height</p>
                <p>Weight</p>
                <p>Ability</p>
              </ContentProperty>
              <ContentValue>
                <p> {data[id - 1].name} </p>
                <p> {data[id - 1].height} </p>
                <p> {data[id - 1].weight} </p>
                <p>
                  {data[id - 1].abilities
                    .map((ability, index) => ability.ability.name)
                    .join(" - ")}
                </p>
              </ContentValue>
            </ContentBlock>
          )}
          {isActive === "base stats" && (
            <ContentBlock>
              <ContentProperty>
                <p>HP</p>
                <p>Attack</p>
                <p>Defense</p>
                <p>Sp. Atk</p>
                <p>Sp. Def</p>
                <p>Speed</p>
                <p>Total</p>
              </ContentProperty>
              <ContentValue>
                {data[id - 1].stats.map((stat, index) => (
                  <>
                    <p key={index}>{stat.base_stat}</p>
                  </>
                ))}
                {data[id - 1].stats
                  .map((stat) => stat.base_stat)
                  .reduce((acc, cur) => acc + cur)}
              </ContentValue>
            </ContentBlock>
          )}
        </Content>
      </Main>
    </Wrapper>
  );
};

export default Details;
