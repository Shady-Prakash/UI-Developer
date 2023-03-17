import SIdebar from '../components/SIdebar';
import styled from 'styled-components';
import bgImage from '../assets/images/headerImage/Godfatherheader.jpg'

const BackgroundImage = styled.div`
  background-image: linear-gradient(0deg, rgba(0,0,0,0.75), rgba(255,255,255,0.25)), url(${bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;


const Dashboard = ({children}) => {
  return (
    <>
    <div className='wrapper' style={{position: 'relative'}}>
      <BackgroundImage/>
      <SIdebar/>
      <div>{children}</div>
    </div>
      </>
    
  )
}

export default Dashboard