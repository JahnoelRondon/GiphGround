import styled,{createGlobalStyle} from 'styled-components'

export const lightTheme = {
    body: '#fff',
    fontColor: '#000',
    secondary: '#fe6568'
}

export const darkTheme = {
    body: '#000',
    fontColor: '#fff',
    secondary: 'blue'
}

export const HeadContainer = styled.div`
    width: 100%;
    height: 60px;
    background-image: linear-gradient(to right, #e646b6 , ${({ theme }) => theme.secondary});
    border-bottom: 1px solid #43a6c6;
    transition: all 0.5s;

    p {
        font-size: 18px;
        text-align: center;
        line-height: 60px;
    }

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        color: wheat;
    }

    @media only screen and (max-width: 600px) {
        p {
            font-size: 12px;
        }
    }
`

export const FooterContainer = styled.div`
    width: 100%;
    height: 40px;
    background-image: linear-gradient(to right, #e646b6 , purple);
    border-top: 1px solid #43a6c6;
    transition: all 0.5s;
    
    p {
        color: white;
        font-size: 16px;
        text-align: center;
        line-height: 40px;
    }
    
    p a svg {
        font-size: 28px;
        color: white;
        margin: 0 5px;
        transition: all 0.4s;
    }

    p a svg:hover {
        color: ${({theme}) => theme.secondary}
    }

    @media only screen and (max-width: 600px) {
        p {
            font-size: 12px;
        }
    }
`

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.body}
    }
`;
