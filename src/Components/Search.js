
import React from "react";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css';
import Results from "./Results"
import Key from "./Key"
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({ });

var searchInput;

class Search extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: null,
            language: "",
            sort: "",
            errorMessage: ""
        };
    }

    //Sends request and returns result
    GetResponse  = async (input) =>{
        let response = await octokit.request('GET /search/repositories', {
        q: input + this.state.language,
        sort: this.state.sort,
        })
        return response.data.items;
    }

    //function that gets the input from the user, sends it to the 
    //GetResponse function and save the results to the state
    SearchInput = () => {
        //save this, for when we need it when this changes
        var that = this;
        searchInput = document.getElementById("input").value
        if (searchInput !== ""){   
            document.getElementById("errorMessage").setAttribute("hidden", true);
            document.getElementById("loadingIcon").removeAttribute("hidden");
            this.GetResponse(searchInput).then(function (result) {
                console.log(result)
                if(result.length > 0){
                    that.setState({data: result});
                    document.getElementById("loadingIcon").setAttribute("hidden", true)
                }
                else{
                    that.setState({errorMessage: "No Results"})
                    document.getElementById("errorMessage").removeAttribute("hidden");
                    document.getElementById("loadingIcon").setAttribute("hidden", true)
                }
            
            });
        }
        else{
            this.setState({errorMessage: "Please enter a search value"})
            document.getElementById("errorMessage").removeAttribute("hidden");
            console.log("please enter a search value");
        }
    }

    //updates the state of the language
    handleUpdateLanguage = (lang) => {
        this.setState({ language: "language: + " + lang }, () => {
            if (this.state.data !== null){
                this.SearchInput();
            }
        })
      }

      //updates the stars key
      handleUpdatestars = (bool) => {
        if (bool){
            this.setState({ sort: "stars"}, () => {
                if (this.state.data !== null){
                    this.SearchInput();
                }
            })
        }

        else{
            this.setState({ sort: ""}, () => {
                if (this.state.data !== null){
                    this.SearchInput();
                }
            })
        }
      }

    
    render() {
        return (
            <div>
                <div>
                    <input id="input"></input>
                </div>
                <div className="mt-2">
                    <Button variant="primary" onClick={this.SearchInput}>Search</Button>
                </div>
                <div className=" pt-2 d-flex justify-content-center">
                    <div id="errorMessage" hidden className="alert alert-success" role="alert">
                        {this.state.errorMessage}
                    </div>
                </div>
                

                <div id="loadingIcon" hidden className="spinner-border" role="status"></div>
                <div className="row">
                    <div className="keyDiv mt-3 col-1 text-start ">
                        <Key updatelangState={this.handleUpdateLanguage} updatestarsState={this.handleUpdatestars}></Key>
                    </div>
                    <div className="mt-3 col-10">
                        <Results  data={this.state.data}></Results>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;