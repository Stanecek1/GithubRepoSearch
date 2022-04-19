import React from "react";
import Table from "react-bootstrap/Table";
import RepositoryCard  from "./RepositoryCard";

class Results extends React.Component{

    render(){
        if (this.props.data != null){
            return(
                <div className="card" >
                    <table className="table table-bordered table-dark">
                        <tbody>
                            {this.props.data.map((result, index) => ( 
                                <tr>
                                    <td><RepositoryCard repositoryData={result}></RepositoryCard></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        }
        return(
            <div></div>
        )
    }
    
}

export default Results;