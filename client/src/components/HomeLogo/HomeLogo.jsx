import React from 'react';
import { Box, Container, Span } from './HomeLogo.styled';

const HomeLogo = () => {
  const style = { '--i': 1 };
  const style1 = { '--i': 2 };
  const style2 = { '--i': 3 };
  const style3 = { '--i': 4 };
  const style4 = { '--i': 5 };
  const style5 = { '--i': 6 };
  const style6 = { '--i': 7 };
  const style7 = { '--i': 8 };
  const style8 = { '--i': 9 };
  const style9 = { '--i': 10 };
  const style10 = { '--i': 11 };
  const style11 = { '--i': 12 };
  const style12 = { '--i': 13 };
  const style13 = { '--i': 14 };

  return (
    <Container>
      <Box>
        <Span style={style}>
          <i
            style={{
              color: '#F0DB4F',
            }}
          >
            JavaScript
          </i>
        </Span>
        <Span style={style1}>
          <i
            style={{
              color: '#171515',
              fontSize: '45px',
            }}
          >
            Github
          </i>
        </Span>
        <Span style={style10}>
          <i
            style={{
              color: '#F47F24',
            }}
          >
            Stack Overflow
          </i>
        </Span>
        <Span style={style3}>
          <i
            style={{
              color: '#bf4080',
              fontSize: '45px',
            }}
          >
            Sass
          </i>
        </Span>
        <Span style={style2}>
          <i
            style={{
              color: '#0078d7',
              fontSize: '65px',
            }}
          >
            Visual Studio Code
          </i>
        </Span>
        <Span style={style5}>
          <i
            style={{
              color: 'white',
              WebkitTextStrokeWidth: '5px',
              WebkitTextStrokeColor: '#ff0000',
              WebkitTextFillColor: '#ffffff',
              fontSize: '70px',
              letterSpacing: '10px',
              fontFamily: 'ui-monospace',
            }}
          >
            NPM
          </i>
        </Span>
        <Span style={style6}>
          <i
            style={{
              color: '#3e3e3e',
            }}
          >
            Animista.com
          </i>
        </Span>
        <Span style={style7}>
          <i
            style={{
              color: '#5f6368',
              fontSize: '45px',
              fontWeight: '700',
            }}
          >
            Google Fonts
          </i>
        </Span>
        <Span style={style8}>
          <i
            style={{
              color: '#61DBFB',
            }}
          >
            React JS
          </i>
        </Span>
        <Span style={style9}>
          <i
            style={{
              color: 'rgb(0, 127, 255)',
              fontSize: '45px',
            }}
          >
            Material UI
          </i>
        </Span>
        <Span style={style4}>
          <i
            style={{
              color: '#007acc',
            }}
          >
            TypeScript
          </i>
        </Span>
        <Span style={style11}>
          <i
            style={{
              color: '#1967d2',
              fontSize: '45px',
            }}
          >
            Chrome DevTools
          </i>
        </Span>
        <Span style={style12}>
          <i
            style={{
              color: '#3C873A',
            }}
          >
            Node JS
          </i>
        </Span>
        <Span style={style13}>
          <i
            style={{
              fontSize: '45px',
              backgroundImage:
                'linear-gradient(90deg, rgba(32,134,215,1) 0%, rgba(184,231,112,1) 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            WebStorm
          </i>
        </Span>
      </Box>
    </Container>
  );
};

export default HomeLogo;
