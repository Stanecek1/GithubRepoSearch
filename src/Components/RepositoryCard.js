import React from "react";
import { GoStar, GoPerson } from "react-icons/go";


class RepositoryCard extends React.Component{
    
    render(){
        return(
            <div>
                <div className="Repository-card">
                    <div className="card-body">
                        <div className="row">
                            <h5 className="col-6 card-title">{this.props.repositoryData.name}</h5>
                            <h6 className="col-6 Star text-end"><GoStar/> {this.props.repositoryData.stargazers_count}</h6>
                        </div>
                        <h6 className="card-subtitle"><GoPerson/> {this.props.repositoryData.owner.login}</h6>
                        <h6 className="card-text" >{this.props.repositoryData.description}</h6>
                        <div className="row">
                            <h6 className="col-6">Language: {this.props.repositoryData.language}</h6>
                            <a className=" col-6 card-link text-end">Display Repository</a>
                        </div>
                    </div>
                </div>

                <div className="row" hidden id="iframeDiv">
                    <iframe sandbox="allow-forms allow-scripts"  id="iframe"></iframe>
                </div>
            </div>
        )
    }
}

export default RepositoryCard;