import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;

    .nav{
        display:grid;
        align-items: center;
        justify-content: center;

        .imgLogo{
            max-width: 400px;
        }

        .cart{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    section{
        height: 100%;
        width: 100%;
        background: #800000;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        .product-content{ 
            display: grid;
            text-align: center;
            height: auto;
            background: #ffff;
            align-items: end;
            margin: 15px;

            .images{
                max-width: 220px;
            }

            .button{
                height: 30px;
                justify-content:end;
            }

        }
    }

`
