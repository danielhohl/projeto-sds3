import NavBar from "components/NavBar";
import Footer from "components/Footer";
import { Link } from "react-router-dom";

//import BarChart from "components/BarChart";
//import DataTable from "components/DataTable";
//import DonutChart from "components/DonutChart";


const Home = () => {
    return (
        <>
        <NavBar />
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">DSVendas</h1>
                <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                <hr/>
                <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                <Link className="btn btn-primary btn-lg" to="/dashboard">
                    Acessar o dashboard
                </Link>
            </div>
        </div> 
        <div className="div">
                <tr>
                    <td>
                         
                    </td>
                </tr>
        </div>
        <div>
        <Footer />
            </div>      
        
        </>
    );
}

export default Home;