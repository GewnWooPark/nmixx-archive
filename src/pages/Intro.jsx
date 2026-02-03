import { Link } from 'react-router-dom'

function Intro() {
    return (
        <div style={{backgroundColor: 'black', height: '100vh', color: 'white', display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
            <h1>NMIXX ARCHIVE</h1>
            <p>엔믹스 헤헤</p>
            <br />
            <Link to="/home" style={{ textDecoration: 'none', color: 'white', border: '1px solid white', padding: '10px 20px', borderRadius: '20px'}} >
                이곳을 클릭하세요...
            </Link>
        </div>
    )
}
export default Intro