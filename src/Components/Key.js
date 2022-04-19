import React from "react";

class Key extends React.Component {
    ids = ["javascript", "java", "html", "python", "swift", "cpp", "cs"];
    //handles event when laguage key is changed
    handleChange(e) {
        let isChecked = e.target.checked;
        if (isChecked){
            this.ids.forEach(element => {
                document.getElementById(element).checked = false;
            });
            e.target.checked = true;
            let id = e.target.id;
            this.props.updatelangState(id);
        }
        else{
            this.props.updatelangState("");
        }

      }

      //handles event when stars key is changed
      handleChangeStars(e) {
        let isChecked = e.target.checked;
        if (isChecked){
            this.props.updatestarsState(true);
        }
        else{
            this.props.updatestarsState(false);
        }
        
      }

    render() {
        return(
            <div>
                <table className="table-bordered border">
                    <h5 className="m-2">Language</h5>
                    <tbody>
                        <tr>
                            <input className="form-check-input align-middle" type="checkbox" value="" id="javascript" onChange={e => this.handleChange(e)} />
                            <label className="form-check-label">JavaScript</label>
                        </tr>
                        <tr>
                            <input className="form-check-input" type="checkbox" value="" id="java" onChange={e => this.handleChange(e)}/>
                            <label className="form-check-label">Java</label>
                        </tr>
                        <tr>
                            <input className="form-check-input" type="checkbox" value="" id="html" onChange={e => this.handleChange(e)}/>
                            <label className="form-check-label">HTML</label>
                        </tr>
                        <tr>
                            <input className="form-check-input" type="checkbox" value="" id="python" onChange={e => this.handleChange(e)}/>
                            <label className="form-check-label">Python</label>
                        </tr>
                        <tr>
                            <input className="form-check-input" type="checkbox" value="" id="swift" onChange={e => this.handleChange(e)}/>
                            <label className="form-check-label">Swift</label>
                        </tr>
                        <tr>
                            <input className="form-check-input" type="checkbox" value="" id="cpp" onChange={e => this.handleChange(e)}/>
                            <label className="form-check-label">C++</label>
                        </tr>
                        <tr>
                            <input className="form-check-input" type="checkbox" value="" id="cs" onChange={e => this.handleChange(e)}/>
                            <label className="form-check-label">C#</label>
                        </tr>
                    </tbody>
                </table>

                <input className="form-check-input" type="checkbox" value="" id="Stars" onChange={e => this.handleChangeStars(e)}/>
                <label className="form-check-label">Stars</label>
            </div>
        )
    }

}

export default Key;
