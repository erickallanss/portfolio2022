import styled from 'styled-components';
import bg1 from './assets/images/background1.jpg';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1084%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/rect%3e%3cpath d='M-67.79 -6.87 a60.92 60.92 0 1 0 121.84 0 a60.92 60.92 0 1 0 -121.84 0z' fill='rgba(249%2c 168%2c 38%2c 0.19)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M-103.01 28.34 a131.35 131.35 0 1 0 262.7 0 a131.35 131.35 0 1 0 -262.7 0z' fill='rgba(249%2c 168%2c 38%2c 0.19)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M89.023%2c213.741C130.881%2c215.6%2c164.42%2c180.8%2c182.604%2c143.052C198.513%2c110.027%2c191.999%2c71.855%2c172.25%2c40.973C154.107%2c12.602%2c122.596%2c-0.657%2c89.023%2c-3.284C48.72%2c-6.438%2c-0.052%2c-9.084%2c-20.299%2c25.906C-40.56%2c60.921%2c-11.536%2c100.37%2c8.813%2c135.333C28.971%2c169.968%2c48.988%2c211.963%2c89.023%2c213.741' fill='rgba(249%2c 168%2c 38%2c 0.19)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1468.386%2c278.118C1516.672%2c278.374%2c1556.827%2c247.133%2c1583.069%2c206.599C1612.385%2c161.318%2c1637.487%2c105.043%2c1610.782%2c58.174C1583.918%2c11.026%2c1522.648%2c5.801%2c1468.386%2c5.326C1412.952%2c4.841%2c1348.792%2c7.33%2c1321.604%2c55.641C1294.69%2c103.465%2c1325.572%2c159.586%2c1355.793%2c205.392C1382.165%2c245.363%2c1420.5%2c277.864%2c1468.386%2c278.118' fill='rgba(249%2c 168%2c 38%2c 0.19)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1474.325%2c285.872C1525.815%2c283.323%2c1574.562%2c263.612%2c1603.038%2c220.637C1635.035%2c172.348%2c1650.168%2c111.585%2c1624.079%2c59.865C1595.596%2c3.399%2c1537.565%2c-35.146%2c1474.325%2c-34.527C1412.018%2c-33.917%2c1360.338%2c8.567%2c1329.563%2c62.747C1299.21%2c116.184%2c1288.023%2c183.018%2c1321.472%2c234.574C1352.823%2c282.897%2c1416.793%2c288.72%2c1474.325%2c285.872' fill='rgba(249%2c 168%2c 38%2c 0.19)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1266.67 -13.34 a47.99 47.99 0 1 0 95.98 0 a47.99 47.99 0 1 0 -95.98 0z' fill='rgba(249%2c 168%2c 38%2c 0.19)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M113.352%2c672.35C154.245%2c672.815%2c192.799%2c654.366%2c215.241%2c620.178C240.239%2c582.097%2c250.841%2c534.462%2c230.681%2c493.613C208.238%2c448.14%2c164.06%2c413.238%2c113.352%2c413.731C63.319%2c414.218%2c21.554%2c450.745%2c-0.089%2c495.857C-19.101%2c535.486%2c-8.365%2c580.931%2c15.4%2c617.905C37.048%2c651.586%2c73.317%2c671.895%2c113.352%2c672.35' fill='rgba(249%2c 168%2c 38%2c 0.19)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M60.131%2c586.869C87.561%2c587.262%2c110.411%2c568.824%2c124.8%2c545.468C140.073%2c520.678%2c150.177%2c489.763%2c135.421%2c464.662C120.8%2c439.79%2c88.975%2c436.085%2c60.131%2c435.46C29.71%2c434.8%2c-5.992%2c434.82%2c-21.035%2c461.27C-35.994%2c487.572%2c-17.828%2c518.245%2c-1.405%2c543.658C13.175%2c566.22%2c33.271%2c586.484%2c60.131%2c586.869' fill='rgba(249%2c 168%2c 38%2c 0.19)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M-91.77 465.1 a108.87 108.87 0 1 0 217.74 0 a108.87 108.87 0 1 0 -217.74 0z' fill='rgba(249%2c 168%2c 38%2c 0.19)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1345.295%2c518.471C1363.523%2c518.96%2c1379.065%2c505.822%2c1387.38%2c489.593C1394.998%2c474.725%2c1391.926%2c457.656%2c1383.99%2c442.955C1375.541%2c427.304%2c1363.064%2c412.402%2c1345.295%2c411.631C1326.441%2c410.813%2c1308.835%2c422.487%2c1300.316%2c439.327C1292.484%2c454.809%2c1298.374%2c472.352%2c1306.947%2c487.436C1315.655%2c502.759%2c1327.676%2c517.999%2c1345.295%2c518.471' fill='rgba(249%2c 168%2c 38%2c 0.19)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1239.99 461.35 a101.36 101.36 0 1 0 202.72 0 a101.36 101.36 0 1 0 -202.72 0z' fill='rgba(249%2c 168%2c 38%2c 0.19)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1264.8 436.54 a51.74 51.74 0 1 0 103.48 0 a51.74 51.74 0 1 0 -103.48 0z' fill='rgba(249%2c 168%2c 38%2c 0.19)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1084'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
    background-size: cover;
    box-sizing: border-box;
`;

export const Screen = styled.div`
    width: 1400px;
    margin: 0 auto;
`;

export const Mainbar = styled.nav`
    width: inherit;
    height: 12vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    position: sticky;
`;

export const Buttons = styled.div`
    display: flex;
`;


export const logo = styled.div`
    border-radius: 50%;
    padding: 20px;
`;

export const logoImg = styled.img`
    margin-bottom: 0;
    margin-top: 100px;
    opacity: 1;
    width: 200px;
    filter: brightness(1);
    transform: rotate(-10deg);
    cursor: pointer;
`;

export const ButtonMenu = styled.div`
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    border-radius: 10px;
    margin-left: 20px;
    cursor: pointer;
    border: 2px solid #fff;
    text-transform: uppercase;
    transition: 0.3s;
    :hover {
        color: #000;
        background-color: rgb(249,168,38);
        border: 2px solid rgb(249,168,38);
        box-shadow: 0 0 10px rgb(249,168,38);
    }
`;

export const BodyContent = styled.div`
    width: 100%;
    height: calc(100vh - 12vh - 20px);
    display: flex;
`;

export const Sidebar = styled.aside`
    width: 100px;
    display: flex;
    align-items: center;
    margin-top: 260px;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const MediaIcon = styled.div`
    width: 50px;
    cursor: pointer;
    transition: 0.3s;
        :last-child {
            padding-bottom: 30px;
        }
        :hover {
            transform: scale(1.5);
            margin-bottom: 15px;
            margin-top: 15px;
        }
        :last-child:hover {
            margin-top: 30px;
            margin-bottom: 0;
        }
`;

export const MediaIconImg = styled.img`
    width: 100%;
    filter: invert(100%);
`;

export const Content = styled.div`
    width: 100%;
    margin-top: calc((100vh - 12vh - 20px) * (-0));
`;

export const ContentHome = styled.div`
    display: flex;
    padding-top: 50px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: auto 0;
    height: calc(100vh - 12vh - 20px);
    width: 100%;
    color: #f9a826;
`;

export const image1 = styled.img`
    opacity: 1;
    width: 500px;
`;

export const ContentAbout = styled.div`
    display: block;
    height: calc(100vh - 12vh - 20px);
    width: 100%;
    background-color: #FFF;
    color: #000F;
    background-color: #00f;
`;

export const ContentServices = styled.div`
    display: block;
    height: calc(100vh - 12vh - 20px);
    width: 100%;
    color: #000F;
    background-color: #cf4;
`;

export const ContenPortfolio = styled.div`
    display: block;
    height: calc(100vh - 12vh - 20px);
    width: 100%;
    color: #000F;
    background-color: #cff;
`;

export const ContentContact = styled.div`
    display: block;
    height: calc(100vh - 12vh - 20px);
    width: 100%;
    color: #000F;
    background-color: #ff4;
`;

export const saudacao = styled.h1`
    font-size: 50px;
    margin-top: 60px;
    text-align: center;
    overflow: hidden;
    border-right: .15em solid rgb(249,168,38);
    white-space: nowrap;
    letter-spacing: .10em;
    animation: 
    typing 2s steps(70, end),
    blink-caret .75s step-end infinite;
    padding: 5px;
    color: #f9a826;
    cursor: text;
        @keyframes typing {
            from { width: 0 }
            to { width: 87% }
        }
        
        /* The typewriter cursor effect */
        @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color:rgb(249,168,38) }
        }
`;
